import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/seo";

type PriceItem = {
  title: string;
  priceLabel: string;
  details: ReactNode;
};

export const metadata: Metadata = buildMetadata({
  title: "Priser – byggfaglig bistand",
  description:
    "Veiledende fra-priser på byggfaglige tjenester for boligeiere – inkludert merverdiavgift. Pris avhenger av sakens kompleksitet og behovet for befaring.",
  path: "/priser",
  keywords: [
    "byggfaglig bistand priser",
    "fra-pris inkl mva",
    "reklamasjon byggfeil",
    "overtakelse ettårsbefaring",
    "uavhengig kontroll",
    "legalisering bruksendring",
  ],
});

export default function PriserPage() {
  const items: PriceItem[] = [
    {
      title: "Innledende byggfaglig saksvurdering",
      priceLabel: "Fra 4 750 kr inkl. mva",
      details: (
        <div className="space-y-4">
          <p className="text-graphite-700 leading-relaxed">
            Vi gjennomgår tilgjengelige bilder, relevant korrespondanse og sentrale dokumenter. Du får
            en innledende byggfaglig vurdering og en anbefaling om veien videre.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Inntil én time dokumentgjennomgang</li>
            <li>Gjennomgang av bilder og korrespondanse</li>
            <li>Kort telefon- eller videomøte</li>
            <li>Skriftlig oppsummering av anbefalt videre prosess</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Befaring av byggfeil eller mangel",
      priceLabel: "Fra 8 900 kr inkl. mva",
      details: (
        <div className="space-y-4">
          <p className="text-graphite-700 leading-relaxed">
            Vi undersøker et konkret problem i boligen og gir en vurdering av sannsynlig årsak,
            alvorlighetsgrad og behovet for videre undersøkelser, med et kort byggteknisk notat.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Forberedelse før befaring</li>
            <li>Befaring i inntil to timer</li>
            <li>Enkel fotodokumentasjon</li>
            <li>Muntlig gjennomgang av funnene</li>
            <li>Kort byggteknisk notat</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Reklamasjonsrapport",
      priceLabel: "Fra 13 750 kr inkl. mva",
      details: (
        <div className="space-y-4">
          <p className="text-graphite-700 leading-relaxed">
            En mer omfattende rapport for saker der forholdet må dokumenteres overfor entreprenør,
            selger, forsikringsselskap eller juridisk rådgiver.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Beskrivelse av observerte feil og avvik</li>
            <li>Fotodokumentasjon</li>
            <li>Vurdering av sannsynlig årsak</li>
            <li>Vurdering opp mot tilgjengelig dokumentasjon</li>
            <li>Henvisning til relevante krav og faglige anbefalinger</li>
            <li>Forslag til videre undersøkelser eller utbedring</li>
          </ul>
          <p className="text-sm text-graphite-500">
            Endelig pris avhenger av antall problemstillinger, dokumentmengde og rapportens omfang.
          </p>
        </div>
      ),
    },
    {
      title: "Overtakelse av leilighet",
      priceLabel: "Fra 8 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            En overtakelse kan gjøre det enklere å oppdage feil og mangler før boligen tas i bruk.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Enkel gjennomgang av relevante dokumenter</li>
            <li>Deltakelse på overtakelsen i inntil to timer</li>
            <li>Kontroll av synlige og tilgjengelige bygningsdeler</li>
            <li>Registrering av observerte feil og mangler</li>
            <li>Bistand med formuleringer til overtakelsesprotokollen</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Overtakelse av rekkehus eller enebolig",
      priceLabel: "Fra 10 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Mer omfattende bistand ved overtakelse når boligen er større eller mer kompleks.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Enkel dokumentgjennomgang</li>
            <li>Deltakelse på overtakelsen i inntil tre timer</li>
            <li>Kontroll av synlige og tilgjengelige bygningsdeler</li>
            <li>Registrering av observerte feil og mangler</li>
            <li>Bistand med formuleringer til overtakelsesprotokollen</li>
          </ul>
          <p className="text-sm text-graphite-500">Pris avhenger blant annet av boligens størrelse og kompleksitet.</p>
        </div>
      ),
    },
    {
      title: "Forhåndsbefaring før overtakelse",
      priceLabel: "Fra 7 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi gjennomgår boligen før den formelle overtakelsen og hjelper deg med å identifisere forhold som bør tas opp med entreprenøren.
          </p>
        </div>
      ),
    },
    {
      title: "Ettårsbefaring",
      priceLabel: "Fra 7 900 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi går gjennom boligen før ettårsbefaringen og hjelper deg å registrere feil og mangler som har vist seg etter innflytting.
          </p>
          <p className="text-sm text-graphite-500">For enebolig og større rekkehus er veiledende pris fra 9 750 kr.</p>
        </div>
      ),
    },
    {
      title: "Skriftlig rapport etter overtakelse eller ettårsbefaring",
      priceLabel: "Fra 3 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            En kort skriftlig rapport kan bestilles dersom det er behov for mer dokumentasjon enn det som fremgår av overtakelsesprotokollen eller mangellisten.
          </p>
        </div>
      ),
    },
    {
      title: "Uavhengig kontroll av våtrom",
      priceLabel: "Fra 5 000 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Prisen gjelder kontroll av opptil fem våtrom i samme hus, så lenge alle kan kontrolleres samtidig.
            Oppdraget kan omfatte:
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Gjennomgang av relevant dokumentasjon</li>
            <li>Kontroll av prosjektering og utførelse etter gjeldende kontrollomfang</li>
            <li>Nødvendige kontrollbesøk</li>
            <li>Erklæring av ansvarsrett</li>
          </ul>
          <p className="text-sm text-graphite-500">
            Ekstra besøk, mangelfull dokumentasjon og oppfølging av avvik kan gi tillegg.
          </p>
        </div>
      ),
    },
    {
      title: "Uavhengig kontroll av lufttetthet",
      priceLabel: "Fra 2 000 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Prisen avhenger av boligens størrelse og tilgjengelig dokumentasjon.
          </p>
        </div>
      ),
    },
    {
      title: "Tetthetsmåling med rapport",
      priceLabel: "Fra 7 900 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi gjennomfører trykktesting av boligen og dokumenterer måleresultatet i en skriftlig rapport.
          </p>
          <p className="text-sm text-graphite-500">
            Prisen gjelder en ordinær bolig der bygget er klargjort for måling. Det er forutsatt maks to timer for oppdraget.
          </p>
        </div>
      ),
    },
    {
      title: "Oppstartsbefaring og byggfaglig rådgivning",
      priceLabel: "Fra 9 900 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi går gjennom boligen, planene og de viktigste risikoforholdene før prosjektet starter.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Befaring i inntil to timer</li>
            <li>Gjennomgang av planlagte tiltak</li>
            <li>Vurdering av sentrale byggfaglige forhold</li>
            <li>Overordnet vurdering av søknadsbehov</li>
            <li>Kort skriftlig oppsummering</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Gjennomgang av tilbud og kontrakter",
      priceLabel: "Fra 7 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi gjennomgår tilbud, beskrivelser og kontraktsutkast og hjelper deg med å avdekke uklarheter før avtalen signeres.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Kontroll av omfang og forbehold</li>
            <li>Vurdering av betalingsplan</li>
            <li>Gjennomgang av endringsrutiner</li>
            <li>Vurdering av fremdrift og dokumentasjonskrav</li>
            <li>Sammenligning av entreprenørtilbud</li>
          </ul>
          <p className="text-sm text-graphite-500">
            Vi gir byggfaglige og praktiske vurderinger. Juridiske spørsmål håndteres ved behov av advokat.
          </p>
        </div>
      ),
    },
    {
      title: "Plan for rehabiliteringsprosjekt",
      priceLabel: "Fra 14 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi hjelper deg med å strukturere prosjektet før du innhenter tilbud eller inngår avtale med entreprenør.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Beskrivelse av planlagte tiltak</li>
            <li>Anbefalt rekkefølge på arbeidene</li>
            <li>Identifisering av kritiske forhold</li>
            <li>Overordnet fremdriftsplan</li>
            <li>Forslag til videre gjennomføring</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Forprosjekt for rehabilitering",
      priceLabel: "Fra 24 900 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Et forprosjekt gir et bedre beslutningsgrunnlag før større arbeider settes i gang.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Behovskartlegging</li>
            <li>Befaring og tilstandsvurdering av relevante områder</li>
            <li>Overordnet tiltaksbeskrivelse</li>
            <li>Vurdering av søknadsplikt</li>
            <li>Forslag til entreprise- og kontraktsform</li>
            <li>Overordnet kostnads- og fremdriftsvurdering</li>
            <li>Grunnlag for innhenting av tilbud</li>
          </ul>
          <p className="text-sm text-graphite-500">
            Tegninger, detaljprosjektering, beregninger og søknadsarbeid er ikke inkludert med mindre dette avtales.
          </p>
        </div>
      ),
    },
    {
      title: "Kontrollbefaring underveis",
      priceLabel: "Fra 1 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi kontrollerer utvalgte arbeider underveis i prosjektet og hjelper deg å oppdage feil før arbeidene bygges inn eller ferdigstilles.
          </p>
          <p className="text-sm text-graphite-500">Skriftlig notat kan bestilles i tillegg.</p>
        </div>
      ),
    },
    {
      title: "Innledende vurdering av legalisering eller bruksendring",
      priceLabel: "Fra 9 900 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi undersøker tilgjengelig byggesaksinformasjon og vurderer om dagens bruk samsvarer med godkjente tegninger og vedtak.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Innhenting eller gjennomgang av tilgjengelige byggesaksdokumenter</li>
            <li>Gjennomgang av godkjente tegninger</li>
            <li>Innledende vurdering av dagens bruk</li>
            <li>Anbefaling om videre prosess</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Befaring og vurdering av eksisterende forhold",
      priceLabel: "Fra 9 750 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi befarer boligen og vurderer relevante forhold knyttet til blant annet planløsning, rømningsveier, dagslys, brann, ventilasjon og romhøyde.
          </p>
          <p className="text-sm text-graphite-500">
            Skriftlig notat eller videre utredning avtales etter behov.
          </p>
        </div>
      ),
    },
    {
      title: "Plan for legalisering eller bruksendring",
      priceLabel: "Fra 14 900 kr inkl. mva",
      details: (
        <div className="space-y-3">
          <p className="text-graphite-700 leading-relaxed">
            Vi kartlegger hvilke avklaringer, tiltak og fagområder som normalt må håndteres for å kunne gå videre med en søknad.
          </p>
          <ul className="flex flex-col gap-2 text-graphite-700">
            <li>Gjennomgang av godkjent situasjon</li>
            <li>Befaring</li>
            <li>Identifisering av relevante avvik</li>
            <li>Overordnet vurdering av nødvendige tiltak</li>
            <li>Anbefaling om videre søknadsprosess</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHero
        kicker="Priser"
        title="Hva koster byggfaglig bistand?"
        intro="Her finner du veiledende fra-priser på våre vanligste tjenester for boligeiere. Prisen avhenger blant annet av boligens størrelse, sakens kompleksitet, dokumentmengde og behovet for befaring og rapportering."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Priser", href: "/priser" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container size="narrow">
          <div className="space-y-6 text-graphite-700">
            <p>
              Du får alltid en skriftlig prisavklaring eller et kostnadsestimat før arbeidet starter.
            </p>
            <p>Alle priser er inkludert merverdiavgift.</p>
          </div>

          <div className="mt-10 space-y-3">
            {items.map((item) => (
              <details
                key={item.title}
                name="priser"
                className="rounded-sm border border-graphite-200 bg-white"
              >
                <summary className="list-none cursor-pointer px-6 py-5 [&::-webkit-details-marker]:hidden flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-graphite-900">{item.title}</h3>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold text-copper-700">{item.priceLabel}</p>
                  </div>
                </summary>
                <div className="px-6 pb-6">{item.details}</div>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-graphite-200 bg-white p-6 text-graphite-700">
            <p className="font-semibold text-graphite-900">Dette kan komme i tillegg</p>
            <p className="mt-2 text-sm leading-relaxed">
              Fra-prisene gjelder oppdrag med normalt omfang i Ålesund og nærliggende områder.
            </p>
            <ul className="mt-5 border-l-2 border-copper-500 bg-mist px-5 py-4 flex flex-col gap-2 text-sm leading-relaxed text-graphite-800">
              <li>Reisetid og kjøregodtgjørelse</li>
              <li>Ekstra befaringer eller kontrollbesøk</li>
              <li>Omfattende dokumentgjennomgang</li>
              <li>Åpning av konstruksjoner</li>
              <li>Fuktmålinger, prøvetaking og laboratorieanalyser</li>
              <li>Bruk av eksterne fagpersoner</li>
              <li>Tegninger og prosjektering</li>
              <li>Kommunale og offentlige gebyrer</li>
            </ul>
            <p className="mt-4 text-sm text-graphite-500">
              Vi starter ikke tilleggsarbeid uten at dette er avklart med deg.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

