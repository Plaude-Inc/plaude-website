"use client";

import { useState } from "react";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";

const categories = [
  "All",
  "Press",
  "Global Payments",
  "Business Finance",
  "Product Updates",
  "Think Pieces",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const [post1, post2, post3, post4, ...rest] = filtered;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>Plaude Journal</SectionLabel>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-on-background leading-[1.06] tracking-[-0.02em]">
              Insights for businesses that move{" "}
              <span className="text-primary-brand italic">globally.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Category tabs */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary-brand text-on-primary"
                      : "bg-surface-lowest text-on-background/60 hover:bg-surface-low"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <FadeUp>
              <p className="text-on-background/40 text-sm py-16 text-center">
                No posts in this category yet.
              </p>
            </FadeUp>
          ) : activeCategory === "All" ? (
            /* Magazine bento layout — only shown for "All" */
            <>
              <FadeUp>
                {/* Row 1: Large image left, article text right */}
                <div className="grid md:grid-cols-5 gap-6 mb-6">
                  <div className="md:col-span-3">
                    <Link href={`/learn/blog/${post1.slug}`} className="group block">
                      <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg h-full">
                        <Image
                          src={post1.heroImage}
                          alt={post1.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                      {post1.category}
                    </span>
                    <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-on-background leading-tight">
                      {post1.title}
                    </h3>
                    <p className="mt-3 text-sm text-on-background/60 leading-relaxed">
                      {post1.excerpt}
                    </p>
                    <Link
                      href={`/learn/blog/${post1.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-4 hover:gap-2 transition-all"
                    >
                      {post1.readTime} <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                {/* Row 2: Article text left, image right */}
                <div className="grid md:grid-cols-5 gap-6 mb-6">
                  <div className="md:col-span-3 flex flex-col justify-end">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                      {post2.category}
                    </span>
                    <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-on-background leading-tight">
                      {post2.title}
                    </h3>
                    <p className="mt-3 text-sm text-on-background/60 leading-relaxed">
                      {post2.excerpt}
                    </p>
                    <Link
                      href={`/learn/blog/${post2.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-4 hover:gap-2 transition-all"
                    >
                      {post2.readTime} <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <Link href={`/learn/blog/${post2.slug}`} className="group block">
                      <div className="rounded-3xl overflow-hidden atmospheric-shadow h-full">
                        <Image
                          src={post2.heroImage}
                          alt={post2.title}
                          width={500}
                          height={600}
                          className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                {/* Row 3: Two cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Link href={`/learn/blog/${post3.slug}`} className="group block">
                    <div className="relative rounded-3xl overflow-hidden atmospheric-shadow h-full min-h-[240px]">
                      <Image
                        src={post3.heroImage}
                        alt={post3.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-brand/90 via-primary-brand/40 to-transparent" />
                      <div className="relative z-10 p-7 flex flex-col justify-end h-full">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-on-primary/60">
                          {post3.category}
                        </span>
                        <h4 className="mt-2 text-lg font-semibold text-on-primary leading-snug">
                          {post3.title}
                        </h4>
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-col justify-center">
                    <div className="flex gap-5 items-start">
                      <div className="shrink-0">
                        <Link href={`/learn/blog/${post4.slug}`} className="group block">
                          <div className="w-32 h-32 rounded-2xl overflow-hidden atmospheric-shadow">
                            <Image
                              src={post4.heroImage}
                              alt={post4.title}
                              width={300}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </Link>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                          {post4.category}
                        </span>
                        <h4 className="mt-2 text-base font-semibold text-on-background leading-snug">
                          {post4.title}
                        </h4>
                        <p className="mt-2 text-sm text-on-background/50 leading-relaxed">
                          {post4.excerpt}
                        </p>
                        <Link
                          href={`/learn/blog/${post4.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-3 hover:gap-2 transition-all"
                        >
                          Read Article <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {rest.length > 0 && (
                <FadeUp delay={0.3}>
                  {/* Row 4: Remaining posts */}
                  <div className="grid sm:grid-cols-3 gap-6">
                    {rest.map((post) => (
                      <Link key={post.slug} href={`/learn/blog/${post.slug}`} className="group">
                        <div className="rounded-2xl overflow-hidden atmospheric-shadow">
                          <Image
                            src={post.heroImage}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="mt-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                            {post.category}
                          </span>
                          <h4 className="mt-2 text-base font-semibold text-on-background leading-snug group-hover:text-primary-brand transition-colors">
                            {post.title}
                          </h4>
                          <p className="mt-2 text-sm text-on-background/50 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-3 group-hover:gap-2 transition-all">
                            {post.readTime} <ArrowRight className="size-3.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </FadeUp>
              )}
            </>
          ) : (
            /* Uniform grid for filtered categories */
            <FadeUp>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <Link key={post.slug} href={`/learn/blog/${post.slug}`} className="group">
                    <div className="rounded-2xl overflow-hidden atmospheric-shadow">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-brand">
                        {post.category}
                      </span>
                      <h4 className="mt-2 text-base font-semibold text-on-background leading-snug group-hover:text-primary-brand transition-colors">
                        {post.title}
                      </h4>
                      <p className="mt-2 text-sm text-on-background/50 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-brand mt-3 group-hover:gap-2 transition-all">
                        {post.readTime} <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeUp>
          )}
        </div>
      </section>
    </div>
  );
}
