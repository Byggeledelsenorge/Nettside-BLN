import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt – trenger du byggfaglig bistand?",
  description:
    "Ta kontakt med Byggeledelse Norge for uavhengig byggfaglig bistand. Beskriv situasjonen, så gir vi deg en ærlig vurdering av hvordan vi kan hjelpe.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="Trenger du byggfaglig bistand?"
        intro="Fortell oss kort om situasjonen din, så tar vi kontakt med en ærlig vurdering av hvordan vi kan hjelpe. Det koster ingenting å ta den første samtalen."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-copper-700">
                  Ring oss
                </h2>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-2xl font-semibold tracking-tight text-graphite-900 hover:text-copper-700"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-copper-700">
                  Send e-post
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-lg font-medium text-graphite-900 hover:text-copper-700"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-copper-700">
                  Dekningsområde
                </h2>
                <p className="mt-2 text-graphite-700">{site.serviceArea}</p>
              </div>
              <div className="border-t border-graphite-200 pt-6 text-sm text-graphite-500">
                <p>{site.legalName}</p>
                <p>Org.nr {site.orgNumber}</p>
              </div>
            </div>

            <div className="border border-graphite-200 bg-white p-7 rounded-sm sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
