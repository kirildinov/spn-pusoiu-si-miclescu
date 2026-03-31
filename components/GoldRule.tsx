export default function GoldRule({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center mb-3 ${className ?? ""}`} aria-hidden="true">
      <div className="w-6 h-0.5 bg-gold-300 rounded-full" />
    </div>
  );
}
