"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Global Payments", "Business Finance", "Product Updates", "Think Pieces"];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>Plaude Journal</SectionLabel>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-on-background leading-[1.06] tracking-[-0.02em]">
              Insights for businesses that move{" "}
              <span className="text-primary-brand italic">globally.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Category tabs */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? "bg-primary-brand text-on-primary"
                      : "bg-surface-lowest text-on-background/60 hover:bg-surface-low"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Magazine bento layout — matching Figma exactly */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            {/* Row 1: Large image left, article text right */}
            <div className="grid md:grid-cols-5 gap-6 mb-6">
              <div className="md:col-span-3">
                <Link href="/learn/blog/sepa-instant" className="group block">
                  <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                      alt="Modern architecture"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                  Global Payments
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-on-background leading-tight">
                  How SEPA Instant is Redefining European Commerce
                </h3>
                <p className="mt-3 text-sm text-on-background/60 leading-relaxed">
                  Understanding how real-time settlement is reshaping cross-border
                  payments within the European market ecosystem.
                </p>
                <Link href="/learn/blog/sepa-instant" className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-4 hover:gap-2 transition-all">
                  7 min read <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {/* Row 2: Article text left, image right */}
            <div className="grid md:grid-cols-5 gap-6 mb-6">
              <div className="md:col-span-3 flex flex-col justify-end">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                  Think Pieces
                </span>
                <span className="text-[11px] text-on-background/30 ml-3 inline">March 8, 2026</span>
                <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-on-background leading-tight">
                  The Future of Cross-Border Liquidity in a Post-Digital Era
                </h3>
                <p className="mt-3 text-sm text-on-background/60 leading-relaxed">
                  As traditional banking networks evolve, we explore the systemic shifts
                  required to maintain seamless capital flow across emerging markets.
                </p>
                <div className="flex items-center gap-2 mt-5">
                  <div className="h-8 w-8 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold text-primary-brand">
                    DK
                  </div>
                  <div>
                    <p className="text-xs font-medium text-on-background">David Kruger</p>
                    <p className="text-[10px] text-on-background/40">VP, Strategic Alliances</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <Link href="/learn/blog/cross-border-liquidity" className="group block">
                  <div className="rounded-3xl overflow-hidden atmospheric-shadow h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop"
                      alt="Business professional"
                      width={500}
                      height={600}
                      className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            {/* Row 3: Two cards side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left card — dark overlay image */}
              <Link href="/learn/blog/plaude-connect" className="group block">
                <div className="relative rounded-3xl overflow-hidden atmospheric-shadow h-full min-h-[240px]">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="Dashboard analytics"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-brand/90 via-primary-brand/40 to-transparent" />
                  <div className="relative z-10 p-7 flex flex-col justify-end h-full">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-on-primary/60">
                      Product Updates
                    </span>
                    <h4 className="mt-2 text-lg font-semibold text-on-primary leading-snug">
                      Announcing Plaude Connect: API-First Treasury Management
                    </h4>
                  </div>
                </div>
              </Link>

              {/* Right card — text with small image */}
              <div className="flex flex-col justify-center">
                <div className="flex gap-5 items-start">
                  <div className="shrink-0">
                    <Link href="/learn/blog/fx-risk" className="group block">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden atmospheric-shadow">
                        <Image
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop"
                          alt="FX Markets"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                      Business Finance
                    </span>
                    <h4 className="mt-2 text-base font-semibold text-on-background leading-snug">
                      Risk Mitigation in High-Volatility FX Markets
                    </h4>
                    <p className="mt-2 text-sm text-on-background/50 leading-relaxed">
                      Practical strategies for CFOs navigating unpredictable currency movements.
                    </p>
                    <Link href="/learn/blog/fx-risk" className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-3 hover:gap-2 transition-all">
                      Read Article <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Newsletter CTA */}
      {/* <section className="relative py-20 sm:py-24 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-on-primary">
              Stay ahead of the curve.
            </h2>
            <p className="mt-4 text-on-primary/70 leading-relaxed">
              Weekly perspectives on global finance, directly to your inbox. No noise, just signal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 h-12 rounded-full px-5 bg-white/10 text-on-primary placeholder:text-on-primary/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm transition-all backdrop-blur-sm"
              />
              <Button className="rounded-full bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-sm font-medium transition-all">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-xs text-on-primary/40">No spam. Unsubscribe any time.</p>
          </div>
        </FadeUp>
      </section> */}
    </div>
  );
}
