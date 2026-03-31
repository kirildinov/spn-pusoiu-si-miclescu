import type { Metadata } from "next";
import { BUSINESS } from "./business";

export function createMetadata(overrides: Partial<Metadata> & { title: string; description: string }): Metadata {
  return {
    ...overrides,
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: BUSINESS.name,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      ...overrides.openGraph,
    },
  };
}
