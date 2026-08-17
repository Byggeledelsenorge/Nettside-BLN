import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { site, whyUs } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Om oss – uavhengig byggfaglig rådgiver",
  description:
    "Byggeledelse Norge er en uavhengig byggfaglig rådgiver for boligeiere og bedrifter. Les om hvordan vi jobber og hva uavhengighet betyr i praksis.",
  path: "/om-oss",
});

export default function OmOssPage() {
  return (
    <>
      <PageHero
        kicker="Om oss"
        title="Den uavhengige fagpersonen du ringer."
        intro="Byggeledelse Norge er en byggfaglig rådgiver – ikke et takstfirma og ikke en entreprenør. Vi er på din side når noe er galt, og en trygg fagressurs når noe skal bygges riktig."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Om oss", href: "/om-oss" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container size="narrow">
          <div className="space-y-6 text-lg leading-relaxed text-graphite-700">
            <h2 className="text-2xl font-semibold tracking-tight text-graphite-900">
              Byggfaglig bistand når det er viktig å ha oversikt
            </h2>
            <p>
              Byggeledelse Norge har bistått kunder i bygg- og eiendomsprosjekter siden
              2004. I dag hjelper vi private, sameier, advokater og profesjonelle aktører
              før, under og etter bygging og rehabilitering.
            </p>
            <p>
              Vi bidrar når tilbud skal innhentes og vurderes, kontrakter skal gjennomgås,
              et prosjekt skal følges opp eller forhold må avklares ved overtakelse,
              reklamasjon og konflikt. Målet er det samme i alle saker: å gi kunden et
              ryddig, faglig og praktisk grunnlag for gode beslutninger.
            </p>
            <p>
              Vi kombinerer erfaring fra byggeledelse, prosjektoppfølging, kontroll, takst
              og byggfaglige undersøkelser. Det gjør at vi kan se saken både fra prosjektets
              start og når noe senere ikke er utført som avtalt.
            </p>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight text-graphite-900">
              Uavhengighet i praksis
            </h2>
            <p>
              En byggesak kan raskt bli krevende når det oppstår uenighet om kvalitet,
              ansvar, kostnad eller hva som faktisk er avtalt. Da er det viktig at den
              byggfaglige vurderingen er tydelig, etterprøvbar og uavhengig.
            </p>
            <p>
              Vi vurderer alltid habilitet før vi tar på oss et oppdrag. Vi arbeider ikke
              for begge sider i samme sak, og er åpne om forhold som kan være relevante for
              kundens vurdering av vår rolle.
            </p>
            <p>
              Vår oppgave er ikke å skape konflikt. Den er å undersøke, dokumentere og
              forklare byggfaglige forhold på en måte som gir kunden et bedre grunnlag for å
              komme videre.
            </p>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight text-graphite-900">
              Fra første valg til ferdig sak
            </h2>
            <p>
              Noen kontakter oss før arbeidet starter. Andre trenger hjelp mens prosjektet
              pågår, ved overtakelse eller når det har oppstått feil, mangler eller
              uenighet.
            </p>
            <p>
              Vi kan bidra gjennom hele løpet – fra vurdering av tilbud og kontrakter, til
              prosjektoppfølging, kontroll, befaring, dokumentasjon og faglig bistand i
              reklamasjons- eller tvistesaker.
            </p>
            <p>
              Arbeidet tilpasses alltid den konkrete situasjonen. Noen trenger en avgrenset
              befaring og et klart råd. Andre trenger en grundigere teknisk vurdering,
              dokumentgjennomgang eller bistand over tid.
            </p>
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-3">
            <div className="bg-bone p-7">
              <dt className="text-sm font-medium text-graphite-500">Godkjenning</dt>
              <dd className="mt-1 text-2xl font-semibold text-graphite-900">
                Sentralt godkjent
              </dd>
            </div>
            <div className="bg-bone p-7">
              <dt className="text-sm font-medium text-graphite-500">Uavhengig kontroll</dt>
              <dd className="mt-1 text-2xl font-semibold text-graphite-900">
                Tiltaksklasse 1
              </dd>
            </div>
            <div className="bg-bone p-7">
              <dt className="text-sm font-medium text-graphite-500">Lokalt forankret</dt>
              <dd className="mt-1 text-2xl font-semibold text-graphite-900">
                {site.serviceArea}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="border-t border-graphite-200 bg-bone py-20 sm:py-28">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-graphite-900">
            Verdiene som styrer arbeidet vårt
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-2">
            {whyUs.items.map((item) => (
              <div key={item.title} className="bg-bone p-7">
                <h3 className="text-lg font-semibold tracking-tight text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
