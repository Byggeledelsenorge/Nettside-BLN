// Referanseprosjekter for Byggeledelse Norge AS.
// Migrert fra den opprinnelige nettsiden. Brukes av /referanser.

export type Reference = {
  slug: string;
  title: string;
  cover: string;
  /** Kort etikett for prosjekttype, f.eks. "Boligprosjekt". */
  category: string;
  /** Vår rolle i prosjektet. */
  role: string;
  location: string;
  /** Kort oppsummering brukt som ingress. */
  summary: string;
  body: string[];
  /** Sant når teksten er en kundeuttalelse (rendres som sitat). */
  testimonial?: boolean;
};

export const references: Reference[] = [
  {
    slug: "ase-omsorgsbolig",
    title: "Åse omsorgsbolig",
    cover: "/Referanser/ase-omsorgsbolig.webp",
    category: "Kommunalt bygg",
    role: "Byggeleder",
    location: "Ålesund",
    summary:
      "Rehabilitering og utvidelse av omsorgsbolig med ny legevakt for Ålesund kommune.",
    body: [
      "Ålesund kommune skulle rehabilitere og utvide den gamle omsorgsboligen på Åse og valgte oss til å bidra med vår kompetanse som byggeleder på prosjektet. I tillegg til omsorgsbolig ble det også bygget ny legevakt i bygget.",
      "Både omsorgsboligen og legevakten fremstår i dag som nytt, moderne og mer brukervennlig for beboere og ansatte. Vi hadde en god dialog med Ålesund kommune og utførende entreprenører fra start til slutt.",
    ],
  },
  {
    slug: "ovre-volsdalsberga",
    title: "Øvre Volsdalsberga",
    cover: "/Referanser/ovre-volsdalsberga.webp",
    category: "Boligprosjekt",
    role: "Byggeleder",
    location: "Ålesund",
    summary: "74 leiligheter fordelt på fem bygg, med fantastisk beliggenhet nær sjøen.",
    body: [
      "Her var vi innleid som byggeleder av totalentreprenøren som skulle bygge 74 leiligheter fordelt på fem bygg. Prosjektet har en fantastisk beliggenhet i nærheten av Ålesund sentrum og sjøen.",
      "Vi hadde et godt samarbeid med Ullsmo gjennom hele prosessen, og var stolte av at de kunne overlevere et flott prosjekt til sine kjøpere.",
    ],
  },
  {
    slug: "storre-leilighetsbygg-alesund",
    title: "Større leilighetsbygg – Ålesund",
    cover: "/Referanser/storre-leilighetsbygg-alesund.webp",
    category: "Boligprosjekt",
    role: "Byggherreombud",
    location: "Ålesund",
    summary:
      "Byggherreombud for en eiendomsutvikler fra Oslo som trengte erfaring og nettverk fra regionen.",
    body: [
      "Her hadde vi rollen som byggherreombud for en eiendomsutvikler fra Oslo. De trengte noen med erfaring og nettverk fra regionen, og valget falt på oss.",
      "Prosjektet ble gjennomført på en god måte, og tiltakshaver engasjerte oss etter dette i samme rolle på et prosjekt i Stokkmarknes.",
    ],
  },
  {
    slug: "naeringsbygg-olsvika",
    title: "Næringsbygg – Olsvika",
    cover: "/Referanser/naeringsbygg-olsvika.webp",
    category: "Næringsbygg",
    role: "Byggherreombud",
    location: "Olsvika, Ålesund",
    summary:
      "Byggherreombud fra prosjekteringsfase til overtakelse for et næringsbygg med lager og butikker.",
    body: [
      "Vi hadde her rollen som byggherreombud for tiltakshaver i en totalentreprise. Bygget huser lager og butikker, og vi deltok fra prosjekteringsfasen til overtakelse.",
      "Prosjektet hadde en god gjennomføring, og vi ble tilbudt tilsvarende rolle på nabobygget som skulle oppføres etter at dette prosjektet var ferdigstilt. Dette er i tråd med våre mål om å skape langsiktige relasjoner basert på godt arbeid og samhandling.",
    ],
  },
];
