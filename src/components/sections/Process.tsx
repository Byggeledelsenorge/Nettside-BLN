import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processIcons } from "@/components/ui/icons";
import { process } from "@/content/site";

export function Process() {
  return (
    <section className="bg-bone py-20 sm:py-28">
      <Container>
        <SectionHeading kicker={process.kicker} title={process.title} intro={process.intro} />

        <ol className="mt-14 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => {
            const Icon = processIcons[i] ?? processIcons[0];
            return (
              <li key={step.number} className="flex flex-col bg-bone p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-graphite-200 bg-white text-copper-600 rounded-sm">
                    <Icon />
                  </span>
                  <span className="font-mono text-sm font-semibold text-graphite-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-graphite-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite-600">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
