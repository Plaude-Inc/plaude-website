"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export function ClosingCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-primary-brand overflow-hidden grain-overlay">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl" />

      <FadeUp>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-on-primary leading-[1.08] tracking-[-0.02em]">
            Ready to take your
            <br className="hidden sm:block" />{" "}
            business global?
          </h2>
          <p className="mt-6 text-lg text-on-primary/70 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses managing their global finances with
            Plaude.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-on-primary/50">
            <Clock className="size-3.5" />
            <span>Setup takes less than 5 minutes</span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-[15px] font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-black/10"
            >
              Get Started — It&apos;s Free
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-transparent text-on-primary hover:bg-on-primary/10 h-12 px-8 text-[15px] font-medium rounded-full transition-all duration-200"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
