import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { SolutionStatement } from "@/components/sections/SolutionStatement";
import { WhyPlaude } from "@/components/sections/WhyPlaude";
import { WhoWeAreFor } from "@/components/sections/WhoWeAreFor";
// import { Testimonials } from "@/components/sections/Testimonials"; // hidden until real testimonials are available
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <SolutionStatement />
      <WhyPlaude />
      <WhoWeAreFor />
      {/* <Testimonials /> */}
      <ClosingCTA />
    </>
  );
}
