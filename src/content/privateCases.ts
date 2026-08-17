// Eksempler på hvordan vi har bistått private boligeiere.
// Brukes av /slik-har-vi-bistatt-andre.

export type PrivateCase = {
  slug: string;
  title: string;
  /** Type sak, f.eks. "Ny bolig" */
  category: string;
  location: string;
  body: string;
  /** Resultatet / hvordan saken ble løst */
  outcome: string;
};

export const privateCases: PrivateCase[] = [
  {
    slug: "reklamasjon-mot-utbygger",
    title: "Reklamasjon mot utbygger",
    category: "Ny bolig",
    location: "Ålesund",
    body: "Takstmann innleid av selger ved salg av relativt ny bolig oppdaget planhetsavvik på gulv. Boligen var 3 år gammel og selger hadde kjøpt ny bolig av samme utbygger. Vi koblet på byggfaglig rådgiver som dokumenterte alvorlige avvik opp mot teknisk forskrift. Vi ønsker alltid å løse sakene på lavest mulig nivå, så vi gikk i dialog med utbygger uten å koble på advokat.",
    outcome:
      "Saken ble løst ved at utbygger kjøpte tilbake den første boligen til prisantydning på salgstidspunktet.",
  },
  {
    slug: "reklamasjon-mot-megler",
    title: "Reklamasjon mot megler",
    category: "Eksisterende bolig",
    location: "Ålesund",
    body: "Vi ble kontaktet av en kunde som skulle selge leiligheten sin og oppdaget at denne var godkjent som næring og ikke bolig. Kunde hadde startet en prosess med reklamasjon mot megler som solgte leiligheten for nesten 8 år siden, men kom ikke videre. Vi koblet på byggfaglig rådgiver for å dokumentere avvik, samt takstmann for å lage en kalkyle på utbedringskostnader. Videre koblet vi på advokat for å ta prosessen juridisk mot meglers forsikringsselskap.",
    outcome:
      "Saken ble løst ved «dekningssalg». Kunden fikk dekket kostnader i prosessen, samt at forsikringen til megler dekket differansen mellom salgssum og verdi.",
  },
  {
    slug: "overtakelse-av-ny-bolig",
    title: "Overtakelse av ny bolig",
    category: "Overtakelse",
    location: "Ålesund",
    body: "Vi ble kontaktet av kunde for å bistå ved overtakelse av ny bolig. Ved gjennomgang av boligen fant vi at det var montert en avløpspumpe som ikke var beskrevet i noen av kontraktsdokumentene. Denne pumpen har driftskostnader og kostnader med utskiftning etter endt levetid. Vi koblet på byggfaglig rådgiver som gikk i dialog med utbygger.",
    outcome:
      "Saken ble løst ved at det ble montert en ekstra pumpe, slik at nedetid er minimalt, samt en kompensasjon for heftelsen denne pumpen medfører.",
  },
  {
    slug: "avvik-fra-godkjente-tegninger",
    title: "Avvik fra godkjente tegninger",
    category: "Eksisterende bolig",
    location: "Ålesund",
    body: "Kunde hadde oppdaget avvik fra godkjente tegninger på sin leilighet og tatt kontakt med boligkjøperforsikringen for å reklamere på dette. Kunde opplevde at saken ikke gikk fremover med advokaten hos boligkjøperforsikringen og ba om bistand fra oss. Vi koblet på takstmann, byggfaglig rådgiver og advokat. Avvik ble dokumentert ved at det ble utarbeidet brannkonsept og hulltaking ble utført for å kontrollere opp mot dette. Videre ble det utarbeidet en kostnadskalkyle på utbedringskostnad.",
    outcome:
      "Saken gikk en runde i tingretten og ble anket til lagmannsretten, før det endte i et godt forlik. Prosessen tok 3 år, men kunne vært kortere dersom ekstern advokat hadde blitt koblet inn tidligere.",
  },
  {
    slug: "rehabilitering-av-enebolig",
    title: "Rehabilitering av enebolig",
    category: "Rehabilitering",
    location: "Ålesund",
    body: "Vi ble kontaktet av en kunde for å gjennomgå kontrakter med snekker, samt se over fremdriftsplaner. Vi oppdaget fort at kontraktene kunden hadde skrevet under på hadde flere mangler, og at kunden hadde påtatt seg en stor risiko i prosjektet. Samtidig opplevde kunden at samarbeidet med utførende var utfordrende og grenset til fiendtlig. Vi hadde dialog med utførende for å prøve å balansere avtalene og i det minste sikre at kunden ikke betalte for mye. Etter å ha prøvd minnelige løsninger så vi oss nødt til å koble på juridisk bistand. Gjennom et godt samarbeid mellom oss, advokat og kunde klarte vi å bryte kontrakten og få utførende ut av prosjektet. Vi bistod deretter videre med tilbudsinnhenting fra andre firmaer og fikk ferdigstilt prosjektet.",
    outcome:
      "Konflikten kostet kunden unødige penger, men vi fikk begrenset tapet og fullført prosjektet. Saken viser viktigheten av kontraktsgjennomgang før man skriver under.",
  },
];

/** Tipstekst under sakslisten. */
export const privateCasesTip =
  "Husk at du har fritt advokatvalg hos de fleste boligkjøperforsikringer og at de fleste innboforsikringer har rettshjelpsdekning.";
