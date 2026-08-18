import { FadeUp } from "@/components/shared/FadeUp";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-data";
import { SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: { absolute: `Article Not Found — ${SITE_NAME}` } };
  }

  const url = `/learn/blog/${post.slug}`;

  return {
    title: { absolute: `${post.title} — Plaude Journal` },
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: SITE_NAME,
      section: post.category,
      publishedTime: post.publishedAt,
      images: [{ url: post.heroImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const recommended = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-primary-brand overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
          <FadeUp>
            <Link
              href="/learn/blog"
              className="inline-flex items-center gap-1.5 text-sm text-on-primary/60 hover:text-on-primary transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              Back to Journal
            </Link>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-on-primary/60 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-primary leading-[1.08] tracking-[-0.02em]">
              {post.title}
            </h1>
            <p className="mt-6 text-on-primary/60 leading-relaxed">{post.excerpt}</p>
            <p className="mt-6 text-xs text-on-primary/40">{post.readTime}</p>
          </FadeUp>
        </div>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="rounded-3xl overflow-hidden atmospheric-shadow-lg">
          <Image
            src={post.heroImage}
            alt={post.title}
            width={1024}
            height={576}
            className="w-full aspect-[16/9] object-cover"
            priority
          />
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="prose prose-lg max-w-none text-on-background/80">
              {post.content}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 bg-primary-brand overflow-hidden grain-overlay">
        <FadeUp>
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-on-primary">
              Stay ahead of the curve.
            </h2>
            <p className="mt-4 text-on-primary/70 leading-relaxed">
              Weekly perspectives on global finance, directly to your inbox. No noise, just signal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 h-12 rounded-full px-5 bg-white/10 text-on-primary placeholder:text-on-primary/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm backdrop-blur-sm"
              />
              <Button className="rounded-full bg-on-primary text-primary-brand hover:bg-on-primary/90 h-12 px-8 text-sm font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Recommended */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-semibold text-on-background mb-8">Recommended for You</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {recommended.map((rec) => (
                <Link key={rec.slug} href={`/learn/blog/${rec.slug}`} className="group">
                  <div className="rounded-2xl overflow-hidden atmospheric-shadow">
                    <Image
                      src={rec.heroImage}
                      alt={rec.title}
                      width={400}
                      height={250}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-on-background group-hover:text-primary-brand transition-colors leading-snug">
                    {rec.title}
                  </h4>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
