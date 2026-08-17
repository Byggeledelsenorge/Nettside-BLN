import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { privateServices } from "@/content/services";
import { privateSection } from "@/content/site";

export function PrivateServices() {
  return (
    <section id="private" className="scroll-mt-20 bg-mist py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker={privateSection.kicker}
            title={privateSection.title}
            intro={privateSection.intro}
          />
          <Button href="/private" variant="outline" size="md" className="shrink-0">
            Alle privattjenester
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {privateServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/slik-har-vi-bistatt-andre" variant="accent" size="md" className="group">
            Slik har vi bistått andre
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
