"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderNavProps {
  navLinks: NavLink[];
}

export default function HeaderNav({ navLinks }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden lg:flex items-center gap-6" aria-label="Navigare principală">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium text-[0.9375rem] transition-colors ${
              isActive(link.href)
                ? "text-gold-400"
                : "text-secondary-foreground/80 hover:text-gold-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile: Sună button + hamburger */}
      <div className="flex items-center gap-3 lg:hidden">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="btn-primary text-sm px-3 py-2"
        >
          Sună
        </a>
        <button
          type="button"
          className="text-gold-400"
          onClick={() => setIsOpen(true)}
          aria-label="Deschide meniul"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-down panel */}
          <div className="relative bg-navy-600 w-full">
            <div className="max-w-7xl mx-auto px-6">
              {/* Header row */}
              <div className="flex items-center justify-between h-[72px]">
                <span className="text-secondary-foreground font-heading font-semibold text-lg">
                  Meniu
                </span>
                <button
                  type="button"
                  className="text-gold-400"
                  onClick={() => setIsOpen(false)}
                  aria-label="Închide meniul"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col pb-6" aria-label="Navigare mobilă">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 px-2 text-base font-medium transition-colors border-b border-secondary-foreground/10 ${
                      isActive(link.href)
                        ? "text-gold-400"
                        : "text-secondary-foreground/80 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Phone CTA */}
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="btn-primary mt-4 justify-center"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  {BUSINESS.phoneFormatted}
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
