import { BUSINESS } from "@/lib/business";

const stats = [
  { value: "14+", label: "Ani de Experiență" },
  { value: "4.6★", label: "Rating Google" },
  { value: "136+", label: "Recenzii Clienți" },
  { value: "10+", label: "Servicii Notariale" },
];

export default function StatsBar() {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-secondary-foreground/80 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
