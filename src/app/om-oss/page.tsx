import type { Metadata } from "next";
import Image from "next/image";
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
          <p className="mt-4 text-sm text-graphite-500">{site.approvalText}</p>
        </Container>
      </section>

      <section className="border-t border-graphite-200 bg-mist py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_1fr] lg:gap-16">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-copper-500/40" aria-hidden />
              <Image
                src={site.contactPerson.photo}
                alt={`${site.contactPerson.name}, ${site.contactPerson.role} i ${site.legalName}`}
                width={960}
                height={960}
                className="relative aspect-square w-full max-w-md object-cover grayscale-[15%] rounded-sm"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">
                {site.contactPerson.role}
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
                {site.contactPerson.name}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-graphite-700">
                Tommy leder Byggeledelse Norge og har mange års erfaring fra byggfag,
                prosjektledelse og uavhengig kontroll. Han og teamet står på boligeierens
                side når noe er galt, og er en trygg faglig ressurs for byggherrer og
                advokater som trenger uavhengig byggteknisk kompetanse.
              </p>
              <div className="mt-6 space-y-1 text-graphite-800">
                <a href={site.contactPerson.phoneHref} className="block hover:text-copper-700">
                  {site.contactPerson.phone}
                </a>
                <a
                  href={`mailto:${site.contactPerson.email}`}
                  className="block hover:text-copper-700"
                >
                  {site.contactPerson.email}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                {site.certifications.map((cert) => (
                  <div key={cert.label} className="flex items-center gap-3">
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      width={128}
                      height={128}
                      className="h-14 w-14 object-contain"
                    />
                    <span className="text-sm font-semibold text-graphite-800">{cert.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
