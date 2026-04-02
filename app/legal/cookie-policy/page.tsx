"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";

const cookieTypes = [
  {
    title: "Essential Cookies",
    description:
      "Strictly necessary to provide you with services available through our website and to use some of its features.",
  },
  {
    title: "Performance, Functionality, and Personalized Cookies",
    description:
      "Records data such as your settings, preferences, and pages you visited. These cookies are used to enhance the performance and functionality of our website.",
  },
  {
    title: "Analytics and Customization Cookies",
    description:
      "Collect information to help us understand how our website is being used or how effective our marketing campaigns are.",
  },
  {
    title: "Advertising Cookies",
    description:
      "Used to make advertising messages more relevant to you and collect information about your visit to the website.",
  },
  {
    title: "Security Cookies",
    description:
      "Used to authenticate users, identify and prevent security risks, and protect user data.",
  },
  {
    title: "Control of Cookies",
    description:
      "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie consent banner.",
  },
  {
    title: "First-Party Cookies",
    description:
      "Our cookies that are necessary to make the website function correctly.",
  },
  {
    title: "Third-Party Cookies",
    description:
      "Non-Plaude companies such as third-party websites that we link to online. Please review the cookie policies of other websites you visit to understand their practices.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          {/* Header */}
          <SectionLabel>Transparency Center</SectionLabel>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-on-background leading-[1.06] tracking-[-0.02em]">
            Cookie Policy
          </h1>
          <p className="mt-6 text-on-background/70 leading-relaxed">
            This Cookie Policy explains how Plaude (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar
            technologies to recognize you when visiting our website,{" "}
            <Link
              href="https://plaude.io"
              className="text-primary-brand underline underline-offset-4"
            >
              https://plaude.io
            </Link>
            .
          </p>
          <p className="mt-4 text-on-background/70 leading-relaxed">
            This policy explains what these technologies are and why we use
            them, as well as your right to control our use of them. Last
            updated: October 2024.
          </p>

          <hr className="border-outline-variant/30 my-12" />
        </FadeUp>

        {/* Cookies Used on Our Website */}
        <FadeUp delay={0.05}>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-8">
              Cookies Used on Our Website
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-on-background mb-3">
                What are Cookies
              </h3>
              <p className="text-on-background/70 leading-relaxed">
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-on-background mb-6">
                Types of Cookies Used on Our Website
              </h3>
              <div className="space-y-5">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.title}
                    className="border-l-2 border-primary-brand pl-5"
                  >
                    <p className="font-semibold text-primary-brand mb-1">
                      {cookie.title}
                    </p>
                    <p className="text-on-background/70 text-sm leading-relaxed">
                      {cookie.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Why We Use Cookies */}
        <FadeUp delay={0.08}>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              Why We Use Cookies
            </h2>
            <p className="text-on-background/70 leading-relaxed mb-4">
              We use first-party and third-party cookies for several reasons.
              Some cookies are required for technical reasons for our website to
              operate, and we refer to these as &ldquo;essential&rdquo; cookies.
              Other cookies enable us to track and target the interests of our
              users to enhance the experience on our online properties, collect
              registration information, log users in, record preferences, and
              track services and pages you have visited.
            </p>
            <p className="text-on-background/70 leading-relaxed">
              Third parties serve cookies through our website for advertising,
              analytics, and other purposes. By checking your browser&apos;s
              settings and support page, you can learn how to manage cookies on
              your browser or device. Your decision not to accept cookies could
              limit your access to some of our services and features.
            </p>
          </section>
        </FadeUp>

        {/* Consent & Changes */}
        <FadeUp delay={0.1}>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              Consent &amp; Changes
            </h2>
            <p className="text-on-background/70 leading-relaxed">
              By continuing to navigate our website without changing your cookie
              settings, you hereby acknowledge and agree to Plaude&apos;s use of
              cookies. We may update this Cookie Policy to reflect changes to
              our cookies. The date at the top of this Cookie Policy will
              indicate when it was last updated.
            </p>
          </section>
        </FadeUp>

        {/* Contact Card */}
        <FadeUp delay={0.12}>
          <div className="rounded-2xl bg-surface-lowest p-8 atmospheric-shadow mb-20">
            <h3 className="text-xl font-bold text-on-background mb-3">
              Contact
            </h3>
            <p className="text-on-background/70 text-sm leading-relaxed mb-6">
              If you have any questions about our use of cookies or other
              technologies, please email us at{" "}
              <Link
                href="mailto:hello@plaude.io"
                className="text-primary-brand underline underline-offset-4"
              >
                hello@plaude.io
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full bg-primary-brand text-on-primary hover:bg-primary-container">
                View Document
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-outline-variant/50 text-on-background hover:bg-surface-low"
              >
                Accept All Cookies
              </Button>
            </div>
          </div>
        </FadeUp>

        {/* Closing Quote */}
        <FadeUp delay={0.14}>
          <div className="text-center py-8">
            <blockquote className="text-xl sm:text-2xl font-medium italic text-on-background leading-[1.5] mb-8 max-w-2xl mx-auto">
              &ldquo;We believe that privacy is the ultimate luxury. In our
              digital ledger, every byte of data is treated with the same
              sovereign respect as your capital.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face"
                alt="Elena Voss"
                width={44}
                height={44}
                className="rounded-full object-cover w-11 h-11"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-on-background">
                  Elena Voss
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-on-background/50">
                  Chief Privacy Officer
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
