/**
 * Canonical site configuration.
 *
 * SITE_URL is the production origin used for canonical URLs, the sitemap, and
 * absolute OpenGraph image paths. Override it per-environment (preview
 * deployments, staging) with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://plaude.io";

export const SITE_NAME = "Plaude";

export const SITE_DESCRIPTION =
  "Multi-currency accounts, automated cross-border payouts, and full financial visibility — all from one platform.";

/** Default social preview image, used when a page has no image of its own. */
export const SITE_OG_IMAGE = {
  url: "/dashboard-preview.png",
  width: 1440,
  height: 1024,
  alt: "The Plaude platform dashboard",
};
