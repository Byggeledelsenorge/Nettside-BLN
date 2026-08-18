import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemMirror } from "@/components/sections/ProblemMirror";
import { PrivateServices } from "@/components/sections/PrivateServices";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { BusinessStrip } from "@/components/sections/BusinessStrip";
import { CtaSection } from "@/components/sections/CtaSection";
import { seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: "Byggeledelse Norge | Uavhengig byggfaglig rådgiver",
  },
  description:
    "Byggeledelse Norge er en uavhengig byggfaglig rådgiver i Ålesund. Vi bistår med byggfeil, reklamasjoner, overtakelse, rehabilitering, prosjektledelse og uavhengig kontroll.",
  alternates: { canonical: site.url },
  keywords: seoKeywords,
  openGraph: {
    title: "Byggeledelse Norge | Uavhengig byggfaglig rådgiver",
    description:
      "Byggeledelse Norge er en uavhengig byggfaglig rådgiver i Ålesund. Vi bistår med byggfeil, reklamasjoner, overtakelse, rehabilitering, prosjektledelse og uavhengig kontroll.",
    url: site.url,
    type: "website",
    locale: "nb_NO",
    siteName: site.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemMirror />
      <PrivateServices />
      <Process />
      <WhyUs />
      <BusinessStrip />
      <CtaSection />
    </>
  );
}
