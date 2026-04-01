import { FileSearch, CalendarCheck, PenTool, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: FileSearch,
    title: "Consultare",
    description:
      "Discutăm cerințele dumneavoastră și identificăm actele necesare pentru procedura notarială.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Programare",
    description:
      "Stabilim o dată convenabilă și vă comunicăm documentele de pregătit.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Autentificare",
    description:
      "Întocmim și autentificăm actul notarial cu respectarea tuturor cerințelor legale.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Predare",
    description:
      "Primiți actele autentificate și asigurăm înscrierea în registrele publice.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-gradient-to-br from-secondary to-secondary-lighter py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="uppercase text-xs tracking-[0.15em] text-primary font-body font-medium">
            Cum Funcționează
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-3">
            Procesul Nostru
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-heading text-5xl font-bold text-primary/30">
                {step.number}
              </p>
              <step.icon
                className="text-primary w-8 h-8 mt-2"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-xl font-semibold text-secondary-foreground mt-3">
                {step.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
