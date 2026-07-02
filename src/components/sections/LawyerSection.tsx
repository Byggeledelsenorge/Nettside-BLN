import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { lawyerSection } from "@/content/site";

/** Målgruppeseksjon rettet mot advokater i bolig- og entreprisetvister. */
export function LawyerSection() {
  return (
    <section className="border-t border-graphite-200 bg-mist py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">
            <span aria-hidden className="h-px w-8 bg-copper-500/70" />
            {lawyerSection.kicker}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
            {lawyerSection.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite-700">{lawyerSection.intro}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-3">
          {lawyerSection.items.map((item) => (
            <div key={item.title} className="bg-bone p-7">
              <h3 className="text-lg font-semibold tracking-tight text-graphite-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-graphite-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/kontakt" variant="primary" size="md">
            Diskuter en sak med oss
          </Button>
        </div>
      </Container>
    </section>
  );
}
