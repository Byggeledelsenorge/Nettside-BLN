// Tjenestedata for Byggeledelse Norge AS.
// Driver bade kort (kort) og fullstendige undersider /tjenester/[slug].
// Faktaopplysninger som ma verifiseres er markert med [VERIFISER].

export type Audience = "privat" | "bedrift";

export type ServiceSection = {
  heading: string;
  body: string;
};

export type Service = {
  slug: string;
  audience: Audience;
  /** Full tittel brukt pa underside og i SEO */
  title: string;
  /** Kort tittel for kort, nav og lister */
  shortTitle: string;
  /** En enkelt linje som oppsummerer tjenesten */
  tagline: string;
  /** 2-3 setninger om hva kunden far (brukes pa kort) */
  summary: string;
  /** Ingress pa undersiden */
  intro: string;
  /** Hva du far / hva vi gjor */
  deliverables: ServiceSection[];
  /** Konkrete situasjoner der tjenesten er aktuell */
  whenRelevant: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export const services: Service[] = [
  // ---------------------------------------------------------------------------
  // PRIVAT (hovedfokus)
  // ---------------------------------------------------------------------------
  {
    slug: "reklamasjon-handverker",
    audience: "privat",
    title: "Reklamasjoner og tvister med entreprenør",
    shortTitle: "Reklamasjon og tvist",
    tagline: "Få en fagperson på din side.",
    summary:
      "Står du i en konflikt med entreprenør eller håndverker? Vi dokumenterer feilene faglig, vurderer kravene dine opp mot kontrakt og standard, og gir deg et grunnlag som holder – enten saken løses i dialog eller går videre.",
    intro:
      "En tvist med håndverkeren er sjelden en kamp om hvem som roper høyest. Den avgjøres av dokumentasjon: hva som faktisk er avtalt, hva som er levert, og om arbeidet holder faglig mål. Vi gir deg den dokumentasjonen – oversiktlig, etterprøvbart og uavhengig.",
    deliverables: [
      {
        heading: "Faglig vurdering av arbeidet",
        body: "Vi befarer boligen, vurderer det utførte arbeidet opp mot gjeldende krav og dokumenterer avvik med bilder, beskrivelser og henvisninger til relevante standarder.",
      },
      {
        heading: "Vurdering av kravene dine",
        body: "Vi går gjennom kontrakt, tilbud og kommunikasjon, og hjelper deg å forstå hva du har krav på – og hva som er rimelig å kreve utbedret eller priskompensert.",
      },
      {
        heading: "Dokumentasjon som holder",
        body: "Du får en skriftlig rapport vi kan bruke i dialog med motparten, overfor forsikring eller som grunnlag for advokat dersom saken går videre.",
      },
    ],
    whenRelevant: [
      "Håndverkeren mener arbeidet er i orden, mens du ser feil",
      "Du holder tilbake betaling og trenger faglig grunnlag",
      "Sluttsummen ble langt høyere enn avtalt",
      "Arbeidet er ikke ferdigstilt som avtalt",
    ],
    metaTitle: "Reklamasjon håndverker – uavhengig byggfaglig bistand",
    metaDescription:
      "I konflikt med entreprenør eller håndverker? Vi dokumenterer byggfeil og mangler faglig og gir deg et grunnlag som holder. Uavhengig byggfaglig bistand i Ålesund og på Sunnmøre.",
    keywords: [
      "reklamasjon håndverker",
      "tvist entreprenør",
      "klage på håndverker",
      "byggfaglig bistand reklamasjon",
      "uenighet håndverker",
    ],
  },
  {
    slug: "byggfeil-og-mangler",
    audience: "privat",
    title: "Byggfeil og mangler",
    shortTitle: "Byggfeil og mangler",
    tagline: "Vi finner ut hva som er galt – og hva som skal til for å rette det.",
    summary:
      "Mistenker du at noe er gjort feil? Vi kartlegger feil og mangler, finner sannsynlig årsak og beskriver hva som må til for å utbedre. Du får en klar oversikt i stedet for usikkerhet.",
    intro:
      "Sprekker, skjevheter, dårlig tilpasning eller løsninger som ikke ser riktige ut. Når magefølelsen sier at noe er galt, trenger du en fagperson som kan slå fast hva som faktisk er feil, hvor alvorlig det er, og hva som skal til for å rette det.",
    deliverables: [
      {
        heading: "Kartlegging av feil",
        body: "Vi gjennomgår de aktuelle arbeidene systematisk og avdekker avvik fra forskrift, standard og god håndverksskikk.",
      },
      {
        heading: "Årsak og konsekvens",
        body: "Vi vurderer sannsynlig årsak og hvilke konsekvenser feilen kan få over tid – slik at du vet hva som haster og hva som kan vente.",
      },
      {
        heading: "Forslag til utbedring",
        body: "Du får en beskrivelse av hva som bør gjøres, slik at du kan innhente riktige tilbud og unngå å betale for feil løsning.",
      },
    ],
    whenRelevant: [
      "Du oppdager feil etter oppussing eller nybygg",
      "Noe ser skjevt, sprukket eller dårlig utført ut",
      "Du vil vite om en feil er alvorlig før du går videre",
      "Du trenger en nøytral vurdering før du bestiller utbedring",
    ],
    metaTitle: "Byggfeil og mangler – hjelp til å avdekke og dokumentere",
    metaDescription:
      "Mistenker du byggfeil eller mangler i boligen? Vi kartlegger feil, vurderer årsak og beskriver utbedring. Uavhengig byggfaglig vurdering i Ålesund og på Sunnmøre.",
    keywords: [
      "byggfeil hjelp",
      "mangler bolig",
      "byggfeil bolig",
      "avdekke byggfeil",
      "feil etter oppussing",
    ],
  },
  {
    slug: "uavhengig-kontroll-bolig",
    audience: "privat",
    title: "Uavhengig kontroll (tiltaksklasse 1)",
    shortTitle: "Uavhengig kontroll",
    tagline: "Lovpålagt kontroll utført av en uavhengig fagperson.",
    summary:
      "For mange byggetiltak kreves uavhengig kontroll av blant annet våtrom og lufttetthet. Vi utfører kontrollen i tiltaksklasse 1, dokumenterer funn og bekrefter at krav er oppfylt – helt uavhengig av den som har bygget.",
    intro:
      "Uavhengig kontroll skal sikre at de viktigste tingene faktisk er gjort riktig. Som uavhengig kontrollør har vi ingen binding til den som har utført arbeidet – det er nettopp poenget. Vi kontrollerer, dokumenterer og bekrefter.",
    deliverables: [
      {
        heading: "Kontroll i tiltaksklasse 1",
        body: "Vi utfører uavhengig kontroll av prosjektering og utførelse innenfor tiltaksklasse 1, typisk våtrom og lufttetthet i bolig.",
      },
      {
        heading: "Dokumentert kontrollarbeid",
        body: "Vi gjennomfører kontrollen etter krav i byggesaksforskriften og dokumenterer funn, avvik og lukking av avvik.",
      },
      {
        heading: "Sluttdokumentasjon",
        body: "Du får kontrolldokumentasjon som inngår i byggesaken og bekrefter at kontrollerte områder oppfyller kravene.",
      },
    ],
    whenRelevant: [
      "Du bygger nytt eller bygger om og kontroll er pålagt",
      "Kommunen krever uavhengig kontroll i byggesaken",
      "Du vil være sikker på at våtrom er riktig utført",
      "Du trenger en kontrollør uten binding til entreprenøren",
    ],
    metaTitle: "Uavhengig kontroll bolig – tiltaksklasse 1",
    metaDescription:
      "Uavhengig kontroll av våtrom og lufttetthet i tiltaksklasse 1. Vi kontrollerer og dokumenterer uavhengig av den som har bygget. Byggeledelse Norge.",
    keywords: [
      "uavhengig kontroll bolig",
      "uavhengig kontroll tiltaksklasse 1",
      "uavhengig kontroll våtrom",
      "kontroll lufttetthet",
      "uavhengig kontrollør",
    ],
  },
  {
    slug: "overtakelse-ny-bolig",
    audience: "privat",
    title: "Teknisk bistand ved overtakelse",
    shortTitle: "Overtakelse av bolig",
    tagline: "Ha en fagperson med deg når du overtar boligen.",
    summary:
      "Vi setter oss inn i dokumenter og leveransebeskrivelser slik at du får levert det du har rett på – og får feil og mangler protokollført før ansvaret går over på deg. Vi blir med på befaringen, ser det utrente øyne ikke ser, og sørger for at avvik kommer skriftlig inn i protokollen.",
    intro:
      "Når du overtar en ny bolig eller et nyoppusset prosjekt, skifter ansvaret hender. Vi gjenomgår underlag og kontrakt før overtakelse, vurderer arbeidet med fagøyne og hjelper deg å ivareta dine rettigheter.",
    deliverables: [
      {
        heading: "Befaring sammen med deg",
        body: "Vi deltar på overtakelsesbefaringen og gjennomgår boligen systematisk mens vi forklarer hva vi ser.",
      },
      {
        heading: "Avvik på papiret",
        body: "Vi hjelper deg å formulere og protokollføre mangler korrekt, slik at de ikke kan avvises i etterkant.",
      },
      {
        heading: "Trygghet i en viktig situasjon",
        body: "Du slipper å stå alene mot utbygger eller entreprenør, og kan ta beslutninger på et faglig grunnlag.",
      },
    ],
    whenRelevant: [
      "Du skal overta ny bolig fra utbygger",
      "Du skal overta et oppussings- eller tilbyggprosjekt",
      "Du er usikker på hva du skal se etter ved overtakelse",
      "Du vil ikke stå alene i møtet med entreprenøren",
    ],
    metaTitle: "Overtakelse av ny bolig – teknisk bistand på befaringen",
    metaDescription:
      "Skal du overta ny bolig? Ha en uavhengig fagperson med på overtakelsesbefaringen som avdekker mangler og sikrer protokollføring. Byggeledelse Norge.",
    keywords: [
      "overtakelse ny bolig",
      "overtakelsesbefaring",
      "bistand overtakelse bolig",
      "feil ved overtakelse",
      "protokoll overtakelse",
    ],
  },
  {
    slug: "byggfaglig-radgivning-nybygg",
    audience: "privat",
    title: "Byggfaglig rådgivning ved nybygg og rehabilitering",
    shortTitle: "Rådgivning ved nybygg og rehabilitering",
    tagline: "Riktige valg fra start sparer deg for dyre feil senere.",
    summary:
      "Skal du bygge nytt, bygge på eller pusse opp? Vi er rådgiveren på din side gjennom prosjektet – fra kontrakt og tilbud til løsninger og oppfølging – slik at du tar informerte valg og unngår fallgruvene.",
    intro:
      "De fleste byggeprosjekter går galt før spaden settes i jorda – i uklare kontrakter, dårlige tilbud og løsninger ingen tenkte godt nok igjennom. Med en uavhengig rådgiver på laget tar du bedre valg fra start, og har noen å støtte deg på når spørsmålene kommer.",
    deliverables: [
      {
        heading: "Gjennomgang av kontrakt og tilbud",
        body: "Vi vurderer kontrakter og tilbud før du signerer, og peker på det som er uklart, ufullstendig eller ugunstig for deg.",
      },
      {
        heading: "Faglig sparring underveis",
        body: "Du har en fagperson å spørre når valgene skal tas – om løsninger, materialer og hva som er rimelig å forvente.",
      },
      {
        heading: "Oppfølging av fremdrift og kvalitet",
        body: "Vi kan følge prosjektet og se til at arbeidet utføres som avtalt, slik at avvik fanges opp mens de fortsatt er enkle å rette.",
      },
    ],
    whenRelevant: [
      "Du skal signere kontrakt med entreprenør",
      "Du planlegger nybygg, tilbygg eller større oppussing",
      "Du vil ha noen å rådføre deg med underveis",
      "Du vil unngå de vanligste og dyreste feilene",
    ],
    metaTitle: "Byggfaglig rådgivning ved nybygg og oppussing",
    metaDescription:
      "Uavhengig byggfaglig rådgiver for deg som skal bygge nytt eller pusse opp. Vi gjennomgår kontrakt, gir faglig sparring og følger opp kvalitet. Ålesund og Sunnmøre.",
    keywords: [
      "byggfaglig rådgivning",
      "rådgiver nybygg",
      "byggteknisk rådgiver privat",
      "hjelp til byggeprosjekt",
      "gjennomgang byggekontrakt",
    ],
  },
  {
    slug: "vurdering-av-utfort-arbeid",
    audience: "privat",
    title: "Legalisering av boenheter",
    shortTitle: "Legalisering av boenheter",
    tagline: "Kartlegging, juridisk samhandling og utbedring.",
    summary:
      "Oppdaget at godkjente tegninger i kommunen ikke stemmer med dagens planløsning? Vi bistår med kartlegging av avvik, samhandling med juridisk for å sjekke om du kan ha et krav mot megler eller selger, og videre med utbedring av bygget.",
    intro:
      "Når planløsningen din ikke stemmer med det kommunen har godkjent, oppstår det ofte usikkerhet rundt lovlighet, ansvar og hvilke steg som er riktige. Vi kartlegger avvikene byggfaglig, lager dokumentasjon til juridisk vurdering, og hjelper deg å komme frem til en lovlig og robust løsning – gjerne i samhandling med juridisk rådgiver.",
    deliverables: [
      {
        heading: "Kartlegging av avvik fra godkjente tegninger",
        body: "Vi dokumenterer hva som faktisk er utført i forhold til kommunens godkjente tegninger og planløsning, slik at du forstår omfanget og konsekvensene i praksis.",
      },
      {
        heading: "Faglig dokumentasjon for juridisk vurdering",
        body: "Du får en ryddig, etterprøvbar oppsummering som kan deles med juridisk rådgiver for å vurdere mulige krav mot megler eller selger.",
      },
      {
        heading: "Samhandling med juridisk for å avklare ansvar og rettigheter",
        body: "Vi koordinerer avklaringer slik at spørsmål knyttet til ansvar, frister og prosess håndteres på riktig grunnlag.",
      },
      {
        heading: "Utbedring og vei mot legalisering/bruksendring",
        body: "Vi bidrar med teknisk bistand til nødvendig utbedring, og følger opp at dokumentasjonen som trengs for en lovlig løsning blir etablert.",
      },
    ],
    whenRelevant: [
      "Du oppdager at godkjente tegninger ikke stemmer med dagens planløsning",
      "Du vurderer krav mot megler eller selger",
      "Du trenger hjelp med legalisering/bruksendring gjennom riktig prosess",
      "Du ønsker en tryggere vei videre før du selger eller tar i bruk boenheten",
    ],
    metaTitle: "Legalisering av boenheter – avvik fra godkjente tegninger",
    metaDescription:
      "Oppdaget at godkjente tegninger i kommunen ikke stemmer med dagens planløsning? Vi kartlegger avvik, samhandler med juridisk for å vurdere krav mot megler eller selger, og hjelper med utbedring og lovlig løsning. Byggeledelse Norge.",
    keywords: [
      "legalisering boenheter",
      "bruksendring",
      "avvik godkjente tegninger",
      "krav mot megler",
      "krav mot selger",
      "byggfaglig dokumentasjon",
    ],
  },

  // ---------------------------------------------------------------------------
  // BEDRIFT (sekundaert)
  // ---------------------------------------------------------------------------
  {
    slug: "byggeledelse",
    audience: "bedrift",
    title: "Byggeledelse",
    shortTitle: "Byggeledelse",
    tagline: "Faglig styring av utførelsen på byggeplass.",
    summary:
      "Vi ivaretar byggherrens interesser på byggeplassen – følger opp fremdrift, kvalitet og økonomi, og sikrer at entreprisene leveres i tråd med kontrakt og krav.",
    intro:
      "God byggeledelse handler om å ha kontroll før avvikene blir dyre. Vi følger utførelsen tett, holder trådene mellom aktørene og sørger for at det som avtales på papiret også blir levert på plassen.",
    deliverables: [
      {
        heading: "Oppfølging av utførelse",
        body: "Vi følger opp entreprenørene på byggeplass, kontrollerer at arbeidet utføres etter beskrivelse og fanger opp avvik tidlig.",
      },
      {
        heading: "Fremdrift og økonomi",
        body: "Vi holder oversikt over fremdrift, endringer og kostnader, og rapporterer jevnlig til byggherre.",
      },
      {
        heading: "Møteledelse og dokumentasjon",
        body: "Vi leder byggemøter, fører referat og sikrer sporbar dokumentasjon gjennom hele utførelsesfasen.",
      },
    ],
    whenRelevant: [
      "Byggherre trenger faglig representasjon på plassen",
      "Prosjektet har flere entrepriser som må koordineres",
      "Det er behov for tettere kontroll på kvalitet og fremdrift",
    ],
    metaTitle: "Byggeledelse – faglig oppfølging for byggherre",
    metaDescription:
      "Profesjonell byggeledelse som ivaretar byggherrens interesser på byggeplassen: fremdrift, kvalitet, økonomi og dokumentasjon. Byggeledelse Norge.",
    keywords: [
      "byggeledelse",
      "byggeleder",
      "oppfølging byggeplass",
      "byggherrens representant",
    ],
  },
  {
    slug: "prosjektledelse",
    audience: "bedrift",
    title: "Prosjektledelse",
    shortTitle: "Prosjektledelse",
    tagline: "Helhetlig styring fra idé til ferdig prosjekt.",
    summary:
      "Vi tar ansvar for at prosjektet styres mot mål – med kontroll på omfang, fremdrift, kostnad og kvalitet gjennom alle faser.",
    intro:
      "Prosjektledelse er å holde helheten samlet når mange aktører og hensyn skal forenes. Vi styrer prosjektet strukturert fra tidlig fase til overlevering, med tydelig rapportering underveis.",
    deliverables: [
      {
        heading: "Planlegging og styring",
        body: "Vi etablerer struktur for omfang, fremdrift og budsjett, og styrer prosjektet mot avtalte mål.",
      },
      {
        heading: "Kontraktsoppfølging",
        body: "Vi følger opp kontrakter, grensesnitt og leveranser mellom de involverte aktørene.",
      },
      {
        heading: "Rapportering til byggherre",
        body: "Vi gir byggherre et tydelig beslutningsgrunnlag gjennom jevnlig og etterprøvbar rapportering.",
      },
    ],
    whenRelevant: [
      "Byggherre vil ha én ansvarlig for helheten",
      "Prosjektet krever struktur på fremdrift og økonomi",
      "Det er behov for profesjonell styring gjennom alle faser",
    ],
    metaTitle: "Prosjektledelse bygg – styring fra idé til ferdigstillelse",
    metaDescription:
      "Profesjonell prosjektledelse for byggeprosjekter: styring av omfang, fremdrift, kostnad og kvalitet i alle faser. Byggeledelse Norge.",
    keywords: ["prosjektledelse bygg", "prosjektleder", "byggeprosjekt styring"],
  },
  {
    slug: "byggherrebistand",
    audience: "bedrift",
    title: "Byggherrebistand",
    shortTitle: "Byggherrebistand",
    tagline: "Byggherrens faglige støttespiller gjennom prosjektet.",
    summary:
      "Vi bistår byggherre med fagkompetansen som trengs for å ta riktige beslutninger – fra anskaffelse og kontrakt til oppfølging og overtakelse.",
    intro:
      "Som byggherre står du ansvarlig, men sitter ikke alltid på fagkompetansen prosjektet krever. Vi er den faglige støttespilleren på din side, slik at beslutningene tas på riktig grunnlag.",
    deliverables: [
      {
        heading: "Anskaffelse og kontrakt",
        body: "Vi bistår med konkurransegrunnlag, valg av entreprenør og kontraktsinngåelse.",
      },
      {
        heading: "Faglig beslutningsstøtte",
        body: "Vi gir råd i de viktige veivalgene gjennom prosjektet, slik at byggherre kan beslutte trygt.",
      },
      {
        heading: "Oppfølging mot overtakelse",
        body: "Vi følger prosjektet frem mot en ryddig og godt dokumentert overtakelse.",
      },
    ],
    whenRelevant: [
      "Byggherre mangler egen byggteknisk kompetanse",
      "Det skal inngås kontrakt med entreprenør",
      "Byggherre vil sikre interessene sine gjennom prosjektet",
    ],
    metaTitle: "Byggherrebistand – faglig støtte for byggherre",
    metaDescription:
      "Byggherrebistand fra uavhengig fagperson: anskaffelse, kontrakt, beslutningsstøtte og oppfølging mot overtakelse. Byggeledelse Norge.",
    keywords: ["byggherrebistand", "byggherreombud", "rådgiver byggherre"],
  },
  {
    slug: "hms-koordinering",
    audience: "bedrift",
    title: "HMS-koordinering (KU/KP)",
    shortTitle: "HMS-koordinering",
    tagline: "Koordinator for sikkerhet, helse og arbeidsmiljø.",
    summary:
      "Vi ivaretar rollen som koordinator i prosjekterings- og utførelsesfasen (KP/KU) etter byggherreforskriften, slik at sikkerhet, helse og arbeidsmiljø er ivaretatt gjennom hele prosjektet.",
    intro:
      "Byggherreforskriften stiller tydelige krav til koordinering av sikkerhet, helse og arbeidsmiljø. Vi tar koordinatorrollen i prosjektering (KP) og utførelse (KU), og sørger for at kravene følges i praksis – ikke bare på papiret.",
    deliverables: [
      {
        heading: "Koordinering i prosjektering (KP)",
        body: "Vi koordinerer SHA-hensyn i prosjekteringsfasen og bidrar til at risiko håndteres tidlig.",
      },
      {
        heading: "Koordinering i utførelse (KU)",
        body: "Vi koordinerer SHA på byggeplass i utførelsesfasen og følger opp at tiltakene etterleves.",
      },
      {
        heading: "SHA-plan og dokumentasjon",
        body: "Vi bidrar til utarbeidelse og oppfølging av SHA-plan og nødvendig dokumentasjon.",
      },
    ],
    whenRelevant: [
      "Prosjektet er omfattet av byggherreforskriften",
      "Byggherre trenger KP og/eller KU",
      "Flere virksomheter arbeider på samme byggeplass",
    ],
    metaTitle: "HMS-koordinator (KU/KP) – byggherreforskriften",
    metaDescription:
      "Koordinator for sikkerhet, helse og arbeidsmiljø i prosjektering (KP) og utførelse (KU) etter byggherreforskriften. Byggeledelse Norge.",
    keywords: ["HMS-koordinator", "KU KP", "SHA byggeplass", "byggherreforskriften"],
  },
  {
    slug: "kvalitetssikring",
    audience: "bedrift",
    title: "Kvalitetssikring",
    shortTitle: "Kvalitetssikring",
    tagline: "Systematisk kontroll av at kravene faktisk oppfylles.",
    summary:
      "Vi etablerer og følger opp kvalitetssikring i prosjektet, slik at krav til løsninger og utførelse dokumenteres og innfris – uten ubehagelige overraskelser ved overtakelse.",
    intro:
      "Kvalitet som ikke kontrolleres, er kvalitet du bare håper på. Vi setter opp og følger systematisk kvalitetssikring, slik at det som skal leveres faktisk blir levert – og kan dokumenteres.",
    deliverables: [
      {
        heading: "Kontrollplan",
        body: "Vi etablerer en kontrollplan tilpasset prosjektet og de kritiske arbeidene.",
      },
      {
        heading: "Kontroll og verifikasjon",
        body: "Vi følger opp at kontrollene gjennomføres og at krav verifiseres underveis.",
      },
      {
        heading: "Dokumentert kvalitet",
        body: "Vi sikrer at kvalitetsarbeidet dokumenteres og kan etterprøves ved overtakelse.",
      },
    ],
    whenRelevant: [
      "Prosjektet stiller høye krav til kvalitet og dokumentasjon",
      "Byggherre vil verifisere at krav faktisk oppfylles",
      "Det er behov for systematisk kontroll av utførelsen",
    ],
    metaTitle: "Kvalitetssikring bygg – systematisk kontroll og dokumentasjon",
    metaDescription:
      "Kvalitetssikring i byggeprosjekter: kontrollplan, verifikasjon og dokumentert kvalitet frem mot overtakelse. Byggeledelse Norge.",
    keywords: ["kvalitetssikring bygg", "kontrollplan", "KS byggeprosjekt"],
  },
  {
    slug: "oppfolging-av-entrepriser",
    audience: "bedrift",
    title: "Tvisteløsning i entrepriser",
    shortTitle: "Tvisteløsning i entrepriser",
    tagline: "Kontroll på leveransene fra hver enkelt entreprenør.",
    summary:
      "Vi følger opp entreprenørene mot kontrakt og beskrivelse, koordinerer grensesnitt og sikrer at hver entreprise leverer det den skal – i riktig kvalitet og til rett tid.",
    intro:
      "Når flere entrepriser møtes i samme prosjekt, oppstår avvikene gjerne i grensesnittene. Vi følger opp hver leveranse mot kontrakt og koordinerer aktørene, slik at helheten henger sammen.",
    deliverables: [
      {
        heading: "Kontraktsoppfølging",
        body: "Vi følger opp at hver entreprenør leverer i tråd med kontrakt og beskrivelse.",
      },
      {
        heading: "Koordinering av grensesnitt",
        body: "Vi koordinerer overgangene mellom entreprisene, der avvik og forsinkelser ofte oppstår.",
      },
      {
        heading: "Avviks- og endringshåndtering",
        body: "Vi håndterer avvik og endringer ryddig og dokumentert gjennom hele utførelsen.",
      },
    ],
    whenRelevant: [
      "Prosjektet har flere parallelle entrepriser",
      "Grensesnittene mellom fagene må koordineres",
      "Byggherre vil ha kontroll på hver leveranse",
    ],
    metaTitle: "Oppfølging av entrepriser – koordinering og kontroll",
    metaDescription:
      "Oppfølging av entrepriser mot kontrakt, koordinering av grensesnitt og ryddig avvikshåndtering gjennom utførelsen. Byggeledelse Norge.",
    keywords: [
      "oppfølging entrepriser",
      "entreprisekoordinering",
      "kontraktsoppfølging bygg",
    ],
  },
];

export const privateServices = services.filter((s) => s.audience === "privat");
export const businessServices = services.filter((s) => s.audience === "bedrift");

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
