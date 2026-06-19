import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUs } from "@/content/site";

export function WhyUs() {
  return (
    <section className="border-t border-graphite-200 bg-mist py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading kicker={whyUs.kicker} title={whyUs.title} />

          <div className="grid gap-px self-start overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-2">
            {whyUs.items.map((item) => (
              <div key={item.title} className="bg-bone p-7">
                <h3 className="text-lg font-semibold tracking-tight text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
