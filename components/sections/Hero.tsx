"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Global Payments Platform</SectionLabel>
            <h1 className="mt-5 text-4xl md:text-[3.5rem] font-bold text-on-background leading-[1.06] tracking-[-0.02em]">
              The smarter way to move money across{" "}
              <span className="text-primary-brand">borders.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-on-background/60 leading-relaxed max-w-xl mx-auto">
              Multi-currency accounts, automated cross-border payouts, and full
              financial visibility — all from one platform. Save time and cut costs
              on every transaction.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-brand text-on-primary hover:bg-primary-container h-12 px-8 text-[15px] font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-brand/20"
              >
                Get Started — It&apos;s Free
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full h-12 px-8 text-[15px] font-medium text-on-background bg-surface-lowest/60 hover:bg-surface-low transition-all duration-200"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        }
      >
        <Image
          src="/dashboard-preview.png"
          alt="Plaude Dashboard"
          width={1400}
          height={900}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
