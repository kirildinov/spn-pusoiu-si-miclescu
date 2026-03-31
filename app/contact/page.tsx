import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import ContactForm from "@/components/ContactForm";
import GoldRule from "@/components/GoldRule";

export const metadata: Metadata = {
  title: "Contact Notar Sector 3 București",
  description:
    "Contactați notariatul Pușoiu și Miclescu pe Calea Călărașilor 311, Sector 3. Telefon: 0731 467 071. Program: Luni-Vineri 09:00-17:00.",
  openGraph: { type: "website" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <GoldRule />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Contact
          </h1>
          <p className="font-body text-secondary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Programați o vizită sau trimiteți-ne un mesaj. Suntem disponibili
            în zilele lucrătoare între orele 09:00 și 17:00.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Informații de Contact
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Telefon</p>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="font-body text-primary hover:text-primary-hover transition-colors text-lg font-semibold"
                    >
                      {BUSINESS.phoneFormatted}
                    </a>
                    <div className="mt-1 space-y-0.5">
                      {BUSINESS.phoneSecondary.map((phone, i) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {BUSINESS.phoneSecondaryFormatted[i]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">WhatsApp</p>
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(BUSINESS.whatsapp.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-primary hover:text-primary-hover transition-colors"
                    >
                      Trimiteți un mesaj pe WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="font-body text-primary hover:text-primary-hover transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Adresă</p>
                    <p className="font-body text-muted-foreground">
                      {BUSINESS.address.full}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {BUSINESS.address.landmark}
                    </p>
                    <a
                      href={BUSINESS.geo.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-primary hover:text-primary-hover transition-colors mt-2 inline-block"
                    >
                      Obțineți indicații →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Program</p>
                    <p className="font-body text-muted-foreground">
                      {BUSINESS.hours.display}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Sâmbătă – Duminică: Închis
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src={BUSINESS.geo.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația biroului notarial pe hartă"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Trimiteți un Mesaj
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
