"use client";

import Link from "next/link";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

const tocLinks = [
  { num: "1.", label: "Acceptance" },
  { num: "2.", label: "Use of Services" },
  { num: "3.", label: "Property Rights" },
  { num: "4.", label: "Privacy" },
  { num: "5.", label: "Termination" },
  { num: "6.", label: "Disclaimers" },
  { num: "7.", label: "Liability" },
  { num: "8.", label: "Governing Law" },
  { num: "9.", label: "Changes" },
];

const articles = [
  {
    num: "ARTICLE 01",
    title: "Acceptance of Terms",
    content: [
      "1.1. Agreement: By using our Services, you agree to these Terms and our Privacy Policy. If you do not agree with any of these Terms, please refrain from using our Services.",
    ],
  },
  {
    num: "ARTICLE 02",
    title: "Use of Services",
    content: [
      "2.1. Eligibility: You must be at least 18 years old and legally able to enter these Terms. By using our Services, you represent and warrant that you meet these requirements.",
      "2.2. Account Registration: To access certain features of our Services, you will need to register an account. You are responsible for providing accurate and complete information during the registration process.",
      "2.3. User Content: You are solely responsible for any content you post, submit, or share on our Services. You agree not to post or share content that violates our guidelines or any applicable laws.",
      "2.4. Prohibited Activities: You agree not to engage in any activities that may disrupt, damage, or interfere with the proper functioning of our Services or the experience of other users.",
    ],
  },
  {
    num: "ARTICLE 03",
    title: "Intellectual Property",
    content: [
      "3.1. Ownership: All intellectual property rights related to our Services, including but not limited to copyrights, trademarks, and trade secrets belong to Plaude Inc. You may not use our intellectual property without our express permission.",
      "3.2. User License: We grant you a limited, non-exclusive, non-transferable license to use our Services for personal, non-commercial purposes. This license is revocable at any time.",
    ],
  },
  {
    num: "ARTICLE 04",
    title: "Privacy",
    content: [
      "4.1. Data Collection: We collect and use your personal information according to our Privacy Policy. By using our Services, you consent to the collection and use of your data as described in the Privacy Policy.",
    ],
  },
  {
    num: "ARTICLE 05",
    title: "Termination",
    content: [
      "5.1. Termination by Plaude: We reserve the right to terminate or suspend your access to our Services at our discretion, with or without notice, for any reason, including if we believe you have violated these Terms.",
      "5.2. Termination by You: You may stop using our Services at any time.",
    ],
  },
  {
    num: "ARTICLE 06",
    title: "Disclaimers",
    content: [
      "6.1. No Warranty: Our Services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. We do not guarantee the accuracy, reliability, or availability of our Services.",
    ],
  },
  {
    num: "ARTICLE 07",
    title: "Limitation of Liability",
    content: [
      "7.1. Indirect Damages: In no event shall Plaude Inc. be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
    ],
  },
  {
    num: "ARTICLE 08",
    title: "Governing Law and Dispute Resolution",
    content: [
      "8.1. Governing Law: These Terms are governed by and construed in accordance with the laws of California, USA.",
      "8.2. Dispute Resolution: Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of California, USA.",
    ],
  },
  {
    num: "ARTICLE 09",
    title: "Changes to Terms",
    content: [
      "9.1. Modification: We reserve the right to modify these Terms at any time. Updates to the Terms will be posted on our Services. Your continued use of our Services after the effective date of the updated Terms constitutes your acceptance of the changes.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <SectionLabel>Legal Documentation</SectionLabel>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-background/40">
              Version 1.00 / Last Updated{" "}
              <span className="text-on-background/70">October 24, 2024</span>
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-brand leading-[1.02] tracking-[-0.03em]">
            Terms of Use
          </h1>
          <hr className="border-outline-variant/30 mt-8 mb-0" />
        </FadeUp>

        {/* Two-column layout */}
        <div className="mt-12 md:grid md:grid-cols-[240px_1fr] md:gap-16">
          {/* Sidebar TOC */}
          <FadeUp delay={0.05}>
            <aside className="md:sticky md:top-28 md:self-start mb-10 md:mb-0">
              <nav>
                <ul className="space-y-2">
                  {tocLinks.map((link) => (
                    <li key={link.num} className="flex gap-2 text-sm">
                      <span className="text-on-background/30 font-medium w-5 shrink-0">
                        {link.num}
                      </span>
                      <span className="text-on-background/50 uppercase tracking-[0.08em] text-xs font-semibold hover:text-on-background transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 pt-8 border-t border-outline-variant/20">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-background/40 mb-2">
                  Inquiries
                </p>
                <p className="text-xs text-on-background/50 leading-relaxed">
                  Questions regarding these terms may be directed to{" "}
                  <Link
                    href="mailto:admin@plaude.io"
                    className="text-primary-brand underline underline-offset-4"
                  >
                    admin@plaude.io
                  </Link>
                </p>
              </div>
            </aside>
          </FadeUp>

          {/* Main content */}
          <FadeUp delay={0.08}>
            <div>
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-xl font-bold text-primary-brand tracking-[-0.01em] mb-4">
                  Introduction
                </h2>
                <p className="text-on-background/70 leading-relaxed text-sm">
                  Welcome to Plaude Inc. (&ldquo;Plaude,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms of Use
                  (&ldquo;Terms&rdquo;) govern your access to and use of our web
                  and mobile applications (collectively, the
                  &ldquo;Services&rdquo;). By accessing or using our Services,
                  you agree to comply with and be bound by these Terms. If you
                  do not agree to these Terms, please do not use our Services.
                </p>
              </section>

              {/* Articles */}
              {articles.map((article) => (
                <section key={article.num} className="mb-12">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-on-background/40 mb-2">
                    {article.num}
                  </p>
                  <h2 className="text-xl font-bold text-primary-brand tracking-[-0.01em] mb-4">
                    {article.title}
                  </h2>
                  {article.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-on-background/70 leading-relaxed text-sm mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              ))}

              {/* Contact Us */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-primary-brand tracking-[-0.01em] mb-4">
                  Contact Us
                </h2>
                <p className="text-on-background/70 leading-relaxed text-sm mb-4">
                  If you have any questions, concerns, or feedback regarding
                  these Terms, please contact us at{" "}
                  <Link
                    href="mailto:admin@plaude.io"
                    className="text-primary-brand underline underline-offset-4"
                  >
                    admin@plaude.io
                  </Link>
                </p>
                <p className="text-on-background/70 leading-relaxed text-sm">
                  Thank you for using Plaude Inc.&apos;s Services. We hope you enjoy
                  our platform.
                </p>
              </section>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
