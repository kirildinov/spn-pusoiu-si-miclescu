import Link from "next/link";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/servicii/${service.slug}`}>
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
        <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
        <h3 className="font-heading text-xl font-semibold text-foreground mt-4 mb-2">
          {service.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.shortDescription}
        </p>
        <span className="text-primary text-sm font-medium mt-4 inline-block">
          Detalii &rarr;
        </span>
      </div>
    </Link>
  );
}
