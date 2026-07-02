import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Process } from "@/components/sections/Process";
import { privateServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Byggfaglig bistand for private boligeiere",
  description:
    "Uavhengig byggfaglig hjelp til boligeiere: reklamasjon mot håndverker, byggfeil og mangler, uavhengig kontroll, overtakelse og rådgivning ved nybygg. Ålesund og Sunnmøre.",
  path: "/private",
  keywords: [
    "byggfaglig bistand privat",
    "reklamasjon håndverker",
    "byggfeil hjelp",
    "uavhengig kontroll bolig",
    "overtakelse ny bolig",
  ],
});

export default function PrivatePage() {
  return (
    <>
      <PageHero
        kicker="For private boligeiere"
        title="Du trenger ikke stå alene med problemet på boligen."
        intro="Enten du står i en konflikt, har oppdaget feil eller bare vil være trygg på at noe er gjort riktig – vi er den uavhengige fagpersonen som hjelper deg videre. Her er tjenestene våre for private."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Private", href: "/private" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {privateServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <CtaSection />
    </>
  );
}
