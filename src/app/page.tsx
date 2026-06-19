import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemMirror } from "@/components/sections/ProblemMirror";
import { AudienceToggle } from "@/components/sections/AudienceToggle";
import { PrivateServices } from "@/components/sections/PrivateServices";
import { BusinessServices } from "@/components/sections/BusinessServices";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaSection } from "@/components/sections/CtaSection";
import { seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
  keywords: seoKeywords,
};

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceToggle />
      <ProblemMirror />
      <PrivateServices />
      <BusinessServices />
      <Process />
      <WhyUs />
      <CtaSection />
    </>
  );
}
