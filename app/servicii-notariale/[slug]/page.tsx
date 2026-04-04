import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import GoldRule from "@/components/GoldRule";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: { type: "article" },
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Acasă", url: `${BUSINESS.website}/` },
        { name: "Servicii", url: `${BUSINESS.website}/servicii-notariale` },
        { name: service.name, url: `${BUSINESS.website}/servicii-notariale/${service.slug}` },
      ]} />
      <ServiceSchema service={service} />
      {service.faqs.length > 0 && <FAQSchema faqs={service.faqs} />}

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/servicii-notariale"
            className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Toate Serviciile
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
              {service.name} în București
            </h1>
          </div>
          <p className="font-body text-secondary-foreground/80 text-lg max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <GoldRule className="!justify-start" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Despre acest serviciu
                </h2>
                <p className="font-body text-foreground/80 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </div>

              {/* Sub-services */}
              {service.subServices.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Ce include
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.name}
                        className="bg-card border border-border rounded-lg p-5"
                      >
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                          {sub.name}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Required documents */}
              {service.acteNecesare.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Acte Necesare
                  </h2>
                  <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
                    <ul className="space-y-3">
                      {service.acteNecesare.map((act, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                          <span className="font-body text-foreground/80">
                            {act}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Întrebări Frecvente
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <details key={i} className="group border border-border rounded-lg">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <span className="font-body font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-5 pb-5">
                          <p className="font-body text-foreground/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Programați o Consultație
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Contactați-ne pentru programări sau pentru a afla mai multe
                  despre {service.name.toLowerCase()}.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="btn-primary w-full justify-center"
                  >
                    {BUSINESS.phoneFormatted}
                  </a>
                  <Link
                    href="/contact"
                    className="btn-outline w-full justify-center"
                  >
                    Trimiteți un Mesaj
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground">
                    <FileText className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                    {BUSINESS.hours.display}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Alte Servicii
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicii-notariale/${s.slug}`}
                  className="bg-card border border-border rounded-lg p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4"
                >
                  <s.icon className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {s.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Detalii
                      <ArrowRight className="w-3 h-3 inline-block ml-1" />
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
