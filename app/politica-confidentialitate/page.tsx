import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { BreadcrumbSchema } from "@/components/StructuredData";
import GoldRule from "@/components/GoldRule";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | SPN Pușoiu și Miclescu",
  description:
    "Politica de confidențialitate a Societății Profesionale Notariale Pușoiu și Miclescu. Prelucrarea datelor conform GDPR.",
  openGraph: { type: "article" },
};

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Acasă", url: `${BUSINESS.website}/` },
        { name: "Politica de Confidențialitate", url: `${BUSINESS.website}/politica-confidentialitate` },
      ]} />
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <GoldRule />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Politica de Confidențialitate
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <div className="space-y-8 font-body text-foreground/80 leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                1. Operator de Date
              </h2>
              <p>
                Operatorul de date cu caracter personal este{" "}
                <strong>{BUSINESS.legalName}</strong>, cu sediul în{" "}
                {BUSINESS.address.full}, CUI: {BUSINESS.cui}, email:{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  {BUSINESS.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                2. Datele Colectate
              </h2>
              <p>
                Prin intermediul formularului de contact de pe acest site,
                colectăm următoarele date personale:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Numele complet</li>
                <li>Numărul de telefon</li>
                <li>Adresa de email (opțional)</li>
                <li>Mesajul transmis</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                3. Scopul Prelucrării
              </h2>
              <p>
                Datele personale sunt prelucrate exclusiv în scopul răspunsului
                la solicitările dumneavoastră și al programării serviciilor
                notariale. Nu utilizăm datele în scopuri de marketing direct,
                cu excepția cazului în care ne-ați acordat consimțământul
                explicit.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                4. Temeiul Legal
              </h2>
              <p>
                Prelucrarea datelor se realizează în baza consimțământului
                dumneavoastră (art. 6 alin. 1 lit. a din Regulamentul GDPR)
                și în baza interesului legitim de a răspunde solicitărilor
                primite (art. 6 alin. 1 lit. f).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                5. Durata Stocării
              </h2>
              <p>
                Datele colectate prin formularul de contact sunt stocate pe
                durata necesară soluționării solicitării dumneavoastră, dar nu
                mai mult de 12 luni de la ultima interacțiune.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                6. Cookie-uri
              </h2>
              <p>
                Acest site utilizează cookie-uri analitice (Google Analytics 4)
                pentru a înțelege modul în care vizitatorii interacționează cu
                site-ul. Cookie-urile analitice sunt activate doar după
                obținerea consimțământului dumneavoastră explicit prin bannerul
                de cookie-uri.
              </p>
              <p className="mt-2">
                Puteți retrage consimțământul oricând prin ștergerea
                cookie-urilor din browser sau prin utilizarea butonului
                &ldquo;Refuz&rdquo; din bannerul de cookie-uri.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                7. Drepturile Dumneavoastră
              </h2>
              <p>
                Conform Regulamentului GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Dreptul de acces la datele personale</li>
                <li>Dreptul la rectificarea datelor inexacte</li>
                <li>Dreptul la ștergerea datelor (&ldquo;dreptul de a fi uitat&rdquo;)</li>
                <li>Dreptul la restricționarea prelucrării</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de a depune o plângere la ANSPDCP</li>
              </ul>
              <p className="mt-2">
                Pentru exercitarea acestor drepturi, contactați-ne la{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  {BUSINESS.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                8. Destinatari
              </h2>
              <p>
                Datele personale pot fi transmise către:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Resend (furnizor de servicii email) — pentru livrarea
                  mesajelor din formularul de contact
                </li>
                <li>
                  Google (Google Analytics 4, Google Tag Manager) — pentru
                  analiza traficului site-ului, doar cu consimțământul
                  dumneavoastră
                </li>
                <li>
                  Vercel Inc. — furnizor de hosting pentru acest site
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                9. Contact ANSPDCP
              </h2>
              <p>
                Dacă considerați că prelucrarea datelor dumneavoastră personale
                încalcă prevederile GDPR, aveți dreptul de a depune o plângere
                la Autoritatea Națională de Supraveghere a Prelucrării Datelor
                cu Caracter Personal (ANSPDCP), B-dul G-ral. Gheorghe Magheru
                28-30, Sector 1, București, email: anspdcp@dataprotection.ro.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Ultima actualizare: Aprilie 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
