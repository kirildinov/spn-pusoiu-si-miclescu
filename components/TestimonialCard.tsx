import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-primary text-primary"
          />
        ))}
      </div>
      <p className="font-body text-foreground text-sm leading-relaxed mt-3 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <p className="text-muted-foreground text-xs font-medium mt-4">
        &mdash; {testimonial.name}
      </p>
    </div>
  );
}
