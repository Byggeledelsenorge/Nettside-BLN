import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/ui/PostCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { postsByDate } from "@/content/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fagbase – kunnskap om bygg, bolig og byggeledelse",
  description:
    "Artikler og guider fra Byggeledelse Norge om overtakelse, reklamasjon, byggelån, energirådgivning og byggeledelse – skrevet av en uavhengig byggfaglig rådgiver i Ålesund.",
  path: "/fagbase",
  keywords: [
    "byggfaglig kunnskap",
    "overtakelse bolig guide",
    "byggelånskontroll",
    "energirådgivning Ålesund",
  ],
});

export default function FagbasePage() {
  const [featured, ...rest] = postsByDate;

  return (
    <>
      <PageHero
        kicker="Fagbase"
        title="Kunnskap om bygg, bolig og dine rettigheter."
        intro="Praktiske guider og innsikt fra en uavhengig byggfaglig rådgiver. Vi deler det vi kan om overtakelse, reklamasjon, byggeledelse og hvordan du unngår kostbare feil."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Fagbase", href: "/fagbase" },
        ]}
      />

      <section className="bg-bone py-20 sm:py-28">
        <Container>
          {/* Fremhevet, nyeste artikkel */}
          <Link
            href={`/fagbase/${featured.slug}`}
            className="group grid overflow-hidden border border-graphite-200 bg-white rounded-sm transition-colors duration-150 hover:border-graphite-900 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-100 lg:aspect-auto">
              <Image
                src={featured.cover}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 92vw"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-copper-700">
                <span>Nyeste</span>
                <span aria-hidden className="h-px w-4 bg-graphite-300" />
                <span>{featured.category}</span>
                <span aria-hidden className="h-px w-4 bg-graphite-300" />
                <time dateTime={featured.date} className="normal-case tracking-normal text-graphite-500">
                  {featured.dateLabel}
                </time>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-graphite-900 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-graphite-600">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper-700">
                Les artikkel
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </span>
            </div>
          </Link>

          {rest.length > 0 && (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
