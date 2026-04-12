"use client";

import { useState, useActionState, useEffect, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { submitContact, type ContactFormState } from "@/app/contact/actions";
import { services } from "@/lib/services";
import { track } from "@/lib/tracking";
import { Send } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const tracked = useRef(false);

  useEffect(() => {
    if (state.success && !tracked.current) {
      tracked.current = true;
      track({
        event: "cta_click",
        event_category: "form",
        event_label: "contact_form_submit",
      });
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm text-center">
        <h3 className="font-heading text-2xl font-bold text-foreground">
          Mulțumim!
        </h3>
        <p className="text-muted-foreground mt-2">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm space-y-5"
    >
      {/* Honeypot — must remain empty. Hidden from users, visible to bots. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground mb-1.5 block"
        >
          Nume complet <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
        />
        {state.errors?.name && (
          <p className="text-destructive text-xs mt-1">{state.errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="text-sm font-medium text-foreground mb-1.5 block"
        >
          Telefon <span className="text-destructive">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="form-input"
        />
        {state.errors?.phone && (
          <p className="text-destructive text-xs mt-1">{state.errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground mb-1.5 block"
        >
          Email (opțional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
        />
        {state.errors?.email && (
          <p className="text-destructive text-xs mt-1">{state.errors.email}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="text-sm font-medium text-foreground mb-1.5 block"
        >
          Serviciu de interes
        </label>
        <select id="service" name="service" className="form-input">
          <option value="">Selectați serviciul</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        {state.errors?.service && (
          <p className="text-destructive text-xs mt-1">
            {state.errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground mb-1.5 block"
        >
          Mesajul dumneavoastră <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="form-input"
        />
        {state.errors?.message && (
          <p className="text-destructive text-xs mt-1">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Privacy */}
      <div>
        <label className="flex items-start gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-0.5"
          />
          <span>
            Accept{" "}
            <a
              href="/politica-confidentialitate"
              className="text-primary underline"
            >
              politica de confidențialitate
            </a>
          </span>
        </label>
        {state.errors?.privacy && (
          <p className="text-destructive text-xs mt-1">
            {state.errors.privacy}
          </p>
        )}
      </div>

      {/* Turnstile */}
      <div className="my-4">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => setTurnstileToken("")}
          onExpire={() => setTurnstileToken("")}
          options={{
            theme: "light",
            language: "ro",
            size: "normal",
          }}
        />
      </div>
      <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />

      {/* Submit */}
      <button
        type="submit"
        disabled={!turnstileToken || isPending}
        className="btn-primary w-full justify-center py-3"
      >
        <Send className="w-4 h-4" />
        {isPending ? "Se trimite..." : "Trimite mesajul"}
      </button>

      {/* General error */}
      {state.message && !state.success && (
        <p className="text-destructive text-sm text-center">{state.message}</p>
      )}
    </form>
  );
}
