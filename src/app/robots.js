// Dynamic robots.txt — Next.js auto-generates this at /robots.txt on deploy.
// Tells search engine crawlers what to index and where the sitemap lives.

const SITE_URL = "https://www.osheaequipment.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
