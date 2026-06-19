import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { CTA_LABEL, hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite-950 text-bone">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-graphite-950/95 to-graphite-900"
      />
      {/* Subtil kobber-glod for industrielt preg */}
      <div
        aria-hidden
        className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-copper-700/20 blur-3xl"
      />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
            <span aria-hidden className="h-px w-10 bg-copper-400/70" />
            {hero.kicker}
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite-300 text-pretty">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/kontakt" variant="accent" size="lg">
              {CTA_LABEL}
            </Button>
            <Button
              href="/private"
              variant="outline"
              size="lg"
              className="border-graphite-700 text-bone hover:border-bone hover:bg-graphite-900"
            >
              Tjenester for private
            </Button>
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 border-t border-graphite-800 pt-10 sm:grid-cols-4">
          {hero.trust.map((item) => (
            <TrustBadge key={item.label} label={item.label} detail={item.detail} />
          ))}
        </div>
      </Container>
    </section>
  );
}
