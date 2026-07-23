"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { target: 2, prefix: "$", suffix: "B+", label: "Volume Processed" },
  { target: 150, prefix: "", suffix: "+", label: "Global Businesses" },
  { target: 150, prefix: "", suffix: "+", label: "Countries Supported" },
  { target: 99, prefix: "", suffix: ".999%", label: "Uptime" },
];

export function SolutionStatement() {
  return (
    <section className="relative overflow-hidden">
      {/* Headline area — white bg */}
      <div className="py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-brand/[0.03] rounded-full blur-3xl" />
        <FadeUp>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-light text-on-background leading-[1.12]">
              One platform.{" "}
              <span className="font-bold text-primary-brand">Every currency.</span>{" "}
              Zero borders.
            </h2>
            <p className="mt-6 text-base text-on-background/60 max-w-xl mx-auto leading-relaxed">
              Send, receive, and manage money in 56 currencies across 150+ countries — from a single dashboard.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Stats strip — purple bg, white text */}
      <FadeUp delay={0.15}>
        <div className="bg-primary-brand py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-bold text-on-primary tracking-tight">
                    <AnimatedCounter
                      target={stat.target}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-2 text-sm text-on-primary/60 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
