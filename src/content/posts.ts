// Fagbase / kunnskapsartikler for Byggeledelse Norge AS.
// Migrert fra den opprinnelige nettsiden. Brukes av /fagbase og /fagbase/[slug].

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

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
    slug: "energiradgivning",
    title: "Energirådgivning: Se nøyaktig hvor boligen din lekker penger",
    excerpt:
      "Byggeledelse Norge er sertifiserte energirådgivere: Vi finner «strømtyvene» i hjemmet ditt i Ålesund og lager en konkret plan som kutter kostnadene. Staten dekker inntil 5 000 kr av rådgivningen.",
    cover: "/Fagbasen/byggeledelse-norge-energi-1920w.webp",
    date: "2026-01-12",
    dateLabel: "12. januar 2026",
    author: "Tommy Howden",
    category: "Privat",
    body: [
      {
        type: "paragraph",
        text: "De fleste boligeiere i Ålesund vet at strømmen er dyr, men de færreste vet nøyaktig hvor boligen lekker varme. Å gjette på tiltak som etterisolering eller bytte av vinduer kan bli en ekstremt dyr feilprioritering. Uten en profesjonell energianalyse risikerer du å bruke 100 000 kr på tiltak som bare sparer deg for noen få hundrelapper i måneden.",
      },
      { type: "heading", text: "En profesjonell «helsesjekk» av boligen din" },
      {
        type: "paragraph",
        text: "Som sertifiserte energirådgivere (via NEAK) gjør Byggeledelse Norge det kompliserte enkelt. Vi kommer hjem til deg, går gjennom hele boligen, og gir deg en komplett rapport som viser:",
      },
      {
        type: "list",
        items: [
          "Nøyaktig energimerke: Hvor effektiv er boligen din i dag?",
          "Tiltaksplanen: Hvilke oppgraderinger gir mest «bang for the buck»?",
          "Støtteoversikt: Hvor mye kan du få i støtte fra Enova for de ulike tiltakene?",
        ],
      },
      {
        type: "callout",
        text: "Visste du? Enova gir deg inntil 5 000 kr i ren støtte bare for å gjennomføre selve energirådgivningen. Vi hjelper deg med hele søknadsprosessen.",
      },
      { type: "heading", text: "Lokalkunnskap i Ålesund" },
      {
        type: "paragraph",
        text: "Vi kjenner klimaet på Sunnmøre. Vi vet hva som kreves for at en bolig skal tåle vestlandsværet samtidig som den holder på varmen.",
      },
      {
        type: "list",
        items: [
          "Sertifiserte eksperter: Utdannet gjennom NEAK.",
          "Full kontroll: Vi håndterer dokumentasjonen Enova krever.",
          "Verdiøkning: En bolig med bedre energikarakter er mer attraktiv på dagens marked.",
        ],
      },
      {
        type: "paragraph",
        text: "Bestill en uforpliktende prat om energirådgivning i dag – så finner vi ut hvor det lønner seg for deg å sette inn støtet.",
      },
    ],
    metaTitle: "Energirådgivning i Ålesund – finn strømtyvene og få Enova-støtte",
    metaDescription:
      "Sertifiserte energirådgivere i Ålesund. Vi kartlegger hvor boligen lekker varme, lager en tiltaksplan og hjelper deg med Enova-støtte (inntil 5 000 kr for selve rådgivningen).",
    keywords: [
      "energirådgivning Ålesund",
      "Enova-støtte energirådgivning",
      "energimerke bolig",
      "energianalyse bolig",
      "NEAK energirådgiver",
    ],
  },
  {
    slug: "byggeledelse-passasjen-parkering",
    title: "Presisjon ved sykehuset: Sikker byggeledelse av Passasjen Parkering",
    excerpt:
      "Å bygge 18 000 kvadratmeter infrastruktur tett på et operativt sykehus krever ekstrem presisjon. Slik ledet vi byggingen av Passasjen Parkering.",
    cover: "/Fagbasen/passasjen-parkering-a-lesund-sykehus-1920w.webp",
    coverCredit: "Foto: Marit Brunstad",
    date: "2025-12-16",
    dateLabel: "16. desember 2025",
    author: "Tommy Howden",
    category: "Prosjekt",
    body: [
      {
        type: "paragraph",
        text: "Å bygge 18 000 kvadratmeter infrastruktur tett på et operativt sykehus krever mer enn bare teknisk innsikt – det krever ekstrem presisjon. Mandag 8. desember åpnet «Passasjen Parkering», og for oss i Byggeledelse Norge markerer det en vellykket avslutning på et krevende oppdrag.",
      },
      {
        type: "paragraph",
        text: "Som byggherres prosjektleder har vi hatt ansvaret for å styre prosessene på vegne av Sunnmøre Parkering AS. Målet var klart: å levere et toppmoderne anlegg innenfor budsjett, kvalitetskrav og tidsrammen. Nå står resultatet klart med over 600 parkeringsplasser og tørrskodd adkomst for pasienter og ansatte.",
      },
      { type: "heading", text: "Sikker fremdrift i et sårbart miljø" },
      {
        type: "paragraph",
        text: "Når byggeplassen grenser til et sykehus i full drift og to andre byggeprosjekter, er HMS og logistikk de viktigste suksessfaktorene. Vi har lagt stor vekt på proaktiv risikostyring. Gjennom tett oppfølging av totalentreprenør Veidekke sikret vi at usikkerheter ble minimert, og at logistikken rundt tungtransport har gått smertefritt. Dette prosjektet har vist at presisjon i planleggingsfasen er nøkkelen til en trygg gjennomføring.",
      },
      { type: "heading", text: "Resultatet: Et løft for hele regionen" },
      {
        type: "paragraph",
        text: "«Passasjen Parkering» er mer enn et sted å parkere; det er et nytt knutepunkt som binder sammen kollektivtransport og sykehus.",
      },
      {
        type: "list",
        items: [
          "Kapasitet: Ca. 600 plasser fordelt på fem etasjer.",
          "Universell utforming: Heiser og gangbroer sikrer enkel tilkomst for alle.",
          "Kvalitet: Bruk av prefabrikkerte betongelementer og lavkarbonbetong sikrer både fremdrift og miljøprofil.",
        ],
      },
      { type: "heading", text: "Læring gjennom samspill" },
      {
        type: "paragraph",
        text: "Ingen komplekse prosjekter gjennomføres uten utfordringer. For oss har dette vært en reise preget av mye bra læring underveis. Vi har håndtert alt fra krevende værforhold til teknisk samhandling mot nærliggende byggeprosjekter. Løsningen har ligget i et godt samspill mellom oss, entreprenør og byggherre. Vi er takknemlige for tilliten vi har fått og stolte av jobben vi har vært en del av.",
      },
      {
        type: "paragraph",
        text: "Dette prosjektet har styrket vår kompetanse på byggeledelse i sensitive områder.",
      },
    ],
    metaTitle: "Byggeledelse av Passasjen Parkering – presisjon ved sykehuset",
    metaDescription:
      "Byggeledelse Norge var byggherres prosjektleder for Passasjen Parkering i Ålesund: 18 000 m² og over 600 plasser tett på et operativt sykehus, levert på tid og budsjett.",
    keywords: [
      "byggeledelse Ålesund",
      "Passasjen Parkering",
      "prosjektledelse bygg",
      "byggherres prosjektleder",
    ],
  },
  {
    slug: "byggelanskontroll",
    title: "Byggelånets tveeggede sverd: Slik sikrer du at prosjektet ikke blir et mareritt",
    excerpt:
      "Nesten 1 av 3 byggeprosjekter i Norge opplever forsinkelser eller budsjettoverskridelser. Slik holder byggelånskontrolløren prosjektet på skinnene.",
    cover: "/Fagbasen/byggelanskontroll-byggeldelse-byggela-n-1920w.webp",
    date: "2025-10-11",
    dateLabel: "11. oktober 2025",
    author: "Tommy Howden",
    category: "Byggherre",
    body: [
      {
        type: "paragraph",
        text: "Har du noen gang lurt på hvorfor banken er så involvert i byggeprosjektet ditt? Svaret er enkelt: Nesten 1 av 3 byggeprosjekter i Norge opplever forsinkelser eller budsjettoverskridelser. Dette er ikke bare en hodepine for deg som byggherre, men en betydelig risiko for banken som finansierer drømmen. Løsningen er en nøkkelperson du kanskje aldri har hørt om, men som er helt avgjørende for prosjektets suksess: byggelånskontrolløren.",
      },
      { type: "heading", text: "Hva er egentlig et byggelån?" },
      {
        type: "paragraph",
        text: "Et byggelån er ikke som et vanlig boliglån. Mens et boliglån utbetales som en engangssum for kjøp av en eksisterende bolig, er et byggelån en midlertidig kredittramme som banken stiller til rådighet for deg i byggeperioden. Pengene utbetales i takt med at byggeprosjektet skrider frem og fakturaer fra entreprenører og leverandører forfaller. Du betaler kun renter av det beløpet du til enhver tid har brukt av rammen, ikke av hele lånesummen fra dag én.",
      },
      {
        type: "paragraph",
        text: "Dette gir en fleksibel finansieringsløsning, men det kommer med en viktig forutsetning fra bankens side: De trenger en garanti for at pengene de låner ut faktisk blir omgjort til en ferdig bolig med den verdien som er forutsatt. Det er her byggelånskontrollen kommer inn i bildet.",
      },
      { type: "heading", text: "Fra søknad til innvilget kreditt" },
      {
        type: "paragraph",
        text: "Prosessen for å få et byggelån er mer omfattende enn for et vanlig lån. Banken vil kreve detaljert dokumentasjon for å vurdere risikoen og realismen i prosjektet ditt. Vær forberedt på å levere:",
      },
      {
        type: "list",
        items: [
          "Detaljert prosjektbeskrivelse: Hva skal bygges, og hvordan?",
          "Budsjett og finansieringsplan: En fullstendig oversikt over alle forventede kostnader, fra tomtekjøp til ferdigattest, med en buffer for uforutsette utgifter (vanligvis 10–15 % av total kostnad).",
          "Tegninger og godkjenninger: Arkitekttegninger og kopi av byggetillatelse fra kommunen.",
          "Kontrakter med ansvarlige foretak: Signerte avtaler med entreprenør, rørlegger, elektriker og andre sentrale aktører.",
          "Fremdriftsplan: En tidslinje som viser når de ulike fasene av byggeprosjektet skal starte og avsluttes.",
        ],
      },
      {
        type: "paragraph",
        text: "Banken bruker denne informasjonen til å vurdere om prosjektet er økonomisk levedyktig. Når lånet er innvilget, opprettes en byggelånskonto, og banken engasjerer en uavhengig byggelånskontrollør.",
      },
      { type: "heading", text: "Byggelånskontrolløren: Bankens øyne på byggeplassen" },
      {
        type: "paragraph",
        text: "Byggelånskontrolløren, ofte en takstmann eller bygningsingeniør, er en nøytral tredjepart som ansettes av banken, men som du som låntaker betaler for. Deres primære oppgave er å sikre at bankens penger brukes i henhold til planen og at verdien som skapes på eiendommen samsvarer med beløpet som er trukket fra byggelånet.",
      },
      {
        type: "paragraph",
        text: "Kontrolløren er ikke en byggeleder og har ikke ansvar for den daglige driften eller kvaliteten på arbeidet som utføres. Rollen er utelukkende knyttet til den økonomiske og fremdriftsmessige siden av prosjektet, og kan deles inn i tre hovedområder:",
      },
      {
        type: "list",
        items: [
          "Forhåndskontroll og rapportering: Før første spadetak gjennomgår kontrolløren hele prosjektgrunnlaget – budsjett, tegninger, kontrakter og fremdriftsplan – for å vurdere om det er realistisk. Er budsjettet urealistisk lavt eller fremdriftsplanen for optimistisk, flagges det i en oppstartsrapport til banken.",
          "Løpende kontroll av fremdrift og uttak: Kontrolløren utfører periodiske befaringer (ofte månedlig eller ved definerte milepæler) og attesterer at arbeidet en faktura gjelder faktisk er utført, før banken utbetaler penger. Dette forhindrer at du betaler for mye, for tidlig.",
          "Sluttkontroll og verdivurdering: Når boligen er ferdigstilt gjennomføres en sluttbefaring og en sluttrapport til banken. Kontrolløren fastsetter også en foreløpig verdivurdering – avgjørende for konvertering til boliglån.",
        ],
      },
      { type: "heading", text: "Fra byggelån til boliglån: den endelige overgangen" },
      {
        type: "paragraph",
        text: "Når prosjektet er fullført og kommunen har utstedt en ferdigattest, er det på tide å avslutte byggelånet. Byggelånet er en dyr låneform, med en rente som ofte ligger 1–2 prosentpoeng over et vanlig boliglån. Målet er derfor å ha det så kort tid som mulig. Ved konvertering gjøres hele det benyttede beløpet, inkludert påløpte renter, om til et ordinært, langsiktig boliglån basert på den endelige verdivurderingen av boligen.",
      },
      {
        type: "paragraph",
        text: "Denne overgangen markerer slutten på byggeprosessen og starten på ditt nye liv som eier av en splitter ny bolig. Takket være en strukturert prosess med en profesjonell byggelånskontrollør kan du være trygg på at veien dit har vært økonomisk forsvarlig og transparent – både for deg og for banken.",
      },
    ],
    metaTitle: "Byggelånskontroll – slik sikrer du byggeprosjektet ditt",
    metaDescription:
      "Hva er en byggelånskontrollør, og hvorfor er rollen avgjørende? Guide til byggelån, kontroll av fremdrift og uttak, og overgangen fra byggelån til boliglån.",
    keywords: [
      "byggelånskontroll",
      "byggelånskontrollør",
      "byggelån",
      "byggelån til boliglån",
    ],
  },
  {
    slug: "overtakelse-bustadoppforingsloven",
    title: "Håndboken til en feilfri boligovertakelse: Slik navigerer du bustadoppføringsloven",
    excerpt:
      "Alt du må vite om overtakelse av ny bolig etter bustadoppføringsloven – innkalling, befaring, protokoll og din rett til å holde tilbake penger.",
    cover: "/Fagbasen/overtakelse-av-bolig-protokoll-1920w.webp",
    date: "2025-09-18",
    dateLabel: "18. september 2025",
    author: "Tommy Howden",
    category: "Privat",
    body: [
      {
        type: "paragraph",
        text: "For mange er overtakelsen av en ny bolig kulminasjonen av en lang og kostbar prosess. Bustadoppføringsloven er ditt viktigste verneskjold, men kjenner du reglene godt nok til å bruke det? Denne artikkelen gir deg en komplett guide til overtakelsesprosessen, fra entreprenørens innkalling til din endelige signatur, slik at du kan tre inn i din nye bolig med trygghet og kontroll.",
      },
      { type: "heading", text: "Hva er en overtakelsesforretning?" },
      {
        type: "paragraph",
        text: "En overtakelsesforretning er det formelle møtet der du som forbruker offisielt overtar ansvaret og risikoen for din nye bolig fra utbygger eller entreprenør. Dette er ikke bare en hyggelig overrekkelse av nøkler; det er en kritisk juridisk handling regulert av bustadoppføringslova §§ 14 og 15. Målet er å gjennomføre en grundig befaring for å konstatere at arbeidet er utført i henhold til avtalen, og å avdekke eventuelle feil og mangler. Resultatet skal dokumenteres i en overtakelsesprotokoll – ditt sterkeste bevis dersom det skulle oppstå tvister i etterkant.",
      },
      { type: "heading", text: "Steg 1: Innkallingen – startskuddet" },
      {
        type: "paragraph",
        text: "Prosessen starter ikke når du står på dørstokken, men når du mottar en skriftlig innkalling fra entreprenøren. Ifølge bustadoppføringsloven skal entreprenøren innkalle deg med et rimelig varsel, som i praksis normalt betyr minst syv dager, og innkallingen skal oppgi et nøyaktig tidspunkt for overtakelsen.",
      },
      {
        type: "paragraph",
        text: "Entreprenøren har rett til å kalle inn til overtakelse selv om ikke absolutt alt arbeid er ferdigstilt – typisk mindre malerarbeid eller utvendig arbeid som må vente på grunn av årstiden. Dersom det gjenstående arbeidet er av en slik art at boligen ikke kan tas i bruk til sitt formål, har du rett til å nekte overtakelse. Aldri overta en bolig uten at det foreligger midlertidig brukstillatelse eller ferdigattest.",
      },
      {
        type: "callout",
        text: "Bustadoppføringsloven § 14: «Er arbeidet fullført, og forbrukaren har flytta inn i bustaden, er ytinga overteke sjølv om det ikkje er halde overtakingsforretning.»",
      },
      { type: "heading", text: "Steg 2: Selve overtakelsen – ditt våkneste øyeblikk" },
      {
        type: "paragraph",
        text: "Dette er dagen hvor du må være systematisk, grundig og gjerne litt pirkete. Det er nå du har best mulighet til å påpeke feil som entreprenøren plikter å rette opp. En god overtakelse starter med gode forberedelser. Sørg for å ha følgende klart:",
      },
      {
        type: "list",
        items: [
          "Kontrakt og leveransebeskrivelse: Dette er fasiten. Alt som står her skal være levert som avtalt.",
          "FDV: Har du mottatt FDV for alt i boligen, og er dette lagt inn i boligmappen?",
          "En fagkyndig medhjelper: Loven gir deg rett til å ha med deg en egen fagkyndig person, for eksempel en takstmann eller byggmester. Dette er en investering, ikke en kostnad – en ekspert ser detaljer du selv aldri ville oppdaget.",
          "Nødvendig utstyr: Ta med lommelykt, en liten gjenstand for å teste stikkontakter (f.eks. en mobillader), laservater, og dokumentér gjerne funn med bilder.",
        ],
      },
      { type: "heading", text: "Sjekklisten: Hva skal du se etter?" },
      {
        type: "paragraph",
        text: "Gå systematisk gjennom boligen rom for rom. Ikke la deg stresse av entreprenøren – dette er din rett og din tid.",
      },
      {
        type: "list",
        items: [
          "Overflater: Se etter hakk, riper eller ujevnheter på gulv, vegger og i tak. Sjekk for malingssøl, dårlig sparkling og skader på lister.",
          "Vinduer og dører: Åpne og lukk alle vinduer og dører. Går de lett? Er det skader på karmer eller glass? Sjekk låser og håndtak.",
          "Elektrisk anlegg: Test stikkontakter, lysbrytere og lyspunkter. Sjekk at det er nok kurser og at sikringsskapet er oversiktlig merket.",
          "VVS og rørarbeid: Se etter synlige lekkasjer under vasker og på bad. Sjekk at vannet renner unna i sluk, og kontroller korrekt fall på baderomsgulvet ved å la vannet renne litt.",
          "Ventilasjon: Sjekk at ventilasjonsanlegget fungerer og at avtrekk på kjøkken og bad suger luft.",
          "Utvendige forhold: Sjekk fasade, balkong, trapper og fellesarealer der det er relevant.",
        ],
      },
      {
        type: "callout",
        text: "Proff-tips: Få opplæring i tekniske installasjoner som vannskadesensor, smarthusløsninger og ventilasjonsanlegg.",
      },
      { type: "heading", text: "Steg 3: Overtakelsesprotokollen – det juridiske beviset" },
      {
        type: "paragraph",
        text: "Når befaringen er gjennomført, skal det skrives en overtakelsesprotokoll. Dette er det aller viktigste dokumentet fra dagen, og skal signeres av både deg og entreprenøren. Den bør som et minimum inneholde:",
      },
      {
        type: "list",
        items: [
          "Dato og tidspunkt for overtakelsen.",
          "Hvem som var til stede.",
          "En liste over alle feil og mangler som ble avdekket. Vær så spesifikk som mulig (f.eks. «Ripe i parkett ved dør til soverom 2, ca. 10 cm lang»).",
          "En frist for entreprenøren til å utbedre manglene.",
          "Eventuelle merknader eller uenigheter.",
          "Opplysning om eventuelt tilbakeholdt beløp i sluttoppgjøret.",
        ],
      },
      { type: "heading", text: "Din rett til å tilbakeholde penger" },
      {
        type: "paragraph",
        text: "Hvis det avdekkes mangler, gir bustadoppføringslova § 31 deg rett til å holde tilbake en del av kjøpesummen. Det tilbakeholdte beløpet skal stå i rimelig forhold til kostnadene ved å utbedre manglene, og er et svært effektivt pressmiddel for å sikre at entreprenøren faktisk retter opp feilene. Beløpet bør spesifiseres i protokollen.",
      },
      {
        type: "callout",
        text: "Viktig: Ikke signer på en protokoll hvor det står «ingen mangler funnet» dersom du har oppdaget feil.",
      },
      { type: "heading", text: "Etter overtakelsen: Hva nå?" },
      {
        type: "paragraph",
        text: "Når protokollen er signert, er boligen din. Entreprenøren skal nå utbedre manglene innen den avtalte fristen. Når arbeidet er utført, bør det gjennomføres en ny, felles befaring for å bekrefte at alt er i orden før du utbetaler et eventuelt tilbakeholdt beløp.",
      },
      {
        type: "paragraph",
        text: "Husk at du også har reklamasjonsrettigheter etter overtakelsen. Du må reklamere «innen rimelig tid» etter at du oppdaget eller burde ha oppdaget en mangel. Den absolutte reklamasjonsfristen etter bustadoppføringsloven er fem år. Ved å sette deg inn i reglene og følge en strukturert prosess sikrer du ikke bare dine juridiske rettigheter, men også at gleden over din nye bolig blir langvarig og fri for kostbare overraskelser.",
      },
    ],
    metaTitle: "Overtakelse av bolig – guide til bustadoppføringsloven",
    metaDescription:
      "Komplett guide til overtakelse av ny bolig etter bustadoppføringsloven: innkalling, befaring, sjekkliste, overtakelsesprotokoll og din rett til å holde tilbake penger.",
    keywords: [
      "overtakelse ny bolig",
      "bustadoppføringsloven",
      "overtakelsesprotokoll",
      "overtakelsesbefaring",
      "tilbakeholde penger mangler",
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
