"use client";

import { FadeUp, StaggerContainer, FadeUpItem } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ArrowRight, ShieldCheck, Users, Globe, Eye, Award, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
  { icon: ShieldCheck, title: "Compliance", description: "Adhering to the highest global regulatory standards to ensure security and trust." },
  { icon: Users, title: "Customer-Focused", description: "Every line of code and every policy is designed with the user's success in mind." },
  { icon: Globe, title: "Inclusion", description: "Financial tools built for everyone, regardless of their location or status." },
  { icon: Eye, title: "Transparency", description: "Clear communication and open processes are the bedrock of our platform." },
  { icon: Award, title: "Excellence", description: "We don't just meet industry standards, we strive to set new ones every day." },
  { icon: RefreshCw, title: "Improvement", description: "Continuous iteration and learning are vital to our global mission." },
];

const leaders = [
  { name: "Tomiwa Adeyemo", title: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" },
  { name: "Sarah Oyelaran", title: "Chief Operating Officer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=face" },
  { name: "Michael Chen", title: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" },
  { name: "David Kruger", title: "VP, Strategic Alliances", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero — left text, right cityscape photo */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Our Story</SectionLabel>
                <h1 className="mt-5 text-3xl sm:text-4xl md:text-[3rem] font-bold text-on-background leading-[1.08] tracking-[-0.02em]">
                  Building the future of global banking.
                </h1>
                <p className="mt-6 text-on-background/60 leading-relaxed">
                  We started Plaude with a simple belief — moving money across borders
                  should be as easy, fast, and secure as sending an email. Today we power
                  thousands of global businesses.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                    alt="Modern cityscape"
                    width={600}
                    height={400}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary-brand/[0.04] blur-3xl" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission — full-width gradient: soft mint → soft lavender */}
      <section
        className="py-20 sm:py-28"
        style={{ background: "linear-gradient(to right, #d1fae5, #ede9fe)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
              {/* Left — mission quote in a white card */}
              <div className="rounded-2xl bg-white p-10 sm:p-12 atmospheric-shadow">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand/50 mb-5">Our Mission</p>
                <p className="text-xl sm:text-2xl font-medium text-on-background leading-[1.5]">
                  &ldquo;On a mission to make global financial infrastructure accessible, transparent,
                  and seamlessly integrated for every citizen of the world.&rdquo;
                </p>
              </div>

              {/* Right — two stat cards side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-secondary-brand/20 p-7 sm:p-8">
                  <p className="text-3xl sm:text-4xl font-bold text-secondary-brand">190+</p>
                  <p className="text-xs text-on-background/50 mt-2 leading-snug">Countries Covered</p>
                </div>
                <div className="rounded-2xl bg-surface-container/30 p-7 sm:p-8">
                  <p className="text-3xl sm:text-4xl font-bold text-primary-brand">40M+</p>
                  <p className="text-xs text-on-background/50 mt-2 leading-snug">Transactions Processed</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Guided by Core Values — 3×2 grid with icons (matching design) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <div className="section-rule mb-8" />
              <p className="text-sm text-on-background/40 italic">Guided by Core Values</p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <FadeUpItem key={i}>
                  <div className="rounded-3xl bg-surface-lowest p-7 h-full hover:bg-surface-low transition-colors">
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white p-3">
                      <Icon className="size-5 text-primary-brand" />
                    </div>
                    <h3 className="text-base font-semibold text-on-background">{value.title}</h3>
                    <p className="mt-2 text-sm text-on-background/60 leading-relaxed">{value.description}</p>
                  </div>
                </FadeUpItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CEO Message — B&W photo left, purple card right */}
      {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden atmospheric-shadow-lg">
              <div className="bg-white flex items-center justify-center p-0">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                  alt="Tomiwa Adeyemo, CEO"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover aspect-[4/5] grayscale"
                />
              </div>
              <div className="bg-primary-brand p-8 md:p-12 flex flex-col justify-center grain-overlay relative">
                <div className="relative z-10">
                  <SectionLabel>Message from the CEO</SectionLabel>
                  <p className="mt-6 text-lg md:text-xl text-on-primary/90 leading-relaxed italic">
                    &ldquo;This section is reserved for a personal note from our
                    CEO. The more specific and honest, the better. Authentic
                    founder notes convert better than polished marketing copy.&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold text-on-primary">Tomiwa V. Plaude</p>
                    <p className="text-sm text-on-primary/50">CEO &amp; Co-founder</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section> */}

      {/* The Team — simple row of 4 portraits matching design */}
      {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <SectionLabel>The Team</SectionLabel>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background">
                Meet the Leadership
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <FadeUpItem key={i}>
                <div>
                  <div className="rounded-2xl overflow-hidden atmospheric-shadow mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={400}
                      height={500}
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-on-background">{leader.name}</h3>
                  <p className="text-xs text-primary-brand font-medium mt-0.5">{leader.title}</p>
                </div>
              </FadeUpItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* CTA — "Join the Revolution" */}
      <section className="relative py-24 sm:py-32 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-on-primary leading-[1.08] tracking-[-0.02em]">
              Join the Revolution
            </h2>
            <p className="mt-6 text-lg text-on-primary/70 max-w-2xl mx-auto">
              Join thousands of businesses managing their global finances with Plaude.
            </p>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-[15px] font-semibold rounded-full transition-all"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
