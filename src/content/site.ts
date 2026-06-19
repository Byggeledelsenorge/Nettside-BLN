// Sentralt innholdsregister for Byggeledelse Norge AS.
// All synlig tekst er samlet her slik at den kan gjenbrukes og vedlikeholdes ett sted.
//
// VIKTIG: Felter merket med [VERIFISER ...] inneholder faktaopplysninger som
// kunden ma fylle inn / bekrefte for publisering (ar, sertifiseringer,
// telefonnummer, e-post, organisasjonsnummer, antall prosjekter, adresse).

export const CTA_LABEL = "Trenger du byggfaglig bistand?";

export const site = {
  name: "Byggeledelse Norge",
  legalName: "Byggeledelse Norge AS",
  url: "https://www.byggeledelsenorge.no",

  // --- Kontaktopplysninger (MA VERIFISERES) ---
  phone: "[VERIFISER: telefonnummer]",
  phoneHref: "tel:+47", // [VERIFISER: fullt nummer, f.eks. +4712345678]
  email: "[VERIFISER: e-postadresse]",
  orgNumber: "[VERIFISER: organisasjonsnummer]",
  serviceArea: "Hele Norge", // [VERIFISER om geografisk avgrensning]
  address: {
    street: "[VERIFISER: gateadresse]",
    postalCode: "[VERIFISER]",
    city: "[VERIFISER: poststed]",
    country: "Norge",
  },

  // --- Navigasjon ---
  nav: [
    { label: "Private", href: "/private" },
    { label: "Bedrift", href: "/bedrift" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/kontakt" },
  ],
} as const;

export const hero = {
  kicker: "Uavhengig byggfaglig rådgiver",
  // Problemorientert, privat-fokusert hovedoverskrift
  title: "Når noe er galt med boligen, trenger du noen på din side.",
  subtitle:
    "Vi er den uavhengige fagpersonen du ringer ved byggfeil, mangler og konflikt med håndverker – og rådgiveren bedrifter bruker til byggeledelse og oppfølging av entrepriser.",
  // Trust-elementer. [VERIFISER] der det er faktaopplysninger.
  trust: [
    { label: "Helt uavhengig", detail: "Ingen binding til entreprenør eller utbygger" },
    { label: "Byggfaglig kompetanse", detail: "[VERIFISER: sertifiseringer / godkjenninger]" },
    { label: "[VERIFISER] års erfaring", detail: "Fra både privatsaker og større prosjekter" },
    { label: "Hele Norge", detail: "Vi bistår uavhengig av hvor du bor" },
  ],
};

// "Har du et problem med boligen?" - empatisk problemspeiling (privat)
export const problemMirror = {
  kicker: "Har du et problem med boligen?",
  title: "Du kjenner deg kanskje igjen i én av disse.",
  intro:
    "De fleste som kontakter oss står midt i noe vanskelig. Du trenger ikke ha oversikt over fag og regler – det er vår jobb. Her er situasjonene vi hjelper med hver uke.",
  items: [
    {
      title: "Konflikt med håndverkeren",
      body: "Dere er uenige om hva som er avtalt eller om jobben er god nok. Du trenger en fagperson som kan dokumentere hva som faktisk er feil.",
    },
    {
      title: "Mangler etter oppussing",
      body: "Resultatet ble ikke som lovet. Vi finner ut hva som er feil, hvor alvorlig det er, og hva du har krav på.",
    },
    {
      title: "Fukt eller byggskade",
      body: "Du ser tegn til fukt eller skade og vet ikke hvor ille det er. Vi vurderer omfang, årsak og hva som må gjøres.",
    },
    {
      title: "Overtakelse av ny bolig",
      body: "Du skal overta og er redd for å overse noe. Vi blir med og sikrer at mangler kommer inn i protokollen.",
    },
    {
      title: "Uenig om kvaliteten",
      body: "Du er usikker på om arbeidet holder mål. Vi gir en nøytral vurdering opp mot avtale og fagkrav.",
    },
    {
      title: "Uklare kontrakter",
      body: "Du er i ferd med å signere, men forstår ikke alt. Vi går gjennom kontrakten før du binder deg.",
    },
  ],
};

// Prosess - "Slik jobber vi"
export const process = {
  kicker: "Slik jobber vi",
  title: "Fra første henvendelse til dokumentasjon du kan bruke.",
  intro:
    "Du skal vite hva som skjer, hva det koster og hva du sitter igjen med. Derfor følger vi en tydelig prosess.",
  steps: [
    {
      number: "01",
      title: "Ta kontakt",
      body: "Du forteller kort om situasjonen. Vi gir en ærlig vurdering av om og hvordan vi kan hjelpe – uforpliktende.",
    },
    {
      number: "02",
      title: "Befaring og kartlegging",
      body: "Vi vurderer saken på stedet eller ut fra dokumentasjon, og setter oss inn i avtaler og forhistorie.",
    },
    {
      number: "03",
      title: "Faglig vurdering",
      body: "Vi vurderer arbeidet opp mot kontrakt, forskrift og god håndverksskikk, og finner ut hva som faktisk holder mål.",
    },
    {
      number: "04",
      title: "Rapport og veien videre",
      body: "Du får en skriftlig vurdering du kan bruke i dialog, reklamasjon eller videre prosess – og en klar anbefaling.",
    },
  ],
};

// Hvorfor velge oss
export const whyUs = {
  kicker: "Hvorfor velge oss",
  title: "Fagkompetanse uten andre agendaer enn din sak.",
  items: [
    {
      title: "Uavhengighet",
      body: "Vi selger ikke utbedring og har ingen binding til entreprenører. Vurderingen vår styres av faget – ikke av hva noen tjener på utfallet.",
    },
    {
      title: "Byggfaglig tyngde",
      body: "Vi kjenner regelverk, standarder og hva som faktisk er god utførelse. Det gjør vurderingene presise og vanskelige å avfeie.",
    },
    {
      title: "Praktisk problemløsning",
      body: "Vi snakker klart, forklarer hva som betyr noe, og gir deg konkrete råd om hva du bør gjøre videre.",
    },
    {
      title: "Dokumentasjon som holder",
      body: "Du får etterprøvbar dokumentasjon som står seg i dialog med motpart, overfor forsikring og i en eventuell tvist.",
    },
  ],
};

// Avsluttende CTA-seksjon
export const finalCta = {
  kicker: "Vi er på din side",
  title: "Trenger du byggfaglig bistand?",
  body: "Fortell oss kort om situasjonen, så gir vi deg en ærlig vurdering av hvordan vi kan hjelpe. Det koster ingenting å ta den første samtalen.",
  primaryLabel: "Ta kontakt nå",
  secondaryLabel: "Ring oss",
};

// Korte seksjonstekster brukt pa flere sider
export const privateSection = {
  kicker: "For private boligeiere",
  title: "Tjenester for deg med et problem på boligen",
  intro:
    "Vi hjelper boligeiere som står i konflikt, oppdager feil eller bare trenger en fagperson de kan stole på. Velg det som ligner din situasjon.",
};

export const businessSection = {
  kicker: "For bedrifter og byggherrer",
  title: "Byggeledelse og prosjektoppfølging",
  intro:
    "Vi bistår byggherrer og virksomheter med faglig styring og oppfølging gjennom hele prosjektet.",
};

// SEO-register: prioriterte sokeord og forslag til landingssider.
// Brukes som referanse og i metadata-keywords.
export const seoKeywords = [
  "byggfaglig bistand",
  "reklamasjon håndverker",
  "uavhengig kontroll bolig",
  "byggfeil hjelp",
  "overtakelse ny bolig",
  "byggeledelse",
  "byggherrebistand",
  "byggfaglig rådgiver",
];
