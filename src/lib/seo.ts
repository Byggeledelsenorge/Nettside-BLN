import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Service } from "@/content/services";

/**
 * JSON-LD for virksomheten (ProfessionalService / LocalBusiness).
 * Feltene med [VERIFISER] fylles inn nar faktaopplysninger er bekreftet.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}/og-image.png`,
    description:
      "Uavhengig byggfaglig rådgiver for boligeiere og bedrifter. Bistand ved reklamasjon, byggfeil, uavhengig kontroll, overtakelse, byggeledelse og prosjektoppfølging.",
    areaServed: { "@type": "Country", name: "Norge" },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: "NO",
    },
    knowsAbout: [
      "Byggfaglig rådgivning",
      "Reklamasjon og byggfeil",
      "Uavhengig kontroll",
      "Byggeledelse",
      "Byggherrebistand",
    ],
  };
}

/** JSON-LD for en enkelt tjeneste. */
export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    serviceType: service.title,
    areaServed: { "@type": "Country", name: "Norge" },
    provider: {
      "@type": "ProfessionalService",
      name: site.legalName,
      url: site.url,
    },
    url: `${site.url}/tjenester/${service.slug}`,
    audience: {
      "@type": "Audience",
      audienceType: service.audience === "privat" ? "Privatpersoner" : "Bedrifter",
    },
  };
}

/** Hjelper for konsistent metadata per side. */
export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = `${site.url}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: "website",
      locale: "nb_NO",
      siteName: site.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
    },
  };
}
