import type { Metadata } from "next";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import GoldRule from "@/components/GoldRule";

export const metadata: Metadata = {
  title: "Servicii Notariale București",
  description:
    "Toate serviciile notariale: vânzări, succesiuni, divorțuri, procuri, declarații, traduceri legalizate. Notar public Calea Călărașilor 311.",
  openGraph: { type: "website" },
};

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <GoldRule />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Servicii Notariale
          </h1>
          <p className="font-body text-secondary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Oferim gama completă de servicii notariale pentru persoane fizice și
            juridice. Selectați un serviciu pentru detalii, acte necesare și
            întrebări frecvente.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
