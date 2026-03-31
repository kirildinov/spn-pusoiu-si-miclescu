import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Info } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import GoldRule from "@/components/GoldRule";

export const metadata: Metadata = {
  title: "Tarife Notar Public Sector 3",
  description:
    "Informații despre tarifele notariale. Onorarii stabilite prin ordin al ministrului justiției. Notar Sector 3, Calea Călărașilor 311.",
  openGraph: { type: "website" },
};

const tarifCategories = [
  {
    title: "Autentificări Contracte",
    items: [
      "Contract de vânzare-cumpărare imobil",
      "Antecontract de vânzare",
      "Contract de donație",
      "Contract de schimb",
      "Contract de ipotecă",
      "Contract de închiriere",
    ],
  },
  {
    title: "Succesiuni",
    items: [
      "Deschidere dosar succesoral",
      "Certificat de moștenitor",
      "Testament autentic",
    ],
  },
  {
    title: "Divorț",
    items: [
      "Divorț fără copii minori",
      "Divorț cu copii minori",
      "Partaj bunuri comune",
    ],
  },
  {
    title: "Procuri și Declarații",
    items: [
      "Procură generală",
      "Procură specială",
      "Declarație pe propria răspundere",
      "Declarație de notorietate",
    ],
  },
  {
    title: "Legalizări",
    items: [
      "Copie legalizată (per pagină)",
      "Legalizare de semnătură",
      "Specimen de semnătură",
      "Dare de dată certă",
    ],
  },
  {
    title: "Traduceri",
    items: [
      "Legalizare traducere (per pagină)",
      "Traducere autorizată (prin partener)",
    ],
  },
];

export default function TarifePage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <GoldRule />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Tarife
          </h1>
          <p className="font-body text-secondary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Onorariile notariale sunt stabilite prin Ordinul ministrului
            justiției și variază în funcție de tipul actului și valoarea
            tranzacției.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 mb-12 flex items-start gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-body font-medium text-foreground mb-1">
                Informații despre tarife
              </p>
              <p className="font-body text-sm text-foreground/80 leading-relaxed">
                Tarifele exacte depind de tipul actului, valoarea tranzacției și
                complexitatea procedurii. Contactați-ne telefonic sau prin
                formularul de contact pentru o estimare personalizată. Toate
                onorariile respectă prevederile legale în vigoare.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {tarifCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="bg-muted px-6 py-4 border-b border-border">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <ul className="divide-y divide-border">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="px-6 py-3.5 flex items-center justify-between"
                    >
                      <span className="font-body text-foreground/80">
                        {item}
                      </span>
                      <span className="font-body text-xs text-muted-foreground whitespace-nowrap ml-4">
                        La cerere
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground mb-6">
              Pentru o estimare exactă, contactați-ne cu detaliile actului
              notarial dorit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-primary"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phoneFormatted}
              </a>
              <Link href="/contact" className="btn-outline">
                Trimiteți un Mesaj
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
