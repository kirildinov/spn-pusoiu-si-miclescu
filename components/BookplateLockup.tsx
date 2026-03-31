interface BookplateLockupProps {
  variant?: "light" | "dark";
  className?: string;
  width?: number;
}

export default function BookplateLockup({
  variant = "dark",
  className,
  width = 340,
}: BookplateLockupProps) {
  const nameColor = variant === "dark" ? "#FFFFFF" : "#0F1D32";
  const gold = "#C9A84C";
  const height = (width / 340) * 200;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 200"
      width={width}
      height={height}
      role="img"
      aria-label="SPN Pușoiu și Miclescu — Notariat Public"
      className={className}
    >
      {/* Outer frame */}
      <rect
        x="0.75"
        y="0.75"
        width="338.5"
        height="198.5"
        fill="none"
        stroke={gold}
        strokeWidth="1.5"
      />

      {/* Inner frame — 8px inset */}
      <rect
        x="8"
        y="8"
        width="324"
        height="184"
        fill="none"
        stroke={gold}
        strokeWidth="0.5"
      />

      {/* Top label */}
      <text
        x="170"
        y="30"
        textAnchor="middle"
        fill={gold}
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight={500}
        fontSize="8.5"
        letterSpacing="0.22em"
      >
        SOCIETATEA PROFESIONALĂ NOTARIALĂ
      </text>

      {/* Diamond ornament — left line, diamond, right line */}
      <line
        x1="127"
        y1="42"
        x2="167"
        y2="42"
        stroke={gold}
        strokeWidth="0.5"
      />
      <polygon
        points="170,39 173,42 170,45 167,42"
        fill={gold}
      />
      <line
        x1="173"
        y1="42"
        x2="213"
        y2="42"
        stroke={gold}
        strokeWidth="0.5"
      />

      {/* Name block */}
      <text
        x="170"
        y="85"
        textAnchor="middle"
        fill={nameColor}
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight={700}
        fontSize="26"
      >
        Pușoiu Iuliana
      </text>

      <text
        x="170"
        y="105"
        textAnchor="middle"
        fill={gold}
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight={400}
        fontStyle="italic"
        fontSize="14"
      >
        și
      </text>

      <text
        x="170"
        y="128"
        textAnchor="middle"
        fill={nameColor}
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight={700}
        fontSize="22"
      >
        Miclescu Bogdan Constantin
      </text>

      {/* Bottom rule */}
      <line
        x1="60"
        y1="155"
        x2="280"
        y2="155"
        stroke={gold}
        strokeWidth="0.5"
      />

      {/* Bottom label */}
      <text
        x="170"
        y="175"
        textAnchor="middle"
        fill={gold}
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight={500}
        fontSize="6.5"
        letterSpacing="0.14em"
      >
        NOTARIAT PUBLIC · CALEA CĂLĂRAȘILOR 311 · SECTOR 3 · BUCUREȘTI
      </text>
    </svg>
  );
}
