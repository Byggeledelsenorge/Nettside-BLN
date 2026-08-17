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
        intro="Fortell oss kort om situasjonen din, så tar vi kontakt med en ærlig vurdering av hvordan vi kan hjelpe. Vi tilbyr alltid en uforpliktende samtale før oppstart."
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
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg font-medium text-graphite-900 hover:text-copper-700"
                >
                  {site.email}
                </a>
              </div>

              <div className="border border-graphite-200 bg-white p-6 rounded-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-copper-700">
                  {site.contactPerson.role}
                </h2>
                <p className="mt-2 text-lg font-semibold text-graphite-900">
                  {site.contactPerson.name}
                </p>
                <a
                  href={site.contactPerson.phoneHref}
                  className="mt-2 block text-graphite-800 hover:text-copper-700"
                >
                  {site.contactPerson.phone}
                </a>
                <a
                  href={`mailto:${site.contactPerson.email}`}
                  className="block text-graphite-800 hover:text-copper-700"
                >
                  {site.contactPerson.email}
                </a>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-copper-700">
                  Besøk oss
                </h2>
                <p className="mt-2 text-graphite-800">{site.address.street}</p>
                <p className="text-graphite-800">
                  {site.address.postalCode} {site.address.city}
                </p>
                <p className="mt-2 text-sm text-graphite-500">{site.address.note}</p>
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
