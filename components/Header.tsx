import Link from "next/link";
import HeaderLogo from "@/components/HeaderLogo";
import HeaderNav from "@/components/HeaderNav";
import { BUSINESS } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/tarife", label: "Tarife" },
  { href: "/traduceri", label: "Traduceri" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <HeaderLogo variant="desktop" />

        <div className="flex items-center gap-6">
          <HeaderNav navLinks={navLinks} />

          {/* Phone CTA — desktop only */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="btn-primary hidden lg:inline-flex"
          >
            {BUSINESS.phoneFormatted}
          </a>
        </div>
      </div>
    </header>
  );
}
