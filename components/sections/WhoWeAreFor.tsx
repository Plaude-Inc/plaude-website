"use client";

import { useEffect, useCallback, useState } from "react";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    label: "E-commerce & Retail",
    subheadline: "Go global. Keep your margins.",
  },
  {
    label: "Tech & SaaS",
    subheadline: "Pay your global team. Automatically.",
  },
  {
    label: "Agencies & Freelancers",
    subheadline: "Get paid like a local, anywhere.",
  },
  {
    label: "Enterprise Treasury",
    subheadline: "Your global finances. One dashboard.",
  },
];

/* Card visual — teal gradient with payment card mockup */
function TealCardVisual() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-secondary-brand via-secondary-brand/90 to-secondary-brand/70 p-6 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
      {/* Abstract card mockup */}
      <div className="w-[70%] aspect-[1.6/1] rounded-xl bg-white/15 backdrop-blur-sm p-4 rotate-[-4deg] atmospheric-shadow">
        <div className="flex justify-between items-start mb-6">
          <div className="h-6 w-10 rounded bg-white/30" />
          <div className="h-4 w-16 rounded bg-white/20" />
        </div>
        <div className="space-y-2 mt-auto">
          <div className="h-3 w-3/4 rounded bg-white/20" />
          <div className="h-3 w-1/2 rounded bg-white/15" />
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-5 w-8 rounded bg-white/25" />
          <div className="h-5 w-8 rounded bg-white/15" />
          <div className="h-5 w-8 rounded bg-white/10" />
        </div>
      </div>
      {/* Subtle floating dots */}
      <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-white/20" />
      <div className="absolute bottom-8 left-6 h-3 w-3 rounded-full bg-white/10" />
    </div>
  );
}

/* Card visual — dark purple gradient with bar chart */
function PurpleChartVisual() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary-brand via-primary-brand/90 to-primary-brand/70 p-6 aspect-[4/3] flex items-end justify-center relative overflow-hidden">
      {/* Bar chart */}
      <div className="flex items-end gap-2 w-[80%] h-[70%]">
        {[45, 65, 40, 80, 55, 90, 70, 85].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-secondary-brand/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      {/* Grid lines */}
      <div className="absolute inset-6 flex flex-col justify-between pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-px bg-white/5 w-full" />
        ))}
      </div>
      {/* Subtle floating dots */}
      <div className="absolute top-4 right-5 h-2 w-2 rounded-full bg-white/15" />
    </div>
  );
}

const cardVisuals = [TealCardVisual, PurpleChartVisual, TealCardVisual, PurpleChartVisual];

export function WhoWeAreFor() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplay = useCallback(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    return autoplay();
  }, [autoplay]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-16">
            <SectionLabel>Who We&apos;re For</SectionLabel>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
              Built for businesses like yours.
            </h2>
          </div>
        </FadeUp>

        <FadeUp>
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide, i) => {
                const Visual = cardVisuals[i % cardVisuals.length];
                return (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                    <div className="rounded-3xl bg-surface-lowest p-5 h-full transition-all duration-300 hover:atmospheric-shadow">
                      {/* Large visual area — dominates the card */}
                      <Visual />

                      {/* Minimal text below visual */}
                      <div className="pt-5 pb-2 px-1">
                        <span className="text-xs font-semibold text-primary-brand tracking-wide">
                          {slide.label}
                        </span>
                        <p className="mt-2 text-xl sm:text-2xl font-semibold text-on-background leading-tight tracking-[-0.02em]">
                          {slide.subheadline}
                        </p>
                        {/* <Link
                          href="#"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-brand hover:text-primary-container transition-colors mt-4 group/link"
                        >
                          Learn More
                          <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                        </Link> */}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2 flex-1 max-w-xs">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full bg-surface-low overflow-hidden cursor-pointer"
                    onClick={() => api?.scrollTo(i)}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-500 bg-primary-brand ${
                        i === activeIndex ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 bg-surface-lowest text-on-background hover:bg-surface-low h-10 w-10" />
                <CarouselNext className="static translate-y-0 bg-surface-lowest text-on-background hover:bg-surface-low h-10 w-10" />
              </div>
            </div>
          </Carousel>
        </FadeUp>
      </div>
    </section>
  );
}
