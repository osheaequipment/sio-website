// SEO metadata for the Water Truck page
// This file is automatically detected by Next.js and applied to /water-truck

const SITE_URL = "https://www.osheaequipment.com";

export const metadata = {
  title: "Oshkosh 6x6 Water Truck Rental & Sales | 4,000 Gallon Off-Road",
  description:
    "Oshkosh MK23 6x6 off-road water trucks - 4,000 gallon capacity with cab-controlled spray systems for dust suppression, soil compaction, pipeline support, mining, and disaster relief. Custom builds and fleet inventory available.",
  keywords: [
    "Oshkosh water truck",
    "Oshkosh MK23",
    "6x6 water truck",
    "off-road water truck",
    "4000 gallon water truck",
    "dust suppression water truck",
    "water truck rental",
    "water truck for sale",
    "military water truck",
    "pipeline water truck",
    "mining water truck",
    "wildfire support water truck",
    "CAT C12 water truck",
  ],
  alternates: {
    canonical: "/water-truck",
  },
  openGraph: {
    title: "Oshkosh 6x6 Water Truck Rental & Sales | 4,000 Gallon Off-Road",
    description:
      "Heavy-duty Oshkosh MK23 6x6 off-road water trucks - 4,000 gallon capacity, cab-controlled spray, CAT C12 diesel. Built for dust suppression, civil construction, pipeline, and wildfire support.",
    url: "/water-truck",
    type: "website",
    images: [
      {
        url: "/waterTruck1.jpg",
        width: 1200,
        height: 630,
        alt: "Oshkosh 6x6 4000 gallon off-road water truck on a job site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oshkosh 6x6 Water Truck Rental & Sales | 4,000 Gallon Off-Road",
    description:
      "Oshkosh MK23 6x6 off-road water trucks built for dust suppression, soil compaction, and remote job site support.",
    images: ["/waterTruck1.jpg"],
  },
};

// Product schema for the Oshkosh 6x6 water truck offering
const waterTruckProductJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Product", "Vehicle"],
  name: "Oshkosh MK23 6x6 Off-Road Water Truck",
  description:
    "Oshkosh MK23 6x6 off-road water truck with 4,000 gallon epoxy-coated tank, CAT C-12 diesel engine, hydraulic 750 GPM Berkley pump, and 5 cab-controlled spray heads. Engineered for dust suppression, soil compaction, pipeline support, mining, and disaster relief.",
  image: [
    `${SITE_URL}/waterTruck1.jpg`,
    `${SITE_URL}/waterTruck2.jpg`,
    `${SITE_URL}/waterTruck3.jpg`,
  ],
  brand: { "@type": "Brand", name: "Oshkosh" },
  manufacturer: { "@type": "Organization", name: "Oshkosh" },
  model: "MK23",
  category: "Off-Road Water Truck",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Drive Type", value: "Full-Time 6x6 All-Wheel Drive" },
    { "@type": "PropertyValue", name: "Engine", value: "CAT C-12 Diesel @ 410 HP" },
    { "@type": "PropertyValue", name: "Transmission", value: "7-Speed Allison Automatic" },
    { "@type": "PropertyValue", name: "Tank Capacity", value: "4,000 gallons" },
    { "@type": "PropertyValue", name: "Pump", value: "Berkley 4x3 / 750 GPM hydraulic" },
    { "@type": "PropertyValue", name: "GVWR", value: "62,000 lb" },
  ],
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/water-truck`,
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      description: "Call for pricing",
    },
    seller: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United States",
  },
};

const waterTruckBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Water Trucks", item: `${SITE_URL}/water-truck` },
  ],
};

export default function WaterTruckLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waterTruckProductJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waterTruckBreadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
