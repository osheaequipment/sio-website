// SEO metadata for the Current Inventory page (listing all equipment)

import { listings } from "./data";

const SITE_URL = "https://www.osheaequipment.com";

export const metadata = {
  title: "Amphibious Excavators & Water Trucks for Sale / Rent | Current Inventory",
  description:
    "Browse our current inventory of amphibious excavators, marsh buggies, and Oshkosh 6x6 water trucks for rent or sale. Long-reach Caterpillar amphibious excavators (CAT 307E2, 312E, 330) with EIK undercarriages. Texas-based with nationwide delivery.",
  keywords: [
    "amphibious excavator for sale",
    "amphibious excavator for rent",
    "marsh buggy for sale",
    "marsh buggy rental",
    "long reach excavator",
    "CAT amphibious excavator",
    "Caterpillar 307E2 amphibious",
    "Caterpillar 312E amphibious",
    "Caterpillar 330 amphibious",
    "EIK amphibious undercarriage",
    "EIK long reach boom",
    "swamp buggy excavator",
    "wetland excavator rental",
    "dredging excavator",
    "Oshkosh MK23 water truck for sale",
    "heavy equipment Houston Texas",
  ],
  alternates: {
    canonical: "/current-inventory",
  },
  openGraph: {
    title: "Amphibious Excavators & Water Trucks for Sale / Rent | Current Inventory",
    description:
      "Browse our fleet of amphibious excavators, marsh buggies, and Oshkosh water trucks. Long-reach Caterpillar units with EIK undercarriages. Texas-based, nationwide delivery.",
    url: "/current-inventory",
    type: "website",
    images: [
      {
        url: "/2022Cterpillar1.jpeg",
        width: 1200,
        height: 630,
        alt: "2022 Caterpillar 330 amphibious excavator with EIK long reach boom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amphibious Excavators & Water Trucks for Sale / Rent",
    description:
      "Long-reach amphibious excavators, marsh buggies, and Oshkosh 6x6 water trucks available now.",
    images: ["/2022Cterpillar1.jpeg"],
  },
};

// ItemList structured data — tells Google this page is a list of products
const inventoryItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Current Inventory - Amphibious Excavators & Water Trucks",
  description:
    "All amphibious excavators, marsh buggies, and Oshkosh 6x6 water trucks currently available for rent or sale from O'Shea Equipment Company.",
  numberOfItems: listings.length,
  itemListElement: listings.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/current-inventory/${item.id}`,
    name: item.title,
    image: item.images?.[0] ? `${SITE_URL}${item.images[0]}` : undefined,
  })),
};

const inventoryBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Current Inventory", item: `${SITE_URL}/current-inventory` },
  ],
};

export default function InventoryLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inventoryItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inventoryBreadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
