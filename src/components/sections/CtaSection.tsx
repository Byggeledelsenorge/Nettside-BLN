import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { finalCta, site } from "@/content/site";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-graphite-900 py-20 text-bone sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-copper-700/20 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
            <span aria-hidden className="h-px w-8 bg-copper-400/70" />
            {finalCta.kicker}
            <span aria-hidden className="h-px w-8 bg-copper-400/70" />
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite-300 text-pretty">
            {finalCta.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/kontakt" variant="accent" size="lg">
              {finalCta.primaryLabel}
            </Button>
            <Button href={site.phoneHref} variant="outlineLight" size="lg">
              {finalCta.secondaryLabel} · {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
