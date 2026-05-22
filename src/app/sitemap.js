// Dynamic sitemap.xml — Next.js auto-generates this at /sitemap.xml on deploy.
// Lists every page so Google can discover and crawl them.

import { listings } from "./current-inventory/data";

const SITE_URL = "https://www.osheaequipment.com";

export default function sitemap() {
  const now = new Date();

  // Static pages
  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/current-inventory`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/current-inventory?category=Amphibious Excavator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/water-truck`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Each inventory item gets its own sitemap entry
  const inventoryPages = listings.map((item) => ({
    url: `${SITE_URL}/current-inventory/${item.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...inventoryPages];
}
