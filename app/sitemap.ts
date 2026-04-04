import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://notariat-public-bucuresti.ro";
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/servicii-notariale`, lastModified: new Date(), priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/servicii-notariale/${s.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    { url: `${base}/despre-noi`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/tarife`, priority: 0.6 },
    { url: `${base}/traduceri`, priority: 0.7 },
    { url: `${base}/politica-confidentialitate`, priority: 0.3 },
  ];
}
