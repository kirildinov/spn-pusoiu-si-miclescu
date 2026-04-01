import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Phone,
  ArrowRight,
  Star,
  MessageCircle,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsBar from "@/components/StatsBar";
import ProcessSteps from "@/components/ProcessSteps";
import GoldRule from "@/components/GoldRule";
import BookplateLockup from "@/components/BookplateLockup";

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-lighter/50 to-secondary" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary-lighter/60 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
                <Shield className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <span className="text-xs font-body font-medium text-primary uppercase tracking-[0.15em]">
                  Notar Public · Sector 3 · București
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground tracking-tight leading-[1.1] mb-6">
                Actele Dumneavoastră,{" "}
                <em className="text-gradient-gold not-italic">Autentificate</em>{" "}
                cu Încredere
              </h1>

              <p className="font-body text-lg text-secondary-foreground/80 leading-relaxed max-w-xl mb-8">
                Servicii notariale complete pe Calea Călărașilor 311, la 2
                minute de Piața Muncii. Peste 12 ani de experiență, 136 de
                recenzii pozitive.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                  Programați o Consultație
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/servicii" className="btn-hero-secondary text-base px-8 py-3.5">
                  Serviciile Noastre
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                    12+
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-secondary-foreground/60 mt-1">
                    Ani Experiență
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                    4.6
                    <Star className="w-5 h-5 inline-block ml-1 -mt-1 fill-primary text-primary" />
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-secondary-foreground/60 mt-1">
                    Rating Google
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                    136+
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-secondary-foreground/60 mt-1">
                    Recenzii
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-notariat.webp"
                  alt="Statuia Justiției — simbol al încrederii și autenticității notariale"
                  width={800}
                  height={1000}
                  priority
                  className="w-full h-auto object-cover"
                />

                {/* Quote overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-secondary/85 backdrop-blur-sm rounded-lg m-4 p-6">
                  <p className="font-heading text-lg italic text-secondary-foreground/90 text-center whitespace-nowrap">
                    &ldquo;Fiat satisfactio in omni sigillo, fides in omni
                    subscriptione.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <GoldRule />
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
              Ce Vă Oferim
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Servicii Notariale Complete
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Acoperim întreaga gamă de servicii notariale, de la autentificări
              de contracte până la succesiuni și traduceri legalizate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/servicii" className="btn-outline">
              Toate Serviciile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Visual */}
            <div className="relative">
              <div className="bg-secondary rounded-2xl aspect-[3/4] max-w-md mx-auto flex items-center justify-center p-8">
                <BookplateLockup variant="dark" width={300} />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-2 lg:right-4 bg-card border border-border rounded-xl p-5 shadow-lg">
                <p className="font-heading text-3xl font-bold text-primary">
                  {BUSINESS.rating.value}
                  <Star className="w-5 h-5 inline-block ml-1 -mt-1 fill-primary text-primary" />
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  din {BUSINESS.rating.count} recenzii Google
                </p>
              </div>
            </div>

            {/* Right — Text */}
            <div>
              <GoldRule className="!justify-start" />
              <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
                Despre Noi
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Experiență și Profesionalism din 2012
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                Societatea Profesională Notarială Pușoiu Iuliana și Miclescu
                Bogdan Constantin activează din 2012 pe Calea Călărașilor 311,
                în Sectorul 3 al Capitalei. Oferim servicii notariale complete
                pentru persoane fizice și juridice, cu accent pe precizie și
                eficiență.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed mb-8">
                Biroul nostru se află vis-a-vis de Casa de Asigurări de
                Sănătate și benzinăria MOL, la 2 minute de mers pe jos de
                Piața Muncii.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-body font-medium text-foreground">
                      Doi notari publici cu experiență
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Pușoiu Iuliana și Miclescu Bogdan Constantin
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-body font-medium text-foreground">
                      Program convenabil
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {BUSINESS.hours.display}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-body font-medium text-foreground">
                      Acte finalizate în aceeași zi
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Majoritatea serviciilor se finalizează la prima vizită
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/despre-noi" className="btn-primary mt-8">
                Aflați Mai Multe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <GoldRule />
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
              Recenzii
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ce Spun Clienții Noștri
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={`https://search.google.com/local/reviews?placeid=${BUSINESS.geo.placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Toate Recenziile pe Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GoldRule />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight mb-4">
            Aveți nevoie de un act notarial?
          </h2>
          <p className="font-body text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactați-ne telefonic sau pe WhatsApp pentru programări și
            informații. Suntem disponibili în zilele lucrătoare între orele
            09:00 și 17:00.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-primary text-base px-8 py-3.5"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phoneFormatted}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(BUSINESS.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary text-base px-8 py-3.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
