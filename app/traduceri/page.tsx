import type { Metadata } from "next";
import Link from "next/link";
import { Languages, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { BreadcrumbSchema } from "@/components/StructuredData";
import GoldRule from "@/components/GoldRule";

export const metadata: Metadata = {
  title: "Traduceri Legalizate Notar București | SPN Miclescu",
  description:
    "Traduceri legalizate și apostilate la notar public în Sector 3 București. Limbi disponibile, tarife, termen de execuție.",
  openGraph: { type: "article" },
};

const languages = [
  "Engleză",
  "Franceză",
  "Germană",
  "Spaniolă",
  "Italiană",
  "Portugheză",
  "Rusă",
  "Ucraineană",
  "Bulgară",
  "Maghiară",
  "Turcă",
  "Arabă",
  "Chineză",
  "Japoneză",
  "Coreeană",
  "Și alte limbi",
];

export default function TraduceriPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Acasă", url: `${BUSINESS.website}/` },
        { name: "Traduceri Legalizate", url: `${BUSINESS.website}/traduceri` },
      ]} />
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <GoldRule />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Traduceri Legalizate la Notar în București
          </h1>
          <p className="font-body text-secondary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Legalizăm traduceri efectuate de traducători autorizați în peste 30 de limbi.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* How it works */}
          <div className="mb-16">
            <GoldRule className="!justify-start" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Cum Funcționează
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                  1
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Aduceți Actul
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Prezentați actul original la biroul nostru sau trimiteți-l
                  prin email pentru evaluare.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                  2
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Traducere Autorizată
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Traducerea este realizată de traducători autorizați de Ministerul Justiției.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                  3
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Legalizare Notarială
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Legalizăm traducerea la birou, conferindu-i valoare juridică
                  deplină.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Servicii Disponibile
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Legalizare Traducere",
                  desc: "Legalizarea traducerilor efectuate de traducători autorizați de Ministerul Justiției.",
                },
                {
                  title: "Traduceri Autorizate",
                  desc: "Traduceri autorizate rapide în peste 30 de limbi, coordonate direct cu biroul nostru.",
                },
                {
                  title: "Apostilă Haga",
                  desc: "Informații și asistență pentru obținerea apostilei pe actele oficiale românești.",
                },
                {
                  title: "Supralegalizare",
                  desc: "Procedura necesară pentru actele destinate statelor care nu sunt membre ale Convenției de la Haga.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-5"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-body font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Limbi Disponibile
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5"
                >
                  <Languages className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                  <span className="font-body text-sm text-foreground">
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground mb-6">
              Pentru informații despre tarife și termene, contactați-ne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
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
