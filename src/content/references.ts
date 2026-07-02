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
    slug: "tomannsbolig-privatperson",
    title: "Tomannsbolig for privatperson",
    cover: "/Referanser/tomannsbolig-privatperson.webp",
    category: "Privatbolig",
    role: "Rådgiver og kontroll",
    location: "Sunnmøre",
    summary:
      "Faglig bistand med kontrakt, leveransebeskrivelse, overtakelse og ettårskontroll for en privat byggherre.",
    testimonial: true,
    body: [
      "Vi søkte assistanse av Byggeledelse Norge fordi vi ville ha noen med faglig kompetanse på vår side som kunne sjekke at vår leverandør faktisk leverte det vi har krav på. Byggeledelse Norge hjalp oss med kontrakt, leveransebeskrivelse, overtakelse og ettårskontroll.",
      "De påpekte noen punkter som ikke var riktig utført og fikk dem rettet før vi flyttet inn. De bidro til at prosessen ble mye enklere og tryggere for oss. Vi anbefaler at man tar en samtale med fagfolk før man skal bygge bolig selv eller kjøper seg inn i et prosjekt.",
    ],
  },
  {
    slug: "mindre-leilighetsbygg-privatperson",
    title: "Mindre leilighetsbygg for privatperson",
    cover: "/Referanser/mindre-leilighetsbygg.webp",
    category: "Privatbolig",
    role: "Total byggeledelse",
    location: "Sunnmøre",
    summary:
      "Total byggeledelse fra tegnebrettet til ferdigstillelse av en bolig med tre leiligheter.",
    testimonial: true,
    body: [
      "Jeg engasjerte Byggeledelse Norge for total byggeledelse på et prosjekt der jeg skulle bygge en bolig med tre leiligheter. De bidro fra tegnebrettet til ferdigstillelse, og det sparte meg for mye hodebry. De brukte sitt nettverk til å innhente gode priser fra leverandører som leverte arbeid jeg ble svært fornøyd med.",
      "Det var veldig nyttig at jeg hadde noen med kompetanse i faget som tok vare på mine interesser i forhandlinger og dialog med leverandører. Ved at de regelmessig besøkte prosjektet kunne de veilede underleverandører slik at arbeidet ble utført som vi ønsket det, og feil ble ryddet opp i med en gang. Du burde ta en prat med en byggeleder før du går i gang med et eget prosjekt.",
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
