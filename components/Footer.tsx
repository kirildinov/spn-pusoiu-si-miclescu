"use client";

import Link from "next/link";
import BookplateLockup from "@/components/BookplateLockup";
import { BUSINESS } from "@/lib/business";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const serviceLinks = [
  { href: "/servicii-notariale/contracte-vanzare-cumparare", label: "Contracte Vânzare-Cumpărare" },
  { href: "/servicii-notariale/succesiuni", label: "Succesiuni" },
  { href: "/servicii-notariale/divort-la-notar", label: "Divorț la Notar" },
  { href: "/servicii-notariale/procuri-notariale", label: "Procuri Notariale" },
  { href: "/servicii-notariale/declaratii-notariale", label: "Declarații Notariale" },
];

const infoLinks = [
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/tarife", label: "Tarife" },
  { href: "/traduceri", label: "Traduceri" },
  { href: "/contact", label: "Contact" },
  { href: "/politica-confidentialitate", label: "Politica de Confidențialitate" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* BookplateLockup */}
      <div className="py-12 flex justify-center">
        <BookplateLockup variant="dark" />
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 — Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
            Contact
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                {BUSINESS.phoneFormatted}
              </a>
            </li>
            {BUSINESS.phoneSecondary.map((phone, i) => (
              <li key={phone}>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  {BUSINESS.phoneSecondaryFormatted[i]}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 — Servicii */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
            Servicii
          </h3>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Informații */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
            Informații
          </h3>
          <ul className="space-y-3">
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("reopen-cookie-consent"))}
                className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Setări Cookie-uri
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4 — Program & Locație */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
            Program & Locație
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-secondary-foreground/70 text-sm">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.5} />
              {BUSINESS.hours.display}
            </li>
            <li className="flex items-start gap-2 text-secondary-foreground/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.5} />
              {BUSINESS.address.full}
            </li>
            <li>
              <a
                href={BUSINESS.geo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm underline underline-offset-2"
              >
                Indicații Google Maps
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {BUSINESS.foundedYear}&ndash;{currentYear} {BUSINESS.legalName}. CUI: {BUSINESS.cui}
          </p>
          <p className="text-xs text-secondary-foreground/50">
            Website developed by <a href="https://pixelmill.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pixelmill</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
