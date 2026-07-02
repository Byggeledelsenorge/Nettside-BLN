// Sentralt innholdsregister for Byggeledelse Norge AS.
// All synlig tekst er samlet her slik at den kan gjenbrukes og vedlikeholdes ett sted.

export const CTA_LABEL = "Trenger du byggfaglig bistand?";

export const site = {
  name: "Byggeledelse Norge",
  legalName: "Byggeledelse Norge AS",
  url: "https://www.byggeledelsenorge.no",

  // --- Generell kontakt ---
  phone: "70 15 31 00",
  phoneHref: "tel:+4770153100",
  email: "post@byggeledelsenorge.no",
  orgNumber: "987 487 798",
  serviceArea: "Ålesund og Sunnmøre",
  address: {
    street: "Langelandsvegen 35",
    postalCode: "6010",
    city: "Ålesund",
    country: "Norge",
    note: "Vi holder til i 4. etasje mot sør på nye Moa.",
  },

  // --- Daglig leder / kontaktperson ---
  contactPerson: {
    name: "Tommy Howden",
    role: "Daglig leder",
    email: "tommy@byggeledelsenorge.no",
    phone: "91 37 83 84",
    phoneHref: "tel:+4791378384",
    photo: "/Grafikk/tommy-howden-1920w.webp",
  },

  // --- Godkjenninger og sertifiseringer ---
  certifications: [
    {
      label: "Sentralt godkjent",
      image: "/Grafikk/sentralt-godkjent-1920w.webp",
      alt: "Sentralt godkjent foretak",
    },
    {
      label: "Uavhengig kontroll",
      image: "/Grafikk/uavhengig-kontroll.webp",
      alt: "Godkjent for uavhengig kontroll",
    },
  ],
  approvalText:
    "Byggeledelse Norge AS er sentralt godkjent med ansvarsrett etter plan- og bygningsloven, tiltaksklasse 1 for våtrom og lufttetthet.",

  // --- Navigasjon (privatfokusert rekkefølge) ---
  nav: [
    { label: "Tjenester", href: "/private" },
    { label: "Bedrift", href: "/bedrift" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/kontakt" },
  ],
} as const;

export const hero = {
  kicker: "Uavhengig byggfaglig rådgiver i Ålesund",
  // Problemorientert, privat-fokusert hovedoverskrift
  title: "Når noe er galt med boligen, trenger du noen på din side.",
  subtitle:
    "Byggeledelse Norge er den uavhengige byggfaglige rådgiveren du ringer ved reklamasjon, byggfeil, konflikt med håndverker og overtakelse. Vi står på boligeierens side i Ålesund og på Sunnmøre – helt uavhengig av entreprenør og utbygger.",
  // Trust-elementer basert på reelle godkjenninger
  trust: [
    { label: "Helt uavhengig", detail: "Ingen binding til entreprenør eller utbygger" },
    { label: "Sentralt godkjent", detail: "Ansvarsrett etter plan- og bygningsloven" },
    { label: "Uavhengig kontroll", detail: "Tiltaksklasse 1 – våtrom og lufttetthet" },
    { label: "Lokalt forankret", detail: "Ålesund og Sunnmøre" },
  ],
};

// "Har du et problem med boligen?" - empatisk problemspeiling (privat)
export const problemMirror = {
  kicker: "Har du et problem med boligen?",
  title: "Du kjenner deg kanskje igjen i én av disse.",
  intro:
    "De fleste som kontakter oss står midt i noe vanskelig. Du trenger ikke ha oversikt over fag og regler – det er vår jobb. Her er situasjonene vi hjelper boligeiere med hver uke.",
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

// Kompakt, nedtonet bedrift-henvisning på forsiden (privat er hovedfokus).
export const businessStrip = {
  kicker: "Er du bedrift eller byggherre?",
  title: "Vi tar også byggeledelse, prosjektledelse og byggherrebistand.",
  body: "Uavhengig fagkompetanse for virksomheter og byggherrer – og en byggfaglig sakkyndig part for advokater i boligtvister.",
  linkLabel: "Se tjenester for bedrift",
  href: "/bedrift",
};

// Målgruppe: advokater (sekundært, på bedrift-siden).
export const lawyerSection = {
  kicker: "For advokater",
  title: "Din byggfaglige sakkyndige i boligtvister.",
  intro:
    "Advokater havner ofte i bolig- og entreprisekonflikter uten byggfaglig kompetanse i eget hus. Da er vi den uavhengige fagpersonen som kartlegger, vurderer og dokumenterer det byggtekniske – slik at du kan bygge saken på et faglig solid grunnlag.",
  items: [
    {
      title: "Sakkyndig vurdering",
      body: "Nøktern, uavhengig byggfaglig vurdering av mangler, årsak og omfang opp mot kontrakt, forskrift og god håndverksskikk.",
    },
    {
      title: "Dokumentasjon som holder i tvist",
      body: "Etterprøvbar dokumentasjon og rapporter som står seg i forliksråd, nemnd og rettssak.",
    },
    {
      title: "Byggfaglig støtte gjennom saken",
      body: "Vi er sparringspartner for advokaten på det tekniske, og kan bistå frem mot og under en eventuell rettslig prosess.",
    },
  ],
};

// SEO-register: prioriterte sokeord (lokal profil) og forslag til landingssider.
export const seoKeywords = [
  "byggfaglig rådgiver Ålesund",
  "uavhengig byggfaglig rådgiver",
  "reklamasjon håndverker Sunnmøre",
  "byggfeil hjelp Ålesund",
  "uavhengig kontroll bolig",
  "overtakelse ny bolig",
  "byggeledelse Ålesund",
  "byggherrebistand",
  "sakkyndig boligtvist",
];
