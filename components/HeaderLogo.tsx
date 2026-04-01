import Link from "next/link";

interface HeaderLogoProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export default function HeaderLogo({
  variant = "desktop",
  className,
}: HeaderLogoProps) {
  return (
    <Link
      href="/"
      aria-label="SPN Pușoiu și Miclescu — Pagina principală"
      className={className}
    >
      {variant === "desktop" ? <DesktopLogo /> : <MobileLogo />}
    </Link>
  );
}

function DesktopLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295 44"
      className="w-[295px] h-[44px] lg:w-[360px] lg:h-[54px]"
      role="img"
      aria-hidden="true"
    >
      {/* Scales of justice icon — centered in 32x44 area */}
      <g transform="translate(4, 6) scale(0.75)" fill="#C9A84C">
        {/* Pillar */}
        <rect x="18" y="8" width="2.5" height="30" rx="1" />
        {/* Base */}
        <rect x="10" y="36" width="18.5" height="2.5" rx="1" />
        {/* Beam */}
        <rect x="2" y="6" width="34.5" height="2" rx="1" />
        {/* Top finial */}
        <circle cx="19.25" cy="4" r="3" />
        {/* Left pan */}
        <line x1="5" y1="8" x2="5" y2="20" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M-2,20 Q5,28 12,20 Z" />
        {/* Right pan */}
        <line x1="33.5" y1="8" x2="33.5" y2="20" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M26.5,20 Q33.5,28 40.5,20 Z" />
      </g>

      {/* Gold vertical bar */}
      <rect
        x="36"
        y="0"
        width="2.5"
        height="44"
        rx="1"
        fill="#C9A84C"
      />

      {/* Top line — firm type */}
      <text
        x="52"
        y="14"
        fill="#C9A84C"
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight={500}
        fontSize="6.5"
        letterSpacing="0.18em"
      >
        SOCIETATEA PROFESIONALĂ NOTARIALĂ
      </text>

      {/* Bottom line — firm name */}
      <text
        x="52"
        y="36"
        fill="#FFFFFF"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight={700}
        fontSize="17"
      >
        Pușoiu &amp; Miclescu
      </text>
    </svg>
  );
}

function MobileLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={40}
      height={40}
      role="img"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
      />

      {/* Inner circle */}
      <circle
        cx="20"
        cy="20"
        r="15.5"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
      />

      {/* PM initials */}
      <text
        x="20"
        y="20"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#C9A84C"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight={600}
        fontStyle="italic"
        fontSize="16"
      >
        PM
      </text>
    </svg>
  );
}
