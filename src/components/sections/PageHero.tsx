import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  kicker?: string;
  title: string;
  intro?: string;
  breadcrumbs?: Crumb[];
};

/** Kompakt, mork sidetopp for undersider. */
export function PageHero({ kicker, title, intro, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-graphite-950 text-bone">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-copper-700/15 blur-3xl"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Brødsmuler" className="mb-6 text-sm text-graphite-400">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={crumb.href} className="hover:text-bone">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {kicker && (
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
            <span aria-hidden className="h-px w-8 bg-copper-400/70" />
            {kicker}
          </div>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-300 text-pretty">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
