import Image from "next/image";
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

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
              <span aria-hidden className="h-px w-10 bg-copper-400/70" />
              {hero.kicker}
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <div className="mt-6 flex max-w-xl flex-col gap-4">
              {hero.subtitle.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-graphite-300 text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/kontakt" variant="accent" size="lg">
                {CTA_LABEL}
              </Button>
              <Button href="/private" variant="outlineLight" size="lg">
                Tjenester for private
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/illustrasjoner/hero-illustrasjon.png"
              alt="Illustrasjon av en bolig under byggfaglig inspeksjon"
              width={1024}
              height={683}
              priority
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-graphite-800 pt-10 sm:grid-cols-3">
          {hero.trust.map((item) => (
            <TrustBadge key={item.label} label={item.label} detail={item.detail} />
          ))}
        </div>
      </Container>
    </section>
  );
}
