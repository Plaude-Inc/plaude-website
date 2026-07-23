"use client";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { FadeUp } from "@/components/shared/FadeUp";
import { AccordionFeatureSection } from "@/components/ui/accordion-feature-section";

const features = [
  {
    id: 1,
    title: "Multi-Currency Accounts",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    description:
      "Open local accounts in USD, EUR, GBP, and more — instantly. Receive funds like a local business, hold balances without hidden fees, and exchange at real-time interbank rates.",
  },
  {
    id: 2,
    title: "Global Payout",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    description:
      "Pay suppliers, contractors, and partners anywhere in the world using local payment rails. Bypass the SWIFT network — and save more money with lower fees and full transparency on every transaction.",
  },
  {
    id: 3,
    title: "Payment Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Automatically convert currencies when target rates are hit, route incoming funds, and trigger payouts based on your own business rules — so your team spends less time on admin and more time on growth.",
  },
];

export function WhyPlaude() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionLabel>Why Plaude</SectionLabel>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
            Everything you need to go global.
          </h2>
        </FadeUp>
      </div>
      <AccordionFeatureSection features={features} />
    </div>
  );
}
