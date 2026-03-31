import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-heading text-8xl font-bold text-primary mb-4">
          404
        </p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Pagina nu a fost găsită
        </h1>
        <p className="font-body text-muted-foreground mb-8">
          Pagina pe care o căutați nu există sau a fost mutată. Verificați
          adresa sau reveniți la pagina principală.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Pagina Principală
        </Link>
      </div>
    </section>
  );
}
