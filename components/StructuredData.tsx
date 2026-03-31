import { BUSINESS } from "@/lib/business";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Notary",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.website,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: BUSINESS.hours.structured.map((schedule) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: schedule.days,
      opens: schedule.opens,
      closes: schedule.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    },
    priceRange: BUSINESS.priceRange,
    areaServed: {
      "@type": "City",
      name: "București",
    },
    sameAs: [BUSINESS.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  service: {
    name: string;
    fullDescription: string;
    slug: string;
  };
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.fullDescription,
    url: `${BUSINESS.website}/servicii/${service.slug}`,
    provider: {
      "@type": "Notary",
      name: BUSINESS.name,
      url: BUSINESS.website,
    },
    areaServed: {
      "@type": "City",
      name: "București",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
