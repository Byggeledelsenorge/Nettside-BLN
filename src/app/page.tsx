import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemMirror } from "@/components/sections/ProblemMirror";
import { PrivateServices } from "@/components/sections/PrivateServices";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { MeetExpert } from "@/components/sections/MeetExpert";
import { BusinessStrip } from "@/components/sections/BusinessStrip";
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
      <ProblemMirror />
      <PrivateServices />
      <Process />
      <WhyUs />
      <MeetExpert />
      <BusinessStrip />
      <CtaSection />
    </>
  );
}
