import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { privateCases, privateCasesTip } from "@/content/privateCases";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Slik har vi bistått andre – private boligeiere",
  description:
    "Eksempler på saker Byggeledelse Norge har bistått private boligeiere med – reklamasjon, overtakelse og byggfaglig dokumentasjon i Ålesund og på Sunnmøre.",
  path: "/slik-har-vi-bistatt-andre",
  keywords: [
    "bistand boligeiere",
    "reklamasjon utbygger",
    "reklamasjon megler",
    "overtakelse ny bolig",
    "byggfaglig dokumentasjon",
  ],
});

export default function SlikHarViBistattAndrePage() {
  return (
    <>
      <PageHero
        kicker="For private boligeiere"
        title="Slik har vi bistått andre."
        intro="Her er noen eksempler på saker vi har bistått med."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Private", href: "/private" },
          { label: "Slik har vi bistått andre", href: "/slik-har-vi-bistatt-andre" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container size="narrow">
          <div className="flex flex-col gap-6">
            {privateCases.map((item) => (
              <article
                key={item.slug}
                className="border border-graphite-200 bg-white p-7 rounded-sm sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-copper-700">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-copper-50 text-copper-700">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 13.5V6.2L8 2.5l5.5 3.7v7.3H9.5V9H6.5v4.5H2.5Z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item.category}</span>
                  <span aria-hidden className="h-px w-4 bg-graphite-300" />
                  <span className="normal-case tracking-normal text-graphite-500">
                    {item.location}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold tracking-tight text-graphite-900 sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-4 leading-relaxed text-graphite-700">{item.body}</p>

                <div className="mt-6 flex items-start gap-3 border-t border-graphite-100 pt-5">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-graphite-800">
                    {item.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 border-l-2 border-copper-500 bg-mist px-6 py-5 text-base leading-relaxed text-graphite-800">
            {privateCasesTip}
          </p>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
