export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria D.",
    text: "Am rezolvat succesiunea în timp record. Totul a fost explicat clar, fără termeni complicați. Recomand cu încredere.",
    rating: 5,
    date: "2024-11",
  },
  {
    name: "Andrei P.",
    text: "Profesionalism desăvârșit. Am autentificat contractul de vânzare-cumpărare fără nicio problemă. Echipa este foarte atentă la detalii.",
    rating: 5,
    date: "2024-10",
  },
  {
    name: "Elena S.",
    text: "Am făcut divorțul la notar în câteva zile, fără stresul instanței. Procedura a fost discretă și rapidă.",
    rating: 5,
    date: "2024-09",
  },
  {
    name: "Cristian M.",
    text: "Traduceri legalizate gata în aceeași zi. Prețuri corecte și personal amabil. Merg de fiecare dată aici.",
    rating: 5,
    date: "2024-08",
  },
  {
    name: "Gabriela T.",
    text: "Am avut nevoie de procură pentru vânzarea unui apartament din străinătate. Totul a fost rezolvat rapid și corect.",
    rating: 4,
    date: "2024-07",
  },
  {
    name: "Ion R.",
    text: "Recomand acest birou notarial. Sunt punctuali, profesioniști și au rezolvat actele pentru societatea mea fără întârzieri.",
    rating: 5,
    date: "2024-06",
  },
];
