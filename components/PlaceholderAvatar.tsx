interface PlaceholderAvatarProps {
  initials: string;
  className?: string;
}

export default function PlaceholderAvatar({
  initials,
  className,
}: PlaceholderAvatarProps) {
  return (
    <div
      className={`bg-[#0F1D32] rounded-2xl flex items-center justify-center ${className ?? ""}`}
      role="img"
      aria-label={initials}
    >
      <span
        className="text-[#C9A84C] font-bold text-4xl select-none"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {initials}
      </span>
    </div>
  );
}
