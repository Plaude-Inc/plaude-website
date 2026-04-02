"use client";

import { FadeUp, StaggerContainer, FadeUpItem } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, BookOpen, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  { icon: Sparkles, title: "Early Access", description: "Be the first to hear about new features, product updates, and what's coming next at Plaude, before anyone else." },
  { icon: BookOpen, title: "Educational Resources", description: "Get access to exclusive guides, reports, and resources designed to help you navigate global payments, fintech trends, and cross-border business." },
  { icon: CalendarDays, title: "Events", description: "Get invited to exclusive Plaude webinars, industry events, and in-person meetups where you can connect with the team and other members." },
];

export default function PlaudeCirclePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>The Plaude Circle</SectionLabel>
                <h1 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-on-background leading-[1.08] tracking-[-0.02em]">
                  You&apos;re not just a customer.{" "}
                  <span className="text-primary-brand">You&apos;re part of something bigger.</span>
                </h1>
                <p className="mt-6 text-on-background/60 leading-relaxed">
                  The Plaude Circle is a community for global business operators, fintech enthusiasts,
                  and curious minds who want to stay ahead — and help shape what&apos;s next.
                </p>
                <div className="mt-8 flex items-center gap-6 flex-wrap">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-brand text-on-primary hover:bg-primary-container h-12 px-8 text-[15px] font-medium transition-all hover:shadow-lg hover:shadow-primary-brand/20"
                  >
                    Join The Circle
                  </Link>
                  <button className="flex items-center gap-2.5 text-on-background/60 hover:text-primary-brand transition-colors text-sm font-medium group">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-lowest group-hover:bg-surface-low transition-all">
                      <Play className="size-3.5 ml-0.5 text-primary-brand" />
                    </span>
                    Explore Manifesto
                  </button>
                </div>
              </div>

              {/* Community illustration area */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 px-4 py-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-5xl sm:text-6xl font-bold text-amber-900/20">Community</p>
                    <p className="text-lg text-amber-800/40 mt-2 italic">meaningful connections to be</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-16">
              <SectionLabel>Member Benefits</SectionLabel>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
                What&apos;s in it for you.
              </h2>
              <p className="mt-3 text-on-background/60">
                Premium ecosystem privileges designed for those who elevate their financial partnerships.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeUpItem key={i}>
                  <div className="rounded-3xl bg-surface-lowest p-8 h-full hover:bg-surface-low transition-colors">
                    <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-white p-3.5">
                      <Icon className="size-6 text-primary-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-on-background">{benefit.title}</h3>
                    <p className="mt-3 text-sm text-on-background/60 leading-relaxed">{benefit.description}</p>
                    <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand hover:text-primary-container mt-4 transition-colors">
                      Learn more <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </FadeUpItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Elevate — Premium card */}
      <section className="py-24 sm:py-32 bg-surface-lowest/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-on-background leading-tight">
                  Elevate Your Presence in the Circle
                </h2>
                <p className="mt-4 text-on-background/60 leading-relaxed">
                  Plaude Circle members receive a titanium-grade physical card and expanded vault limits as standard.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-8 rounded-full bg-primary-brand text-on-primary hover:bg-primary-container h-11 px-6 text-sm font-medium transition-all"
                >
                  Apply for Membership
                </Link>
              </div>

              {/* Premium card mockup */}
              <div className="relative">
                <div className="rounded-3xl bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-100 p-8 atmospheric-shadow-lg">
                  <div className="rounded-2xl bg-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Image src="/brand/icon-mark.svg" alt="Plaude" width={32} height={32} className="h-8 w-8" />
                      <span className="text-xs text-on-background/40 font-medium">Plaude</span>
                    </div>
                    <p className="text-3xl font-bold text-on-background">$142,500.00</p>
                    <div className="mt-4 flex gap-4">
                      <div>
                        <p className="text-[10px] text-on-background/40 uppercase tracking-wider">Rate</p>
                        <p className="text-sm font-medium text-on-background">$1.00</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-on-background/40 uppercase tracking-wider">Change</p>
                        <p className="text-sm font-medium text-emerald-600">+0.42%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-on-primary leading-[1.08]">
              Your seat at the table is waiting.
            </h2>
            <p className="mt-6 text-lg text-on-primary/70 max-w-2xl mx-auto">
              Join The Plaude Circle today — it&apos;s free, it&apos;s open, and it&apos;s growing.
            </p>
            <div className="mt-10">
              <Link href="#" className="inline-flex items-center gap-2 bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-[15px] font-semibold rounded-full transition-all">
                Join The Plaude Circle <ArrowRight className="size-4" />
              </Link>
              <p className="mt-3 text-xs text-on-primary/40">Free to join.</p>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
