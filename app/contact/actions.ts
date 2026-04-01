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
