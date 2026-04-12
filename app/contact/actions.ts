"use server";

import { Resend } from "resend";
import { z } from "zod";
import { BUSINESS } from "@/lib/business";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  phone: z.string().min(8, "Telefonul este obligatoriu"),
  email: z
    .string()
    .email("Email invalid")
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  message: z.string().min(10, "Mesajul este prea scurt").max(1000),
  privacy: z.literal("on", {
    error: "Trebuie să acceptați politica de confidențialitate",
  }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check — silently succeed if filled
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { success: true, message: "Mesajul a fost trimis. Vă contactăm în cel mai scurt timp." };
  }

  // Cloudflare Turnstile verification
  const turnstileToken = formData.get("cf-turnstile-response");
  if (typeof turnstileToken !== "string" || turnstileToken.length === 0) {
    return {
      success: false,
      message: "Verificarea de securitate a eșuat. Vă rugăm să reîncărcați pagina și să încercați din nou.",
    };
  }

  const turnstileVerify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY ?? "",
        response: turnstileToken,
      }),
    }
  );

  const turnstileResult = (await turnstileVerify.json()) as { success: boolean };
  if (!turnstileResult.success) {
    return {
      success: false,
      message: "Verificarea de securitate a eșuat. Vă rugăm să încercați din nou.",
    };
  }

  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      success: false,
      message: "Verificați câmpurile completate.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, phone, email, service, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "noreply@pixelmill.dev",
      to: BUSINESS.email,
      replyTo: email || undefined,
      subject: `Mesaj nou de pe site — ${name}`,
      text: `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email || "—"}\nServiciu: ${service || "—"}\n\nMesaj:\n${message}`,
    });

    return {
      success: true,
      message: "Mesajul a fost trimis. Vă contactăm în cel mai scurt timp.",
    };
  } catch {
    return {
      success: false,
      message: `Eroare la trimitere. Sunați-ne direct la ${BUSINESS.phoneFormatted}.`,
    };
  }
}
