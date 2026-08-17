import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { privateServices, businessServices } from "@/content/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-950 text-graphite-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-graphite-800 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt={site.legalName}
              width={1600}
              height={798}
              className="h-20 w-auto opacity-90 brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-graphite-400">
              Uavhengig byggfaglig rådgiver for boligeiere og bedrifter – {site.serviceArea}.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <li>
                <Link href="/slik-har-vi-bistatt-andre" className="hover:text-bone">
                  Slik har vi bistått andre
                </Link>
              </li>
              <li>
                <Link href="/fagbase" className="hover:text-bone">
                  Artikler
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-bone">
                  Om oss
                </Link>
              </li>
            </ul>
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
              <li className="pt-1 text-graphite-400">
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-bone">
                  Kontaktskjema
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-graphite-800 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            {site.certifications.map((cert) => (
              <Image
                key={cert.label}
                src={cert.image}
                alt={cert.alt}
                width={256}
                height={256}
                className="h-28 w-28 object-contain"
              />
            ))}
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-graphite-400">
            {site.approvalText}
          </p>
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
