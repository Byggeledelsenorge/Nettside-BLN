import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Tillit-seksjon: fagpersonen bak og godkjenningene.
 * Gir ansikt til en ellers teksttung side og forankrer uavhengigheten.
 */
export function MeetExpert() {
  const person = site.contactPerson;

  return (
    <section className="border-t border-graphite-200 bg-mist py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_1fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border border-copper-500/40" aria-hidden />
            <Image
              src={person.photo}
              alt={`${person.name}, ${person.role} i ${site.legalName}`}
              width={960}
              height={960}
              className="relative aspect-square w-full max-w-md object-cover grayscale-[15%] rounded-sm"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">
              Fagpersonen på din side
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
              Møt {person.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-graphite-500">{person.role}</p>
            <p className="mt-5 text-lg leading-relaxed text-graphite-700">
              Byggeledelse Norge er en uavhengig byggfaglig rådgiver med mange års erfaring
              fra byggfag, prosjektledelse og uavhengig kontroll. Vi står på boligeierens
              side når noe er galt – og sikrer at hvert oppdrag håndteres nøkternt,
              dokumentert og med høy faglig integritet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {site.certifications.map((cert) => (
                <div key={cert.label} className="flex items-center gap-3">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={128}
                    height={128}
                    className="h-14 w-14 object-contain"
                  />
                  <span className="text-sm font-semibold text-graphite-800">{cert.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-graphite-500">
              {site.approvalText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/kontakt" variant="accent" size="md">
                Ta kontakt
              </Button>
              <Button href="/om-oss" variant="outline" size="md">
                Om oss
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
