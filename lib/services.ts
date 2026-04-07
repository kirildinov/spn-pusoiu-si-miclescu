import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Users,
  Heart,
  ScrollText,
  FileCheck,
  Gift,
  Shield,
  Copy,
  Building2,
  Languages,
} from "lucide-react";

export interface SubService {
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  subServices: SubService[];
  acteNecesare: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  schemaServiceType: string;
}

export const services: Service[] = [
  {
    slug: "contracte-vanzare-cumparare",
    name: "Contracte Vânzare-Cumpărare",
    icon: FileText,
    shortDescription:
      "Autentificăm contracte de vânzare-cumpărare pentru apartamente, case, terenuri și spații comerciale.",
    fullDescription:
      "Autentificăm contracte de vânzare-cumpărare pentru toate tipurile de imobile: apartamente, case, terenuri, spații comerciale și garaje. Verificăm situația juridică a proprietății, întocmim actul și asigurăm înscrierea în Cartea Funciară. Procedura se finalizează în aceeași zi.",
    subServices: [
      {
        name: "Vânzare-cumpărare apartament",
        description: "Autentificarea contractului de vânzare pentru locuințe.",
      },
      {
        name: "Vânzare-cumpărare teren",
        description:
          "Contracte pentru terenuri intravilane și extravilane.",
      },
      {
        name: "Antecontract de vânzare",
        description:
          "Promisiune bilaterală de vânzare-cumpărare cu clauze de arvună.",
      },
      {
        name: "Vânzare spații comerciale",
        description: "Autentificarea tranzacțiilor cu imobile comerciale.",
      },
    ],
    acteNecesare: [
      "Actele de identitate ale părților (CI/pașaport)",
      "Actul de proprietate (contract anterior, certificat de moștenitor, hotărâre judecătorească)",
      "Extras de Carte Funciară pentru autentificare (se obține de notar)",
      "Certificat fiscal de la Direcția de Taxe și Impozite Locale",
      "Certificat energetic al imobilului",
      "Adeverință de la asociația de proprietari (pentru apartamente)",
      "Certificat de urbanism (pentru terenuri, dacă este cazul)",
    ],
    faqs: [
      {
        question:
          "Cât durează autentificarea unui contract de vânzare-cumpărare?",
        answer:
          "Procedura aferentă încheierii contractului de vânzare a unui bun imobil presupune trei etape esențiale: primirea actelor de proprietate din partea părților, verificarea și analiza acestora, urmată de stabilirea, de comun acord, a datei pentru semnarea contractului de vânzare. Pentru confortul părților, documentele pot fi depuse atât fizic, la birou, cât și transmise online, prin mijloace moderne de comunicare, precum e-mail, WhatsApp sau alte canale electronice, în vederea analizei prealabile.",
      },
      {
        question: "Cine plătește taxele notariale la vânzare?",
        answer:
          "Prin convenție, onorariul notarial este suportat de cumpărător, însă părțile pot conveni altfel. Impozitul pe venit din transferul proprietății este plătit de vânzător.",
      },
      {
        question: "Pot vinde un imobil fără certificat energetic?",
        answer:
          "Nu. Certificatul de performanță energetică este obligatoriu pentru orice tranzacție imobiliară, conform Legii nr. 372/2005.",
      },
    ],
    metaTitle: "Contracte Vânzare-Cumpărare Notar București Sector 3",
    metaDescription:
      "Redactare și autentificare contracte vânzare-cumpărare imobiliare la notar în Sector 3 București. Acte necesare, tarife, programare rapidă.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "succesiuni",
    name: "Succesiuni",
    icon: Users,
    shortDescription:
      "Dezbaterea succesiunii și eliberarea certificatului de moștenitor, inclusiv succesiuni cu testament.",
    fullDescription:
      "Instrumentăm procedura succesorală completă: de la deschiderea dosarului de succesiune până la eliberarea certificatului de moștenitor. Acoperim succesiuni legale și testamentare, inclusiv cazuri cu mai mulți moștenitori sau bunuri în mai multe județe.",
    subServices: [
      {
        name: "Succesiune legală",
        description:
          "Dezbaterea moștenirii conform gradelor de rudenie prevăzute de lege.",
      },
      {
        name: "Succesiune testamentară",
        description: "Procedura succesorală bazată pe testament autentic.",
      },
      {
        name: "Testament autentic",
        description:
          "Întocmirea și autentificarea testamentului la notar.",
      },
      {
        name: "Certificat de moștenitor",
        description:
          "Eliberarea actului care atestă calitatea de moștenitor și masa succesorală.",
      },
    ],
    acteNecesare: [
      "Certificat de deces al defunctului",
      "Certificat de naștere și căsătorie al defunctului",
      "Actele de identitate ale moștenitorilor",
      "Certificate de naștere/căsătorie ale moștenitorilor (dovada rudeniei)",
      "Actele de proprietate ale bunurilor din masa succesorală",
      "Extras de Carte Funciară (pentru imobile)",
      "Certificat fiscal pentru imobile",
      "Testament (dacă există)",
    ],
    faqs: [
      {
        question: "Cât durează procedura succesorală la notar?",
        answer:
          "Procedura durează în medie 2-4 săptămâni, în funcție de complexitatea dosarului și numărul de moștenitori. Cazurile simple pot fi finalizate mai rapid.",
      },
      {
        question:
          "Este obligatoriu ca toți moștenitorii să fie prezenți?",
        answer:
          "Da, toți moștenitorii trebuie să fie prezenți sau reprezentați prin procură specială autentică. Moștenitorii care renunță la succesiune trebuie să dea declarație în acest sens.",
      },
      {
        question: "Ce se întâmplă dacă un moștenitor este în străinătate?",
        answer:
          "Moștenitorul din străinătate poate da procură specială la consulatul sau ambasada României, sau la un notar local cu apostilă.",
      },
    ],
    metaTitle: "Succesiuni Notariale București Sector 3 | SPN Miclescu",
    metaDescription:
      "Procedura succesorală notarială în Sector 3 București. Acte necesare, termene, certificat moștenitor. Programare la ☎ 0731 467 071.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "divort-la-notar",
    name: "Divorț la Notar",
    icon: Heart,
    shortDescription:
      "Divorț prin acord la notar — procedură rapidă, fără instanță, finalizare în 30 de zile.",
    fullDescription:
      "Procedura de divorț la notar este disponibilă soților care sunt de acord cu desfacerea căsătoriei și au convenit asupra tuturor aspectelor: partaj, nume după divorț, custodie (dacă nu au copii minori sau dacă stabilirea custodiei s-a realizat prin acord la notar). Termenul de reflecție este de 30 de zile.",
    subServices: [
      {
        name: "Divorț fără copii minori",
        description:
          "Cea mai simplă procedură — acord asupra numelui și eventual partajului.",
      },
      {
        name: "Divorț cu copii minori",
        description:
          "Posibil la notar dacă soții convin asupra custodiei, domiciliului copilului, pensiei alimentare și programului de vizitare.",
      },
      {
        name: "Partaj bunuri comune",
        description:
          "Împărțirea bunurilor dobândite în timpul căsătoriei, concomitent cu divorțul.",
      },
    ],
    acteNecesare: [
      "Actele de identitate ale ambilor soți",
      "Certificatul de căsătorie în original",
      "Certificate de naștere ale soților",
      "Certificate de naștere ale copiilor minori (dacă este cazul)",
      "Convenția soților privind numele, custodia, pensia alimentară (se întocmește la notar)",
    ],
    faqs: [
      {
        question: "Cât durează divorțul la notar?",
        answer:
          "Procedura presupune două prezentări la notar: depunerea cererii și revenirea după termenul de reflecție de 30 de zile calendaristice. Certificatul de divorț se eliberează la a doua prezentare.",
      },
      {
        question: "Putem divorța la notar dacă avem copii?",
        answer:
          "Da, cu condiția ca soții să convină asupra tuturor aspectelor privind copiii: custodie, domiciliu, pensie alimentară, program de vizitare.",
      },
      {
        question: "Cât costă divorțul la notar?",
        answer:
          "Onorariul notarial pentru divorț este reglementat prin Ordinul ministrului justiției. Contactați-ne pentru tariful exact aplicabil situației dumneavoastră.",
      },
    ],
    metaTitle: "Divorț la Notar București Sector 3 | Procedură Rapidă",
    metaDescription:
      "Procedura de divorț la notar în București Sector 3. Rapid, fără instanță. Acte necesare, condiții, tarife. Contactați-ne: 0731 467 071.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "procuri-notariale",
    name: "Procuri Notariale",
    icon: ScrollText,
    shortDescription:
      "Procuri administrarea bunurilor imobile, speciale, pentru auto, pașaport copil și reprezentare în instanță.",
    fullDescription:
      "Autentificăm toate tipurile de procuri notariale: procuri de administrare, procuri speciale pentru vânzarea de imobile sau vehicule, procuri pentru obținerea pașaportului copilului minor, procuri pentru reprezentare în fața autorităților și instanțelor.",
    subServices: [
      {
        name: "Procură administrarea bunurilor imobile",
        description:
          "Împuternicire pentru administrarea bunurilor imobile ale mandantului.",
      },
      {
        name: "Procură specială vânzare imobil",
        description:
          "Procură cu puteri specifice pentru vânzarea unui imobil determinat.",
      },
      {
        name: "Procură auto",
        description:
          "Împuternicire pentru vânzarea, înmatricularea sau radierea vehiculelor.",
      },
      {
        name: "Procură pașaport copil",
        description:
          "Acordul parental pentru eliberarea pașaportului copilului minor.",
      },
      {
        name: "Procură pentru reprezentare",
        description:
          "Împuternicire pentru reprezentare la instituții publice sau private.",
      },
    ],
    acteNecesare: [
      "Actul de identitate al mandantului (cel care dă procura)",
      "Datele de identificare ale mandatarului (cel împuternicit)",
      "Actele bunului vizat (act proprietate, carte de identitate vehicul etc.)",
      "Certificate de naștere copil (pentru procuri pașaport)",
    ],
    faqs: [
      {
        question: "Trebuie să fie prezent și mandatarul la notar?",
        answer:
          "Nu. La autentificarea procurii trebuie să fie prezent doar mandantul (cel care dă procura). Mandatarul nu trebuie să fie prezent.",
      },
      {
        question: "Pot revoca o procură?",
        answer:
          "Da, mandantul poate revoca procura oricând printr-o declarație autentică la notar. Revocarea produce efecte din momentul comunicării către mandatar.",
      },
      {
        question: "Cât este valabilă o procură?",
        answer:
          "Procura este valabilă pe perioada menționată în act. Dacă nu se specifică termen, rămâne valabilă până la revocare sau îndeplinirea scopului.",
      },
    ],
    metaTitle: "Procuri Notariale București Sector 3 | SPN Miclescu",
    metaDescription:
      "Procuri notariale generale, speciale și auto la notar în Sector 3 București. Autentificare pe loc, acte necesare, tarife. ☎ 0731 467 071.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "declaratii-notariale",
    name: "Declarații Notariale",
    icon: FileCheck,
    shortDescription:
      "Declarații pe propria răspundere, declarații de notorietate, certificări de fapte.",
    fullDescription:
      "Autentificăm declarații pe propria răspundere pentru diverse scopuri: fiscale, administrative, succesorale, pentru obținerea cetățeniei sau în relația cu autoritățile. De asemenea, certificăm fapte prin constatare directă.",
    subServices: [
      {
        name: "Declarație pe propria răspundere",
        description:
          "Declarații autentice pentru diverse scopuri legale și administrative.",
      },
      {
        name: "Declarație de notorietate",
        description:
          "Declarație prin care se atestă fapte de notorietate publică, cu martori.",
      },
      {
        name: "Certificare de fapte",
        description:
          "Certificarea notarială a unor fapte constatate direct de notar.",
      },
      {
        name: "Declarație fiscală",
        description:
          "Declarații necesare în relația cu ANAF sau administrația fiscală locală.",
      },
    ],
    acteNecesare: [
      "Actul de identitate al declarantului",
      "Documentele justificative relevante pentru obiectul declarației",
      "Martori (pentru declarația de notorietate — 2 martori cu acte de identitate)",
    ],
    faqs: [
      {
        question: "Ce este o declarație de notorietate?",
        answer:
          "Este o declarație prin care 2-3 martori atestă fapte de cunoștință publică (de exemplu, că o persoană decedată nu a mai avut alte proprietăți). Se folosește frecvent în procedurile succesorale.",
      },
      {
        question:
          "Cât costă autentificarea unei declarații pe propria răspundere?",
        answer:
          "Onorariul este stabilit prin ordin al ministrului justiției. Contactați-ne pentru tariful exact.",
      },
    ],
    metaTitle: "Declarații Notariale București Sector 3 | SPN Miclescu",
    metaDescription:
      "Declarații pe propria răspundere, declarații de notorietate și certificări de fapte la notar în Sector 3 București. Eliberare pe loc. ☎ 0731 467 071.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "donatii",
    name: "Donații, Schimburi și Partaje",
    icon: Gift,
    shortDescription:
      "Contracte de donație, schimb de imobile și partaj voluntar între coproprietari.",
    fullDescription:
      "Autentificăm contracte de donație pentru imobile și bunuri mobile, contracte de schimb de proprietăți și acte de partaj voluntar între coproprietari. Toate actele sunt însoțite de verificarea situației juridice și înscrierea în Cartea Funciară.",
    subServices: [
      {
        name: "Contract de donație",
        description:
          "Transmiterea gratuită a dreptului de proprietate asupra unui bun.",
      },
      {
        name: "Contract de schimb",
        description: "Schimbul reciproc de proprietăți imobiliare.",
      },
      {
        name: "Partaj voluntar",
        description:
          "Împărțirea bunurilor comune între coproprietari prin acord.",
      },
    ],
    acteNecesare: [
      "Actele de identitate ale părților",
      "Actul de proprietate al bunului donat/schimbat",
      "Extras de Carte Funciară pentru autentificare",
      "Certificat fiscal de la Taxe și Impozite Locale",
      "Certificat energetic (pentru imobile)",
    ],
    faqs: [
      {
        question: "Se plătesc taxe la donația între rude?",
        answer:
          "Donația între soți sau rude în linie dreaptă (părinți-copii) beneficiază de impozit redus sau scutire, conform Codului Fiscal. Onorariul notarial rămâne aplicabil.",
      },
      {
        question: "Se poate revoca o donație?",
        answer:
          "Donația este în principiu irevocabilă. Revocarea este posibilă doar în cazuri strict prevăzute de lege: ingratitudine sau neexecutarea sarcinilor.",
      },
    ],
    metaTitle: "Donații Notariale București Sector 3 | SPN Miclescu",
    metaDescription:
      "Contract de donație la notar public în Sector 3 București. Donații imobiliare, mobiliare, acte necesare, taxe. ☎ 0731 467 071.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "contracte-garantii",
    name: "Contracte și Garanții",
    icon: Shield,
    shortDescription:
      "Ipotecă, împrumut, gaj, dare în plată, întreținere, închiriere, comodat.",
    fullDescription:
      "Autentificăm o gamă largă de contracte: ipotecă, împrumut cu garanție, gaj, dare în plată, contract de întreținere, contract de închiriere autentificat și contract de comodat. Fiecare act este întocmit cu respectarea tuturor cerințelor legale.",
    subServices: [
      {
        name: "Contract de ipotecă",
        description: "Constituirea unei garanții imobiliare.",
      },
      {
        name: "Contract de împrumut",
        description:
          "Formalizarea unui împrumut cu sau fără garanție.",
      },
      {
        name: "Contract de gaj",
        description: "Garanție asupra bunurilor mobile.",
      },
      {
        name: "Dare în plată",
        description:
          "Stingerea unei obligații prin transmiterea unui bun.",
      },
      {
        name: "Contract de întreținere",
        description:
          "Obligația de întreținere în schimbul transmiterii unui bun.",
      },
      {
        name: "Contract de închiriere",
        description:
          "Închiriere autentificată, cu titlu executoriu.",
      },
      {
        name: "Contract de comodat",
        description: "Împrumut de folosință gratuită a unui bun.",
      },
    ],
    acteNecesare: [
      "Actele de identitate ale părților",
      "Actul de proprietate al bunului (pentru ipotecă, dare în plată)",
      "Extras de Carte Funciară",
      "Certificat fiscal",
      "Documentele creanței (pentru ipotecă, gaj)",
    ],
    faqs: [
      {
        question:
          "Care este avantajul unui contract de închiriere autentificat?",
        answer:
          "Contractul de închiriere autentificat la notar constituie titlu executoriu. În caz de neplată, proprietarul poate solicita executarea silită fără a mai fi necesară o hotărâre judecătorească.",
      },
      {
        question: "Ce este darea în plată?",
        answer:
          "Darea în plată este operațiunea juridică prin care debitorul stinge o datorie prin transmiterea unui alt bun decât cel datorat, cu acordul creditorului.",
      },
    ],
    metaTitle: "Contracte Garanții Notar București Sector 3 | SPN Miclescu",
    metaDescription:
      "Ipotecă, împrumut, gaj, dare în plată, întreținere, închiriere. Autentificare la notar public Sector 3, București.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "legalizari-copii",
    name: "Legalizări și Certificate",
    icon: Copy,
    shortDescription:
      "Copii legalizate, legalizare de semnătură, specimene de semnătură, duplicate.",
    fullDescription:
      "Oferim servicii de legalizare a copiilor de pe acte, legalizare de semnătură, dare de dată certă, eliberare de duplicate ale actelor notariale și certificare de specimene de semnătură.",
    subServices: [
      {
        name: "Copii legalizate",
        description:
          "Legalizarea copiilor conforme cu originalul.",
      },
      {
        name: "Legalizare de semnătură",
        description:
          "Certificarea autenticității semnăturii pe un înscris.",
      },
      {
        name: "Specimen de semnătură",
        description:
          "Certificarea modelului de semnătură pentru uz bancar sau instituțional.",
      },
      {
        name: "Dare de dată certă",
        description:
          "Atestarea datei unui înscris sub semnătură privată.",
      },
      {
        name: "Duplicate",
        description:
          "Eliberarea de duplicate ale actelor notariale din arhivă.",
      },
    ],
    acteNecesare: [
      "Actul de identitate al solicitantului",
      "Actul original (pentru copii legalizate)",
      "Înscrisul de semnat (pentru legalizare de semnătură)",
    ],
    faqs: [
      {
        question: "Ce diferență este între copie legalizată și copie conformă?",
        answer:
          "Copia legalizată de notar are forță probantă egală cu originalul și este acceptată de toate instituțiile. Copia conformă este o simplă fotocopie.",
      },
      {
        question: "Pot obține un duplicat al unui act notarial pierdut?",
        answer:
          "Da, duplicatul se eliberează de notarul care a întocmit actul original, din arhiva biroului notarial.",
      },
    ],
    metaTitle: "Legalizări Copii Acte Notar București | SPN Miclescu",
    metaDescription:
      "Copii legalizate, legalizare semnătură, specimene, duplicate acte notariale. Notar public Sector 3, Calea Călărașilor 311.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "acte-societati",
    name: "Acte pentru Societăți",
    icon: Building2,
    shortDescription:
      "Acte constitutive, dezmembrări, alipiri, procese-verbale AGA și cesiuni de părți sociale.",
    fullDescription:
      "Oferim servicii notariale complete pentru persoane juridice: autentificarea actelor constitutive, modificărilor de acte constitutive, proceselor-verbale AGA, cesiunilor de părți sociale, actelor de dezmembrare și alipire a imobilelor.",
    subServices: [
      {
        name: "Acte constitutive",
        description:
          "Autentificarea actelor de constituire a societăților.",
      },
      {
        name: "Cesiuni de părți sociale",
        description:
          "Transferul dreptului de proprietate asupra părților sociale.",
      },
      {
        name: "Procese-verbale AGA",
        description:
          "Autentificarea hotărârilor adunărilor generale ale asociaților.",
      },
      {
        name: "Dezmembrări și alipiri",
        description:
          "Acte de dezmembrare sau alipire a parcelelor cadastrale.",
      },
    ],
    acteNecesare: [
      "Actele de identitate ale asociaților/administratorilor",
      "Certificat de înregistrare (CUI) al societății",
      "Actul constitutiv actualizat",
      "Hotărârea AGA (pentru modificări)",
      "Documentație cadastrală (pentru dezmembrări/alipiri)",
    ],
    faqs: [
      {
        question: "Este obligatorie autentificarea actelor constitutive?",
        answer:
          "Autentificarea nu este obligatorie pentru toate tipurile de societăți, dar oferă siguranță juridică sporită și este necesară în cazul aporturilor în natură (imobile).",
      },
      {
        question: "Cât durează o dezmembrare la notar?",
        answer:
          "Autentificarea actului de dezmembrare se realizează în aceeași zi. Documentația cadastrală trebuie pregătită anterior de un inginer cadastrist autorizat.",
      },
    ],
    metaTitle: "Acte Societăți Notar București Sector 3 | SPN Miclescu",
    metaDescription:
      "Acte constitutive, cesiuni părți sociale, AGA, dezmembrări, alipiri. Servicii notariale pentru firme, Sector 3, București.",
    schemaServiceType: "NotarialService",
  },
  {
    slug: "traduceri-legalizate",
    name: "Traduceri și Apostilare",
    icon: Languages,
    shortDescription:
      "Traduceri legalizate, apostilă Haga, supralegalizare. Peste 30 de limbi disponibile.",
    fullDescription:
      "Oferim servicii de legalizare a traducerilor efectuate de traducători autorizați de Ministerul Justiției, în peste 30 de limbi. De asemenea, oferim informații și asistență pentru procedura de apostilare și supralegalizare a actelor.",
    subServices: [
      {
        name: "Legalizare traducere",
        description:
          "Legalizarea traducerii efectuate de un traducător autorizat.",
      },
      {
        name: "Traduceri autorizate",
        description:
          "Traduceri autorizate în peste 30 de limbi, coordonate direct cu biroul nostru.",
      },
      {
        name: "Apostilă Haga",
        description:
          "Informații și asistență pentru obținerea apostilei pe actele oficiale.",
      },
      {
        name: "Supralegalizare",
        description:
          "Procedura de supralegalizare pentru actele destinate statelor non-Haga.",
      },
    ],
    acteNecesare: [
      "Actul de identitate al solicitantului",
      "Actul original de tradus",
      "Traducerea efectuată de traducătorul autorizat (sau se comandă prin noi)",
    ],
    faqs: [
      {
        question: "Cât durează o traducere legalizată?",
        answer:
          "Legalizarea traducerii se face în aceeași zi. Traducerea propriu-zisă durează 1-3 zile lucrătoare în funcție de volum și limba.",
      },
      {
        question: "Ce este apostila Haga?",
        answer:
          "Apostila este o certificare internațională care atestă autenticitatea unui act oficial. Se aplică actelor destinate statelor membre ale Convenției de la Haga.",
      },
      {
        question: "Pot obține traducerea și legalizarea în același loc?",
        answer:
          "Da. Puteți trimite actele prin email, iar noi coordonăm traducerea și legalizarea. Întregul proces poate fi gestionat de la distanță.",
      },
    ],
    metaTitle: "Traduceri Legalizate Notar București | SPN Miclescu",
    metaDescription:
      "Traduceri legalizate și apostilate la notar public în Sector 3 București. Limbi disponibile, tarife, termen de execuție.",
    schemaServiceType: "NotarialService",
  },
];
