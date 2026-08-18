import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

/**
 * Public marketing routes. /login is deliberately omitted — it is an
 * application entry point, not content we want indexed.
 */
const STATIC_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/get-started", priority: 0.8, changeFrequency: "monthly" },
  { path: "/learn/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/learn/help-center", priority: 0.7, changeFrequency: "monthly" },
  { path: "/learn/video-tutorials", priority: 0.7, changeFrequency: "monthly" },
  { path: "/company/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/company/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/company/plaude-circle", priority: 0.7, changeFrequency: "monthly" },
  { path: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms-of-use", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  {
    path: "/legal/modern-slavery-statement",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const pages = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: buildDate,
    changeFrequency,
    priority,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/learn/blog/${post.slug}`,
    // Posts without a recorded publish date fall back to the build date.
    lastModified: post.publishedAt ? new Date(post.publishedAt) : buildDate,
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.8,
  }));

  return [...pages, ...posts];
}
