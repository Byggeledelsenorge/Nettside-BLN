import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { whyUs } from "@/content/site";
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
            <p>
              De fleste som tar kontakt med oss står i en vanskelig situasjon. Et
              byggeprosjekt har gått galt, en håndverker leverer ikke det som var avtalt,
              eller en bolig viser feil som ingen vil ta ansvar for. Da trenger man ikke en
              part til – man trenger noen som er på sin side, og som kan faget.
            </p>
            <p>
              Vår rolle er enkel å beskrive: vi vurderer det byggfaglige nøkternt og
              uavhengig, og gir deg dokumentasjon og råd du kan stole på. Vi selger ikke
              utbedring, og vi har ingen binding til entreprenørene vi vurderer. Det er
              nettopp derfor vurderingene våre er verdt noe.
            </p>
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-3">
            <div className="bg-bone p-7">
              <dt className="text-sm font-medium text-graphite-500">Erfaring</dt>
              <dd className="mt-1 text-2xl font-semibold text-graphite-900">
                [VERIFISER] år
              </dd>
            </div>
            <div className="bg-bone p-7">
              <dt className="text-sm font-medium text-graphite-500">Gjennomførte oppdrag</dt>
              <dd className="mt-1 text-2xl font-semibold text-graphite-900">
                [VERIFISER]+
              </dd>
            </div>
            <div className="bg-bone p-7">
              <dt className="text-sm font-medium text-graphite-500">Sertifiseringer</dt>
              <dd className="mt-1 text-2xl font-semibold text-graphite-900">
                [VERIFISER]
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-graphite-500">
            Faktaopplysningene over fylles inn og bekreftes før publisering.
          </p>
        </Container>
      </section>

      <section className="border-t border-graphite-200 bg-mist py-20 sm:py-28">
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
