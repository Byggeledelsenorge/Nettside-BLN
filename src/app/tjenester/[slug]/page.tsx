import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  getService,
  getServiceSlugs,
  services,
  type Service,
} from "@/content/services";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/tjenester/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const audienceLabel = service.audience === "privat" ? "Private" : "Bedrift";
  const audienceHref = service.audience === "privat" ? "/private" : "/bedrift";

  const related = services
    .filter((s) => s.audience === service.audience && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />

      <PageHero
        kicker={service.tagline}
        title={service.title}
        intro={service.intro}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: audienceLabel, href: audienceHref },
          { label: service.shortTitle, href: `/tjenester/${service.slug}` },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-graphite-900">
                Hva du får
              </h2>
              <div className="mt-8 flex flex-col gap-px overflow-hidden border border-graphite-200 bg-graphite-200">
                {service.deliverables.map((d) => (
                  <div key={d.heading} className="bg-bone p-7">
                    <h3 className="flex items-start gap-3 text-lg font-semibold text-graphite-900">
                      <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper-500" />
                      {d.heading}
                    </h3>
                    <p className="mt-3 leading-relaxed text-graphite-600">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="border border-graphite-900 bg-graphite-900 p-7 text-bone rounded-sm">
                <h2 className="text-lg font-semibold tracking-tight">
                  Trenger du byggfaglig bistand?
                </h2>
                <p className="mt-3 text-graphite-300">
                  Fortell oss kort om saken, så gir vi deg en uforpliktende vurdering.
                </p>
                <Button href="/kontakt" variant="accent" size="md" className="mt-5 w-full">
                  Ta kontakt
                </Button>
              </div>

              <div className="border border-graphite-200 bg-white p-7 rounded-sm">
                <h2 className="text-lg font-semibold tracking-tight text-graphite-900">
                  Aktuelt når
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.whenRelevant.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-graphite-700">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-graphite-200 bg-mist py-20 sm:py-24">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-graphite-900">
              Andre tjenester for {audienceLabel.toLowerCase()}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r: Service) => (
                <Link
                  key={r.slug}
                  href={`/tjenester/${r.slug}`}
                  className="group flex flex-col border border-graphite-200 bg-white p-7 rounded-sm transition-colors hover:border-graphite-900"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-graphite-900">
                    {r.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
