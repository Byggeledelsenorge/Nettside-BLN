import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/site";

export function Process() {
  return (
    <section className="bg-bone py-20 sm:py-28">
      <Container>
        <SectionHeading kicker={process.kicker} title={process.title} intro={process.intro} />

        <ol className="mt-14 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <li key={step.number} className="flex flex-col bg-bone p-7">
              <span className="font-mono text-sm font-semibold text-copper-600">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-graphite-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-graphite-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
