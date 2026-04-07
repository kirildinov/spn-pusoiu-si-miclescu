import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://maps.googleapis.com https://maps.gstatic.com https://*.ggpht.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com; frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com; frame-ancestors 'self'",
  },
];

const config: NextConfig = {
  async redirects() {
    return [
      // Old Joomla content pages → new routes
      { source: "/index.php/acte-necesare/acte-vanzare", destination: "/servicii-notariale/contracte-vanzare", permanent: true },
      { source: "/servicii-notariale/contracte-vanzare-cumparare", destination: "/servicii-notariale/contracte-vanzare", permanent: true },
      { source: "/index.php/acte-necesare/acte-succesiune", destination: "/servicii-notariale/succesiuni", permanent: true },
      { source: "/index.php/acte-necesare/procedura-divort", destination: "/servicii-notariale/divort-la-notar", permanent: true },
      { source: "/index.php/acte-necesare/acte-deplasare", destination: "/contact", permanent: true },
      { source: "/index.php/acte-necesare/declaratii", destination: "/servicii-notariale/declaratii-notariale", permanent: true },
      { source: "/index.php/acte-necesare/procuri", destination: "/servicii-notariale/procuri-notariale", permanent: true },
      { source: "/index.php/acte-necesare/donatia", destination: "/servicii-notariale/donatii", permanent: true },
      { source: "/index.php/acte-necesare/schimb", destination: "/servicii-notariale/donatii", permanent: true },
      { source: "/index.php/tarife", destination: "/tarife", permanent: true },
      { source: "/index.php/traduceri", destination: "/traduceri", permanent: true },
      { source: "/index.php/contact", destination: "/contact", permanent: true },
      { source: "/index.php/component/k2/item/51-cras-tempus-vestibulum-lorem", destination: "/", permanent: true },
      // Legislation pages → official Romanian legislation portal
      { source: "/index.php/legislatie/:path*", destination: "https://legislatie.just.ro/", permanent: true },
      // Block old Joomla admin panel
      { source: "/administrator/:path*", destination: "/", permanent: true },
      // Catch-all for any remaining Joomla URLs — MUST be LAST
      { source: "/index.php/:path*", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default config;
