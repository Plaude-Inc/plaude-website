"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const COUNTRIES = [
  "United States of America",
  "Nigeria",
  "India",
  "Canada",
  "United Kingdom",
];

function getUrl(country: string): string {
  if (country === "Nigeria") {
    return "https://ui.web.plaude.io/";
  }
  return "https://ui.app.plaude.io/";
}

export default function LoginPage() {
  const [country, setCountry] = React.useState("");

  function handleContinue() {
    if (!country) return;
    window.location.href = getUrl(country);
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-on-background tracking-[-0.03em] leading-[1.05]">
              Welcome back
            </h1>
          </div>

          {/* Right — form */}
          <div>
            <label
              htmlFor="country-select"
              className="block text-sm text-on-background/70 mb-2"
            >
              Which country is your business based?
            </label>
            <div className="relative">
              <select
                id="country-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full appearance-none rounded-xl border border-outline-variant/40 bg-white px-4 py-3 pr-10 text-sm text-on-background/70 focus:outline-none focus:border-primary-brand/40 transition-colors"
              >
                <option value="" disabled>
                  Select your country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-on-background/40" />
            </div>

            <button
              onClick={handleContinue}
              disabled={!country}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary-brand text-on-primary hover:bg-primary-container h-11 px-8 text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
