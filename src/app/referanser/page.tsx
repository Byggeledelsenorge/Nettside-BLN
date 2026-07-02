import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { references } from "@/content/references";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Referanseprosjekter – byggeledelse og byggherrebistand i Ålesund",
  description:
    "Et utvalg prosjekter Byggeledelse Norge har bidratt til som byggeleder, byggherreombud og rådgiver – for kommuner, utbyggere, bedrifter og private i Ålesund og på Sunnmøre.",
  path: "/referanser",
  keywords: [
    "referanseprosjekter byggeledelse",
    "byggeleder Ålesund",
    "byggherreombud",
    "byggeledelse Sunnmøre",
  ],
});

export default function ReferanserPage() {
  return (
    <>
      <PageHero
        kicker="Referanseprosjekter"
        title="Prosjekter vi er stolte av."
        intro="Fra kommunale omsorgsbygg og store leilighetsprosjekter til private boliger. Her er et utvalg oppdrag der vi har vært byggeleder, byggherreombud eller rådgiver på oppdragsgiverens side."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Referanser", href: "/referanser" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {references.map((ref, index) => (
              <article
                key={ref.slug}
                className="flex flex-col overflow-hidden border border-graphite-200 bg-white rounded-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-100">
                  <Image
                    src={ref.cover}
                    alt={ref.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 92vw"
                    priority={index < 2}
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center bg-graphite-950/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-bone backdrop-blur-sm rounded-sm">
                    {ref.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-copper-700">
                    <span>{ref.role}</span>
                    <span aria-hidden className="h-px w-4 bg-graphite-300" />
                    <span className="normal-case tracking-normal text-graphite-500">
                      {ref.location}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-graphite-900">
                    {ref.title}
                  </h2>

                  {ref.testimonial ? (
                    <blockquote className="mt-4 border-l-2 border-copper-500 pl-5">
                      <div className="flex flex-col gap-3">
                        {ref.body.map((p, i) => (
                          <p key={i} className="leading-relaxed text-graphite-700 italic">
                            {p}
                          </p>
                        ))}
                      </div>
                      <footer className="mt-4 text-sm font-medium not-italic text-graphite-500">
                        — Fornøyd privatkunde
                      </footer>
                    </blockquote>
                  ) : (
                    <div className="mt-4 flex flex-col gap-3">
                      {ref.body.map((p, i) => (
                        <p key={i} className="leading-relaxed text-graphite-600">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
