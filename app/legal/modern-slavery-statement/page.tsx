"use client";

import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const sections = [
  {
    num: "01.",
    label: "Our Business",
    content: (
      <p className="text-on-background/70 leading-relaxed text-sm">
        Plaude is a fintech company specializing in innovative financial
        transaction solutions. We operate primarily in the United States,
        focusing on providing efficient, secure, and accessible financial
        services to a diverse range of customers.
      </p>
    ),
  },
  {
    num: "02.",
    label: "Policies",
    content: (
      <p className="text-on-background/70 leading-relaxed text-sm">
        Plaude is dedicated to ensuring that there is no modern slavery or human
        trafficking in any part of our business or supply chains. Our
        Anti-slavery and Human Trafficking Policy are a testament to our
        commitment to ethical business practices and human rights.
      </p>
    ),
  },
  {
    num: "03.",
    label: "Due Diligence",
    content: (
      <div>
        <p className="text-on-background/70 leading-relaxed text-sm mb-6">
          To mitigate risks, Plaude has implemented comprehensive due diligence
          processes across our entire operational infrastructure.
        </p>
        <div className="space-y-4">
          {[
            {
              num: "03.1",
              text: "Comprehensive risk assessments in our supply chains.",
            },
            {
              num: "03.2",
              text: "Regular audits and reviews of our suppliers and partners.",
            },
            {
              num: "03.3",
              text: "Strict vetting procedures for all new suppliers.",
            },
            {
              num: "03.4",
              text: "Reporting of unethical conduct through our whistleblower policy.",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 items-start">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-primary-brand shrink-0 mt-0.5">
                {item.num}
              </span>
              <p className="text-on-background/70 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "04.",
    label: "Standards",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold text-on-background mb-3">
            Supplier Adherence
          </h3>
          <p className="text-on-background/70 leading-relaxed text-sm">
            We have a zero-tolerance approach to slavery and human trafficking
            and expect all our suppliers and contractors to uphold our ethical
            standards. Compliance with these standards is a prerequisite for any
            business partnership with Plaude.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-on-background mb-3">Training</h3>
          <p className="text-on-background/70 leading-relaxed text-sm">
            We provide targeted training to our employees to ensure they
            understand the risks of modern slavery and human trafficking in our
            supply chains and business and are equipped to identify and report
            potential breaches of our policies.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "05.",
    label: "Effectiveness",
    content: (
      <div>
        <p className="text-on-background/70 leading-relaxed text-sm mb-8">
          Our effectiveness in combating slavery and human trafficking is
          measured by specific key performance indicators monitored by our
          leadership team.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "Metric A.",
              title: "Number of suppliers audited annually",
            },
            {
              label: "Metric B.",
              title: "Employee participation in training",
            },
            {
              label: "Metric C.",
              title: "Investigations in response to concerns",
            },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-surface-lowest p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand mb-2">
                {metric.label}
              </p>
              <p className="text-on-background/70 text-sm leading-relaxed">
                {metric.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "06.",
    label: "Action",
    content: (
      <div className="space-y-6">
        <p className="text-on-background/70 leading-relaxed text-sm">
          Further Actions: Plaude is committed to continuously reviewing and
          enhancing our practices to ensure we effectively combat modern slavery
          and human trafficking.
        </p>
        <p className="text-on-background/70 leading-relaxed text-sm">
          This statement is made under the relevant provisions of the United
          States&apos; laws and regulations concerning modern slavery and human
          trafficking and constitutes our company&apos;s statement for the financial
          year ending 2023.
        </p>
      </div>
    ),
  },
];

export default function ModernSlaveryStatementPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionLabel>Corporate Governance</SectionLabel>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-[3rem] font-bold text-on-background leading-[1.08] tracking-[-0.02em] max-w-2xl">
            Modern Slavery &amp; Human Rights Statement
          </h1>
          <p className="mt-6 text-on-background/70 leading-relaxed max-w-2xl">
            Introduction: At Plaude, we uphold the highest standards of ethics
            and responsibility in all aspects of our operations. This Modern
            Slavery Statement underscores our unwavering commitment to
            preventing modern slavery and human trafficking in our business
            activities and supply chains.
          </p>
          <hr className="border-outline-variant/30 mt-12" />
        </FadeUp>

        {/* Numbered Sections */}
        <div>
          {sections.map((section, idx) => (
            <FadeUp key={section.num} delay={0.04 * (idx + 1)}>
              <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12 py-12 border-b border-outline-variant/20">
                <div className="mb-6 md:mb-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-brand">
                    {section.num} {section.label}
                  </p>
                </div>
                <div>{section.content}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Signature */}
        <FadeUp delay={0.3}>
          <div className="py-16 text-center md:text-left">
            <p className="font-serif italic text-3xl text-primary-brand mb-3">
              Julian V. Plaude
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-on-background mb-1">
              Julian V. Plaude
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-background/50">
              Founder &amp; CEO
            </p>
          </div>
        </FadeUp>

        {/* Document Download */}
        <FadeUp delay={0.32}>
          <div className="rounded-2xl bg-surface-lowest p-6 atmospheric-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold text-on-background text-sm mb-1">
                  Modern Slavery Statement 2023
                </p>
                <p className="text-xs text-on-background/50">
                  Plaude_Compliance_Reporting_FY23.pdf
                </p>
              </div>
              <div className="flex gap-3">
                <Button className="rounded-full bg-primary-brand text-on-primary hover:bg-primary-container text-sm gap-2">
                  <Eye className="w-4 h-4" />
                  View Document
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-outline-variant/50 text-on-background hover:bg-surface-low text-sm gap-2"
                >
                  <Download className="w-4 h-4" />
                  Save PDF
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
