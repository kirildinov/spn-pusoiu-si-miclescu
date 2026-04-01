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
      viewBox="0 0 260 44"
      className="w-[260px] h-[44px] lg:w-[320px] lg:h-[54px]"
      role="img"
      aria-hidden="true"
    >
      {/* Gold vertical bar */}
      <rect
        x="0"
        y="0"
        width="2.5"
        height="44"
        rx="1"
        fill="#C9A84C"
      />

      {/* Top line — firm type */}
      <text
        x="16.5"
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
        x="16.5"
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
