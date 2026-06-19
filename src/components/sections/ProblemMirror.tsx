import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problemMirror } from "@/content/site";

export function ProblemMirror() {
  return (
    <section className="border-b border-graphite-200 bg-bone py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker={problemMirror.kicker}
          title={problemMirror.title}
          intro={problemMirror.intro}
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-2 lg:grid-cols-3">
          {problemMirror.items.map((item) => (
            <li key={item.title} className="bg-bone p-7">
              <h3 className="flex items-start gap-3 text-lg font-semibold text-graphite-900">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper-500" />
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-graphite-600">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
