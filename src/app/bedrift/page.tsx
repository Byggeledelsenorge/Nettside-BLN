import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaSection } from "@/components/sections/CtaSection";
import { LawyerSection } from "@/components/sections/LawyerSection";
import { businessServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Byggeledelse og prosjektoppfølging for bedrifter",
  description:
    "Byggeledelse, prosjektledelse, byggherrebistand, HMS-koordinering (KU/KP), kvalitetssikring og oppfølging av entrepriser for byggherrer og virksomheter – og uavhengig byggfaglig sakkyndig for advokater i boligtvister. Byggeledelse Norge.",
  path: "/bedrift",
  keywords: [
    "byggeledelse Ålesund",
    "prosjektledelse bygg",
    "byggherrebistand",
    "HMS-koordinator",
    "oppfølging entrepriser",
    "byggfaglig sakkyndig advokat",
    "sakkyndig boligtvist",
  ],
});

export default function BedriftPage() {
  return (
    <>
      <PageHero
        kicker="For bedrifter og byggherrer"
        title="Faglig styring og oppfølging gjennom hele prosjektet."
        intro="Vi bistår byggherrer og virksomheter med å holde kontroll på kvalitet, fremdrift og økonomi – fra anskaffelse og kontrakt til overtakelse. Uavhengig fagkompetanse, uten andre agendaer enn prosjektet ditt."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Bedrift", href: "/bedrift" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {businessServices.map((service) => (
              <Link
                key={service.slug}
                href={`/tjenester/${service.slug}`}
                className="group flex flex-col border border-graphite-200 bg-white p-8 rounded-sm transition-colors hover:border-graphite-900"
              >
                <h2 className="text-xl font-semibold tracking-tight text-graphite-900">
                  {service.shortTitle}
                </h2>
                <p className="mt-3 leading-relaxed text-graphite-600">{service.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-copper-700">
                  Les mer
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <LawyerSection />

      <CtaSection />
    </>
  );
}
