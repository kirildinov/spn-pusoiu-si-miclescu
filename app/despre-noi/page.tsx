import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Clock, Award, Users } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { BreadcrumbSchema } from "@/components/StructuredData";
import GoldRule from "@/components/GoldRule";
import PlaceholderAvatar from "@/components/PlaceholderAvatar";

export const metadata: Metadata = {
  title: "Despre SPN Pușoiu și Miclescu | Notar Sector 3 București",
  description:
    "Societate Profesională Notarială din 2012 în Sector 3 București. Echipa noastră: Notar Pușoiu Iuliana și Notar Miclescu Bogdan Constantin.",
  openGraph: { type: "article" },
};

export default function DespreNoiPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Acasă", url: `${BUSINESS.website}/` },
        { name: "Despre Noi", url: `${BUSINESS.website}/despre-noi` },
      ]} />
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <GoldRule />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Despre Societatea Notarială Pușoiu și Miclescu
          </h1>
          <p className="font-body text-secondary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Societatea Profesională Notarială Pușoiu Iuliana și Miclescu Bogdan
            Constantin — servicii notariale de încredere din 2012.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="drop-cap">
            <p className="font-body text-foreground/80 leading-relaxed text-lg mb-6">
              Societatea Profesională Notarială Pușoiu Iuliana și Miclescu
              Bogdan Constantin funcționează din anul 2012, pe Calea Călărașilor
              nr. 311, în Sectorul 3 al Municipiului București. De-a lungul
              anilor, am construit o practică notarială bazată pe precizie,
              eficiență și respect față de fiecare client care ne trece pragul.
            </p>
          </div>
          <p className="font-body text-foreground/80 leading-relaxed text-lg mb-6">
            Biroul nostru este situat la parter, cu intrare stradală directă,
            vis-a-vis de Casa de Asigurări de Sănătate și de benzinăria MOL.
            Locația este ușor accesibilă și cu mijloacele de transport în comun,
            aflându-se la doar 2 minute de mers pe jos de stația de metrou Piața
            Muncii.
          </p>
          <p className="font-body text-foreground/80 leading-relaxed text-lg mb-6">
            Oferim servicii notariale complete, atât pentru persoane fizice, cât
            și pentru persoane juridice: autentificări de contracte, succesiuni,
            divorțuri, procuri, declarații, legalizări, acte pentru societăți și
            traduceri legalizate. Fiecare act este întocmit cu atenție la
            detalii și cu respectarea tuturor cerințelor legale.
          </p>
          <p className="font-body text-foreground/80 leading-relaxed text-lg">
            În măsura în care natura actului permite, încurajăm întocmirea pe
            loc a documentelor cu grad redus de complexitate, prin intermediul
            unui departament dedicat acestor servicii. Astfel, pentru acte
            precum declarațiile de călătorie pentru minori în afara țării sau
            procurile cu caracter contabil, oferim soluții rapide și eficiente.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <GoldRule />
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-gold-600 mb-3">
              Echipa Noastră
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Notarii Publici
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pușoiu Iuliana */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <PlaceholderAvatar
                initials="PI"
                className="w-full aspect-[4/5]"
              />
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Pușoiu Iuliana
                </h3>
                <p className="font-body text-primary text-sm font-medium mt-1">
                  Notar Public
                </p>
              </div>
            </div>

            {/* Miclescu Bogdan Constantin */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/team-miclescu-bogdan.webp"
                alt="Notar public Miclescu Bogdan Constantin"
                width={400}
                height={500}
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Miclescu Bogdan Constantin
                </h3>
                <p className="font-body text-primary text-sm font-medium mt-1">
                  Notar Public
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Din 2012
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Peste 14 ani de activitate notarială continuă.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                2 Notari
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Doi notari publici cu experiență complementară.
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Sector 3
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Calea Călărașilor 311, la 2 minute de Piața Muncii.
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Luni – Vineri
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Program: 09:00 – 17:00.
              </p>
            </div>
          </div>
        </div>
      </section>

</>
  );
}
