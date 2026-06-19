# Byggeledelse Norge AS – nettside

Moderne nettside for **Byggeledelse Norge AS**, posisjonert som uavhengig byggfaglig
rådgiver. Primær målgruppe er private boligeiere med problemer på boligen (ca. 70 %),
sekundært bedrifter som trenger byggeledelse (ca. 30 %).

Bygget med **Next.js (App Router)**, **TypeScript** og **Tailwind CSS v4**.

## Kom i gang

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksjonsbygg
npm run lint
```

> Node.js 20+ kreves.

## Prosjektstruktur

```
src/
  app/
    layout.tsx              # Rotlayout: Inter-font, Header/Footer, global metadata + JSON-LD
    page.tsx                # Forsiden (alle seksjoner)
    private/                # Samlet privattjenester
    bedrift/                # Byggeledelse m.m.
    om-oss/
    kontakt/                # Kontaktskjema + kontaktinfo
    tjenester/[slug]/       # SEO-mal per tjeneste (generateStaticParams)
    api/kontakt/route.ts    # Skjemainnsending via Resend
    sitemap.ts, robots.ts
    icon.png, apple-icon.png
  components/
    layout/                 # Header (sticky + CTA), Footer
    sections/               # Hero, ProblemMirror, AudienceToggle, PrivateServices,
                            # BusinessServices, Process, WhyUs, CtaSection, PageHero
    ui/                     # Button, Container, SectionHeading, Card, TrustBadge,
                            # ServiceCard, ContactForm
  content/
    site.ts                 # All sidetekst (hero, problemspeiling, prosess, osv.)
    services.ts             # Tjenestedata (privat + bedrift) som driver undersider
  lib/
    seo.ts                  # Metadata-hjelper + JSON-LD (ProfessionalService/Service)
    utils.ts
public/
  logo.png                  # Konvertert fra Logo.ai (transparent)
  og-image.png              # Delingsbilde
Logo.ai                     # Originalt logokildemateriale
```

## Designsystem

Tokens er definert i [`src/app/globals.css`](src/app/globals.css) (Tailwind v4 `@theme`):

- **Grafitt** (`graphite-50…950`) – nær-svart kjølig grå, base for tekst og mørke flater
- **Bone / mist** – varm off-white og lys grå
- **Kobber** (`copper-50…900`) – dempet, varm aksentfarge som skiller oss fra
  konkurrentenes blå
- **Font:** Inter (`next/font`)

## Innhold som MÅ verifiseres før publisering

Søk etter `[VERIFISER` i `src/content/site.ts` (og `om-oss`-siden). Følgende
faktaopplysninger må fylles inn og bekreftes:

- Telefonnummer (`site.phone` + `site.phoneHref`)
- E-postadresse (`site.email`)
- Organisasjonsnummer (`site.orgNumber`)
- Adresse / poststed (`site.address`)
- Antall års erfaring, antall gjennomførte oppdrag, sertifiseringer/godkjenninger
- Eventuell geografisk avgrensning (`site.serviceArea`)

## SEO

- Metadata pr. side via `buildMetadata` i [`src/lib/seo.ts`](src/lib/seo.ts)
- JSON-LD: `ProfessionalService` (global) og `Service` (pr. tjeneste)
- `sitemap.xml` og `robots.txt` genereres automatisk

**Meta-title (forside):** «Byggeledelse Norge – Uavhengig byggfaglig rådgiver»
**Meta-description (forside):** «Uavhengig byggfaglig rådgiver for boligeiere og
bedrifter. Vi hjelper deg med reklamasjoner, byggfeil, uavhengig kontroll, overtakelse
og byggeledelse – over hele Norge.»

**Prioriterte søkeord** (privat-tunge):
`byggfaglig bistand`, `reklamasjon håndverker`, `uavhengig kontroll bolig`,
`byggfeil hjelp`, `overtakelse ny bolig`, `byggeledelse`, `byggherrebistand`,
`byggfaglig rådgiver`.

**Long-tail landingssider** (`/tjenester/[slug]`):

| Slug | Søkefokus |
| --- | --- |
| `reklamasjon-handverker` | reklamasjon håndverker, tvist entreprenør |
| `byggfeil-og-mangler` | byggfeil hjelp, mangler bolig |
| `uavhengig-kontroll-bolig` | uavhengig kontroll tiltaksklasse 1 |
| `overtakelse-ny-bolig` | overtakelse ny bolig, overtakelsesbefaring |
| `byggfaglig-radgivning-nybygg` | byggfaglig rådgivning, rådgiver nybygg |
| `vurdering-av-utfort-arbeid` | vurdering utført arbeid |
| `byggeledelse`, `byggherrebistand`, m.fl. | bedriftstjenester |

## Kontaktskjema (Resend)

Skjemaet sender e-post via [Resend](https://resend.com). Sett miljøvariabler i
`.env.local` (se [`.env.example`](.env.example)):

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
CONTACT_FROM_EMAIL=...
```

Uten `RESEND_API_KEY` logges henvendelsen kun på server (skjemaet feiler ikke i utvikling).
