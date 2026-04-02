"use client";

import Link from "next/link";
import { FadeUp } from "@/components/shared/FadeUp";

const tocItems = [
  { num: "01.", label: "Information Collection" },
  { num: "02.", label: "Use of Information" },
  { num: "03.", label: "Information Sharing" },
  { num: "04.", label: "Data Security" },
  { num: "05.", label: "Cookies and Tracking" },
  { num: "06.", label: "Minor Privacy" },
  { num: "07.", label: "Changes &amp; Contact" },
];

const useOfInfoItems = [
  {
    title: "Personalization",
    description:
      "Customizing your dashboard and financial insights based on your unique transactional patterns.",
  },
  {
    title: "Processing Transactions",
    description:
      "Facilitating the secure movement of capital and real-time ledger updates across borders.",
  },
  {
    title: "Fraud Prevention",
    description:
      "Using advanced analytics to monitor for suspicious activity and unauthorized access attempts.",
  },
  {
    title: "Legal Compliance",
    description:
      "Meeting mandatory AML (Anti-Money Laundering) and KYC regulatory requirements.",
  },
];

const complianceBadges = [
  "SOC2 TYPE II COMPLIANT",
  "PCI DSS LEVEL 1",
  "ADVANCED FIREWALLS",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          {/* Header */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-on-background/40 mb-5">
            Last Updated: October 24, 2024
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-on-background leading-[1.06] tracking-[-0.02em]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-on-background/70 leading-relaxed">
            Welcome to Plaude. We are committed to transparency and the security
            of your financial information. This document describes how we handle
            your personal data in compliance with financial laws and global
            regulations.
          </p>
        </FadeUp>

        {/* Table of Contents */}
        <FadeUp delay={0.05}>
          <div className="mt-10 rounded-2xl bg-surface-lowest p-6 atmospheric-shadow">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-on-background/40 mb-4">
              Contents
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tocItems.map((item) => (
                <div key={item.num} className="flex gap-2 text-sm">
                  <span className="text-on-background/40 font-medium shrink-0">
                    {item.num}
                  </span>
                  <span
                    className="text-on-background/70"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Section 01 — Information Collection */}
        <FadeUp delay={0.08}>
          <section className="mt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              01. Information Collection
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-8">
              Identifying Data
            </h2>
            <p className="text-on-background/70 leading-relaxed mb-8">
              Full legal names, government-issued IDs (passports, driver&apos;s
              licenses), and tax identification numbers required for KYC and
              legal compliance.
            </p>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Transaction Data
            </h3>
            <p className="text-on-background/70 leading-relaxed mb-8">
              Details of payments, transfers, and currency exchanges, including
              account balances and source of funds metadata.
            </p>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Online Data
            </h3>
            <p className="text-on-background/70 leading-relaxed mb-8">
              IP addresses, device fingerprints, operating system details, and
              browser types collected to ensure secure access to your account.
            </p>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Social Media Data
            </h3>
            <p className="text-on-background/70 leading-relaxed mb-8">
              Publicly available information or profile data shared with us when
              you interact with our social channels or link external profiles.
            </p>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Marketing Data
            </h3>
            <p className="text-on-background/70 leading-relaxed">
              Your preferences in receiving marketing communications from us and
              your communication history.
            </p>
          </section>
        </FadeUp>

        {/* Section 02 — Use of Information */}
        <FadeUp delay={0.1}>
          <section className="mt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              02. Use of Information
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-8">
              How We Use Your Data
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useOfInfoItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-surface-lowest p-5"
                >
                  <p className="font-semibold text-on-background mb-2">
                    {item.title}
                  </p>
                  <p className="text-on-background/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Section 03 — Information Sharing */}
        <FadeUp delay={0.1}>
          <section className="mt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              03. Information Sharing
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              How We Share Data
            </h2>
            <p className="text-on-background/70 leading-relaxed mb-6">
              We share data with partners and service providers only when
              essential for the movement of capital or to fulfil legal
              obligations.
            </p>
            <div className="rounded-xl bg-surface-lowest p-5 mb-8">
              <p className="text-on-background/80 text-sm leading-relaxed font-medium">
                Plaude does not sell your Personally Identifiable Information
                (PII) to third parties for marketing purposes.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Service Providers
            </h3>
            <p className="text-on-background/70 leading-relaxed mb-8">
              Cloud hosting, identity verification services, and banking
              partners who assist in transaction settlement.
            </p>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Regulatory Authorities
            </h3>
            <p className="text-on-background/70 leading-relaxed">
              Disclosure to law enforcement or regulators when required by law
              or to protect legal rights.
            </p>
          </section>
        </FadeUp>

        {/* Section 04 — Data Security */}
        <FadeUp delay={0.1}>
          <section className="mt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              04. Data Security
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              Secured Infrastructure
            </h2>
            <div className="rounded-2xl bg-surface-lowest p-8 atmospheric-shadow">
              <h3 className="text-lg font-semibold text-on-background mb-3">
                Secured Infrastructure
              </h3>
              <p className="text-on-background/70 leading-relaxed mb-6 text-sm">
                Our platform employs secure servers with advanced firewalls. All
                data is protected with AES-256 encryption at rest and TLS 1.3
                in transit to ensure your information remains shielded.
              </p>
              <div className="flex flex-wrap gap-2">
                {complianceBadges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-primary-brand/10 text-primary-brand rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                  >
                    + {badge}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Section 05 — Cookies and Tracking */}
        <FadeUp delay={0.1}>
          <section className="mt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              05. Cookies and Tracking
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              Cookies &amp; Tracking
            </h2>
            <p className="text-on-background/70 leading-relaxed">
              We use cookies to improve your browsing experience and analyze
              site traffic. For detailed information on the types of cookies we
              use and how you can manage your settings, please refer to our full{" "}
              <Link
                href="/legal/cookie-policy"
                className="text-primary-brand underline underline-offset-4"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </section>
        </FadeUp>

        {/* Section 06 — Minor Privacy */}
        <FadeUp delay={0.1}>
          <section className="mt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              06. Minor Privacy
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              Minor Privacy
            </h2>
            <p className="text-on-background/70 leading-relaxed">
              Plaude&apos;s services are not designed for or directed at
              individuals under the age of 18. We do not knowingly collect
              personal information from minors.
            </p>
          </section>
        </FadeUp>

        {/* Section 07 — Changes & Contact */}
        <FadeUp delay={0.1}>
          <section className="mt-16 mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand mb-2">
              07. Changes &amp; Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-background tracking-[-0.02em] mb-6">
              Changes &amp; Contact
            </h2>
            <p className="text-on-background/70 leading-relaxed mb-10">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or regulatory requirements. We encourage you to
              review this page regularly.
            </p>

            <h3 className="text-lg font-semibold text-on-background mb-3">
              Contact Us
            </h3>
            <p className="text-on-background/70 leading-relaxed mb-2">
              If you have any questions, concerns, or feedback regarding these
              Terms, please contact us at{" "}
              <Link
                href="mailto:hello@plaude.io"
                className="text-primary-brand underline underline-offset-4"
              >
                hello@plaude.io
              </Link>
            </p>
            <p className="text-on-background/70 leading-relaxed">
              Thank you for using Plaude Inc.&apos;s Services. We hope you enjoy our
              platform.
            </p>
          </section>
        </FadeUp>
      </div>
    </div>
  );
}
