import Link from "next/link";
import Image from "next/image";
import { site, CTA_LABEL } from "@/content/site";
import { privateServices, businessServices } from "@/content/services";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-950 text-graphite-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-graphite-800 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-bone sm:text-3xl">
              {CTA_LABEL}
            </h2>
            <p className="mt-3 text-graphite-400">
              Fortell oss kort om situasjonen, så gir vi deg en ærlig vurdering av hvordan
              vi kan hjelpe.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/kontakt" variant="accent" size="lg">
              Ta kontakt
            </Button>
            <Button
              href={site.phoneHref}
              variant="outline"
              size="lg"
              className="border-graphite-700 text-bone hover:border-bone hover:bg-graphite-900"
            >
              Ring {site.phone}
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt={site.legalName}
              width={1600}
              height={798}
              className="h-8 w-auto opacity-90 brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-graphite-400">
              Uavhengig byggfaglig rådgiver for boligeiere og bedrifter – {site.serviceArea}.
            </p>
          </div>

          <nav aria-label="Tjenester for private">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bone">
              For private
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {privateServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tjenester/${s.slug}`} className="hover:text-bone">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Tjenester for bedrift">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bone">
              For bedrift
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {businessServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tjenester/${s.slug}`} className="hover:text-bone">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bone">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-bone">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-bone">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-bone">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-bone">
                  Kontaktskjema
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-graphite-800 pt-8 text-xs text-graphite-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Org.nr {site.orgNumber}.
          </p>
          <p>{site.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
