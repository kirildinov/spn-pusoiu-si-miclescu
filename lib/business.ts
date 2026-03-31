export const BUSINESS = {
  name: "SPN Pușoiu și Miclescu",
  legalName:
    "Societatea Profesională Notarială Pușoiu Iuliana și Miclescu Bogdan Constantin",
  cui: "30577583",
  address: {
    street: "Calea Călărașilor 311, Bl. 71, Sc. 2, Ap. 37, Parter",
    locality: "București",
    region: "Sector 3",
    postalCode: "030621",
    country: "RO" as const,
    full: "Calea Călărașilor 311, Bl. 71, Sc. 2, Ap. 37, Sector 3, București 030621",
    landmark:
      "Vis-a-vis de Casa de Asigurări de Sănătate și benzinăria MOL",
  },
  phone: "+40731467071",
  phoneFormatted: "0731 467 071",
  phoneSecondary: ["+40775359577", "+40771044868"] as const,
  phoneSecondaryFormatted: ["0775 359 577", "0771 044 868"] as const,
  email: "miclescubnp@notariat-sector3.ro",
  emailSecondary: [
    "miclescubnp@yahoo.com",
    "miclescubnp@gmail.com",
  ] as const,
  whatsapp: {
    number: "40731467071",
    message: "Bună ziua, doresc să programez un act notarial.",
  },
  geo: {
    lat: 44.4318608,
    lng: 26.1355653,
    placeId: "ChIJwXVNbtf-sUARO_1UAj7NbRk",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1500!2d26.1355653!3d44.4318608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fed76e4d75c1%3A0x196dcd3e0254fd3b!2sSocietatea+Profesional%C4%83+Notarial%C4%83+Pu%C8%99oiu+Iuliana+%C8%99i+Miclescu+Bogdan+Constantin!5e0!3m2!1sro!2sro",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=44.4318608,26.1355653",
  },
  social: {
    facebook:
      "https://www.facebook.com/p/Societate-Profesionala-Notariala-Pusoiu-Iuliana-si-Miclescu-Bogdan-100064660000705/",
  },
  website: "https://notariat-public-bucuresti.ro",
  rating: { value: "4.6", count: "136" },
  hours: {
    display: "Luni – Vineri: 09:00 – 17:00",
    structured: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ] as const,
        opens: "09:00",
        closes: "17:00",
      },
    ],
  },
  foundedYear: 2012,
  notaries: ["Pușoiu Iuliana", "Miclescu Bogdan Constantin"] as const,
  priceRange: "$$",
  translationPartner: {
    name: "VreauTradus.ro",
    url: "https://vreautradus.ro",
  },
} as const;
