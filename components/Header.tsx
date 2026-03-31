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
        {/* Desktop logo */}
        <HeaderLogo variant="desktop" className="hidden lg:block" />
        {/* Mobile logo */}
        <HeaderLogo variant="mobile" className="lg:hidden" />

        <div className="flex items-center gap-6">
          <HeaderNav navLinks={navLinks} />

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="btn-primary hidden lg:inline-flex"
          >
            Programați
          </Link>
        </div>
      </div>
    </header>
  );
}
