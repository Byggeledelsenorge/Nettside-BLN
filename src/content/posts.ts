// Fagbase / kunnskapsartikler for Byggeledelse Norge AS.
// Brukes av /fagbase og /fagbase/[slug]. Innholdet er hentet fra den tidligere
// artikkelversjonen og tilpasset dagens fagbase-format.

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverCredit?: string;
  /** ISO-dato for sortering og <time> */
  date: string;
  /** Visningsdato */
  dateLabel: string;
  author: string;
  category: string;
  body: PostBlock[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "overtakelse-av-ny-bolig-sjekkliste",
    title: "Overtakelse av ny bolig: dette bør du sjekke",
    excerpt:
      "Overtakelsen er din viktigste anledning til å få feil og mangler protokollført. Her er hva du bør være forberedt på – og hvorfor det lønner seg å ha en fagperson med.",
    cover: "/Fagbasen/overtakelse-av-bolig-protokoll-1920w.webp",
    date: "2026-06-18",
    dateLabel: "18. juni 2026",
    author: "Tommy Howden",
    category: "Overtakelse",
    body: [
      {
        type: "paragraph",
        text: "Overtakelsen er øyeblikket der ansvaret for boligen går over fra utbygger til deg. Det er også den beste anledningen du har til å få dokumentert det som ikke er som det skal. Det du ikke fanger opp nå, kan bli vanskeligere og dyrere å rette opp senere.",
      },
      {
        type: "paragraph",
        text: "Mange opplever overtakelsen som stressende. Det er mye som skjer på kort tid, og det er lett å bli ivrig etter å få nøklene. Men en grundig gjennomgang her sparer deg ofte for store bekymringer i ettertid.",
      },
      { type: "heading", text: "Forbered deg før befaringen" },
      {
        type: "paragraph",
        text: "Les gjennom kontrakten og tilhørende dokumenter på forhånd, slik at du vet hva som faktisk er avtalt. Sammenlign det som er beskrevet med det du ser i boligen. Det er forskjell på en mangel og noe du bare hadde forventet annerledes – og den forskjellen avgjøres av hva som står i avtalen.",
      },
      {
        type: "list",
        items: [
          "Ta med kontrakt, leveransebeskrivelse og eventuelle tegninger.",
          "Noter spørsmål og uklarheter i forkant.",
          "Sett av god tid – ikke la deg stresse gjennom befaringen.",
          "Ta bilder av alt du reagerer på.",
        ],
      },
      { type: "heading", text: "Hva du bør se etter" },
      {
        type: "paragraph",
        text: "Gå systematisk gjennom rom for rom. Se etter avvik i utførelse, overflater som ikke er ferdigstilt, dører og vinduer som ikke fungerer som de skal, og tekniske installasjoner. Vær spesielt oppmerksom på våtrom, ventilasjon og det som er skjult bak overflater – det er her de kostbare feilene ofte ligger.",
      },
      {
        type: "callout",
        text: "Alt du oppdager skal protokollføres i overtakelsesprotokollen. Et muntlig løfte om at «det fikser vi» er lite verdt hvis det ikke står skrevet ned.",
      },
      { type: "heading", text: "Hvorfor ha med en fagperson?" },
      {
        type: "paragraph",
        text: "En uavhengig fagperson ser det du kanskje ikke ser, og vet hva som er god utførelse og hva som er avvik fra forskrift og avtale. Vi vurderer boligen nøkternt og uavhengig av utbygger, og hjelper deg å formulere mangler slik at de står seg i en eventuell dialog senere.",
      },
    ],
    metaTitle: "Overtakelse av ny bolig – sjekkliste og gode råd",
    metaDescription:
      "Hva bør du sjekke ved overtakelse av ny bolig? Praktisk sjekkliste og råd om protokoll, mangler og hvorfor det lønner seg å ha en uavhengig fagperson med.",
    keywords: [
      "overtakelse ny bolig",
      "overtakelsesprotokoll",
      "sjekkliste overtakelse",
      "mangler ny bolig",
      "befaring overtakelse",
    ],
  },
  {
    slug: "gjennomgang-av-byggekontrakter",
    title: "Byggekontrakter: les avtalen før du signerer",
    excerpt:
      "Mye av tryggheten i et byggeprosjekt avgjøres før første spadetak – i kontrakten. Her er det viktigste å forstå før du skriver under.",
    cover: "/Fagbasen/byggelanskontroll-byggeldelse-byggela-n-1920w.webp",
    date: "2026-06-12",
    dateLabel: "12. juni 2026",
    author: "Tommy Howden",
    category: "Kontrakter",
    body: [
      {
        type: "paragraph",
        text: "En god kontrakt beskriver tydelig hva som skal leveres, til hvilken pris, når – og hva som skjer hvis noe går galt. En uklar kontrakt er ofte starten på en konflikt. Derfor er det verdt å bruke tid på avtalen før den signeres, ikke etterpå.",
      },
      { type: "heading", text: "Hvilket regelverk gjelder for avtalen?" },
      {
        type: "paragraph",
        text: "Når en forbruker får oppført ny bolig eller fritidsbolig, gjelder ofte bustadoppføringslova. Ved andre håndverkertjenester på eksisterende bolig gjelder gjerne håndverkertjenesteloven. Hvilket regelverk som gjelder, påvirker blant annet rettighetene dine ved forsinkelse og mangler. Profesjonelle aktører bruker gjerne standardkontrakter, for eksempel NS-standardene.",
      },
      { type: "heading", text: "Se spesielt etter dette" },
      {
        type: "list",
        items: [
          "En tydelig og fullstendig beskrivelse av hva som inngår – og hva som ikke gjør det.",
          "Pris, og hvordan eventuelle endringer og tillegg skal håndteres.",
          "Fremdriftsplan og frister, med konsekvenser ved forsinkelse.",
          "Hvordan betaling henger sammen med fremdrift.",
          "Garantier, sikkerhetsstillelse og hva som gjelder ved mangler.",
        ],
      },
      {
        type: "callout",
        text: "Et vanlig råd: ikke betal for mer enn det som faktisk er utført. Betalingsplanen skal følge fremdriften, ikke ligge foran den.",
      },
      { type: "heading", text: "Få et nøytralt blikk" },
      {
        type: "paragraph",
        text: "Vi går gjennom kontrakten med deg og forklarer hva den faktisk innebærer – uten binding til motparten. Da kan du gjøre endringer og stille de riktige spørsmålene mens du fortsatt har forhandlingsrom.",
      },
    ],
    metaTitle: "Gjennomgang av byggekontrakter – råd før du signerer",
    metaDescription:
      "Hva bør du se etter i en byggekontrakt? Råd om regelverk, betalingsplan, frister og mangler – og hvorfor en uavhengig gjennomgang lønner seg før signering.",
    keywords: [
      "byggekontrakt",
      "gjennomgang kontrakt bolig",
      "bustadoppføringslova",
      "kontrakt håndverker",
      "betalingsplan bygg",
    ],
  },
  {
    slug: "vatrom-vanlige-feil",
    title: "Våtrom: de vanligste feilene – og hvordan du oppdager dem",
    excerpt:
      "Våtrom er blant det mest kritiske og feilutsatte i en bolig. Små feil i utførelsen kan gi store fuktskader. Her er det du bør være oppmerksom på.",
    cover: "/Fagbasen/vatrom-membran-bad.png",
    date: "2026-06-05",
    dateLabel: "5. juni 2026",
    author: "Tommy Howden",
    category: "Våtrom",
    body: [
      {
        type: "paragraph",
        text: "Få steder i boligen er så utsatt for feil som våtrommet. Her stilles det høye krav til både materialer og utførelse, og konsekvensene av en feil kan være dyre fuktskader som først viser seg lenge etter at arbeidet er ferdig.",
      },
      { type: "heading", text: "Vanlige feil i våtrom" },
      {
        type: "list",
        items: [
          "Mangelfull eller feil utført membran bak fliser.",
          "Fall mot sluk som ikke er riktig, slik at vannet blir stående.",
          "Sluk som ikke er riktig tilpasset membranen.",
          "Rør- og gjennomføringer som ikke er tettet skikkelig.",
          "Ventilasjon som ikke fjerner fukt godt nok.",
        ],
      },
      {
        type: "paragraph",
        text: "Mye av dette er skjult bak fliser og overflater når rommet er ferdig. Derfor er dokumentasjon underveis i byggeprosessen viktig – bilder av membran og sluk før flislegging kan være avgjørende dersom det senere oppstår tvil.",
      },
      { type: "heading", text: "Krav til fall og membran (preaksepterte ytelser)" },
      {
        type: "paragraph",
        text: "Veiledningen til byggteknisk forskrift, TEK17 § 13-15, angir preaksepterte ytelser for våtrom. Det er løsninger som regnes for å oppfylle kravene; velger man andre løsninger, må de dokumenteres særskilt. Figuren under viser de preaksepterte løsningene for fall til sluk og membran:",
      },
      {
        type: "image",
        src: "/artikler/fall-tek17.png",
        alt: "Preaksepterte ytelser for fall til sluk og membran i våtrom etter TEK17 § 13-15, med fall i og utenfor dusjsonen, nedsenket dusjgrube og membranoppkant.",
        width: 2000,
        height: 1414,
        caption: "TEK17 § 13-15 – preaksepterte ytelser for våtrom og rom med vanninstallasjoner.",
      },
      {
        type: "callout",
        text: "For lite fall i dusjsonen er en av de hyppigste årsakene til at vann blir stående og fukt trekker inn der det ikke skal. Be alltid om dokumentasjon på våtromsarbeidet, og ta vare på den – den er gull verdt hvis du senere må reklamere eller selge boligen.",
      },
      { type: "heading", text: "Slik kan vi hjelpe" },
      {
        type: "paragraph",
        text: "Vi kan kontrollere våtromsarbeidet underveis eller i etterkant, og vurdere utførelsen opp mot beskrivelse, produktanvisninger og god håndverksskikk. Du får en dokumentert vurdering du kan stole på – uavhengig av den som har bygget.",
      },
    ],
    metaTitle: "Vanlige feil i våtrom – slik oppdager du dem",
    metaDescription:
      "De vanligste feilene i våtrom og hvordan du oppdager dem: membran, fall mot sluk, tetting og ventilasjon. Råd om dokumentasjon og uavhengig kontroll.",
    keywords: [
      "feil i våtrom",
      "våtrom membran",
      "fuktskade bad",
      "våtromskontroll",
      "fall til sluk",
      "preaksepterte ytelser våtrom",
      "TEK17 våtrom",
    ],
  },
  {
    slug: "legalisering-av-ulovlige-tiltak",
    title: "Legalisering: når noe er bygget eller tatt i bruk uten godkjenning",
    excerpt:
      "Et innredet kjellerrom, en utleiedel eller et tilbygg uten godkjenning kan skape problemer ved salg. Slik går du frem for å få det lovlig.",
    cover: "/Referanser/tomannsbolig-privatperson.webp",
    date: "2026-05-28",
    dateLabel: "28. mai 2026",
    author: "Tommy Howden",
    category: "Legalisering",
    body: [
      {
        type: "paragraph",
        text: "Mange boliger har rom eller tiltak som er bygget om eller tatt i bruk uten at det er omsøkt og godkjent. Et typisk eksempel er et kjellerrom som brukes som soverom eller utleiedel, men som ikke er godkjent for varig opphold. Det går ofte bra helt til boligen skal selges – da kan det bli et problem.",
      },
      { type: "heading", text: "Hvorfor det er viktig å rydde opp" },
      {
        type: "paragraph",
        text: "Først og fremst handler det om sikkerhet. Rom som brukes til varig opphold – for eksempel soverom – må tilfredsstille krav til blant annet rømning og brannsikkerhet. Godkjenningen er ikke bare en formalitet; den skal sikre at du kommer trygt ut hvis det begynner å brenne.",
      },
      {
        type: "paragraph",
        text: "I tillegg skal arealer og bruk oppgis riktig ved salg. Rom som ikke er godkjent for varig opphold, kan ikke uten videre markedsføres som soverom eller stue. Avvik kan føre til reklamasjoner og redusert verdi – og i verste fall krav om tilbakeføring.",
      },
      { type: "heading", text: "Hva som ofte må på plass" },
      {
        type: "list",
        items: [
          "Søknad om bruksendring til kommunen.",
          "Dokumentasjon på at rommet tilfredsstiller krav til blant annet rømning, dagslys og takhøyde.",
          "Tegninger som viser faktisk utførelse.",
          "Som regel ansvarlige foretak for søknad, prosjektering og utførelse – i noen tilfeller også kontroll.",
        ],
      },
      {
        type: "callout",
        text: "Reglene og kravene varierer fra tiltak til tiltak – avhengig av byggeår og hvilken type endring som er gjort. En tidlig avklaring sparer deg ofte for både tid og kostnader.",
      },
      { type: "heading", text: "Vi hjelper deg gjennom prosessen" },
      {
        type: "paragraph",
        text: "Vi har lang erfaring med legaliseringssaker og kjenner veien fra avvik til godkjent. Vi vurderer hva som skal til i din sak, dokumenterer faktisk tilstand og koordinerer fagfolkene som trengs:",
      },
      {
        type: "list",
        items: [
          "Innhenting av brannprosjektering og øvrig prosjektering.",
          "Ansvarlig søker.",
          "Ansvarlig utførende.",
          "Ansvarlig kontrollerende.",
          "Dialog med kommunen gjennom hele saken.",
        ],
      },
      {
        type: "paragraph",
        text: "Vi kan også avklare om det er grunnlag for å rette krav mot tidligere eier, slik at du vet hvilke muligheter du har.",
      },
    ],
    metaTitle: "Legalisering av ulovlige tiltak – bruksendring og godkjenning",
    metaDescription:
      "Har du et rom eller tiltak som er bygget eller tatt i bruk uten godkjenning? Slik går du frem med bruksendring og legalisering før salg. Råd fra byggfaglig rådgiver.",
    keywords: [
      "legalisering bolig",
      "bruksendring kjeller",
      "ulovlig tiltak bolig",
      "godkjenne rom for varig opphold",
      "søknad bruksendring",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

/** Innlegg sortert nyeste først. */
export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));

