import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { businessServices } from "@/content/services";
import { businessSection } from "@/content/site";
import Link from "next/link";

export function BusinessServices() {
  return (
    <section id="bedrift" className="scroll-mt-20 border-y border-graphite-800 bg-graphite-950 py-20 text-bone sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            kicker={businessSection.kicker}
            title={businessSection.title}
            intro={businessSection.intro}
          />
          <Button
            href="/bedrift"
            variant="outline"
            size="md"
            className="shrink-0 border-graphite-700 text-bone hover:border-bone hover:bg-graphite-900"
          >
            Mer om bedrift
          </Button>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-graphite-800 bg-graphite-800 sm:grid-cols-2 lg:grid-cols-3">
          {businessServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/tjenester/${service.slug}`}
                className="group flex h-full flex-col gap-2 bg-graphite-950 p-7 transition-colors hover:bg-graphite-900"
              >
                <h3 className="text-base font-semibold tracking-tight text-bone">
                  {service.shortTitle}
                </h3>
                <p className="text-sm leading-relaxed text-graphite-400">{service.tagline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
