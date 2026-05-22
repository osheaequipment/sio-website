// Dynamic SEO metadata for each individual inventory item page.
// Each piece of equipment gets a unique title, description, and Open Graph image
// based on its data in current-inventory/data.js.

import { getListingById, listings } from "../data";

const SITE_URL = "https://www.osheaequipment.com";

// Tell Next.js which inventory ids exist so it can pre-render them
export async function generateStaticParams() {
  return listings.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const item = getListingById(params?.id);

  if (!item) {
    return {
      title: "Equipment Not Found",
      description: "The requested equipment listing could not be found.",
    };
  }

  const isAmphibious = item.category === "Amphibious Excavator";
  const isWaterTruck = item.category === "Water Truck";

  // Build a keyword-rich title and description per equipment item
  const categoryWords = isAmphibious
    ? "Amphibious Excavator / Marsh Buggy"
    : isWaterTruck
    ? "Off-Road 6x6 Water Truck"
    : item.category;

  const title = `${item.title} ${categoryWords} for Sale / Rent`;

  const reach = item?.categorySpecific?.["Arm Length"]
    ? `${item.categorySpecific["Arm Length"]} long reach`
    : null;
  const hours = item?.specs?.hours ? `${item.specs.hours.toLocaleString()} hours` : null;
  const capacity = item?.capacities?.Capacity ? `${item.capacities.Capacity} capacity` : null;
  const location = item.location || "Texas";

  const descParts = [
    `${item.title} ${categoryWords.toLowerCase()} available for sale or rent from O'Shea Equipment Company.`,
    reach ? `Features ${reach}.` : null,
    capacity ? `${capacity}.` : null,
    hours ? `${hours}.` : null,
    `Located in ${location}. Nationwide shipping available. Contact Shamus O'Shea for pricing and availability.`,
  ]
    .filter(Boolean)
    .join(" ");

  const firstImage = item.images?.[0];
  const imageUrl = firstImage ? `${SITE_URL}${firstImage}` : `${SITE_URL}/bannerImg.png`;
  const canonicalPath = `/current-inventory/${item.id}`;

  return {
    title,
    description: descParts,
    keywords: [
      item.title,
      `${item.specs?.year} ${item.specs?.manufacturer} ${item.specs?.model}`.trim(),
      isAmphibious ? "amphibious excavator" : null,
      isAmphibious ? "marsh buggy" : null,
      isAmphibious ? "long reach excavator" : null,
      isAmphibious ? "dredging excavator" : null,
      isAmphibious ? "wetland excavator" : null,
      isWaterTruck ? "Oshkosh water truck" : null,
      isWaterTruck ? "6x6 water truck" : null,
      isWaterTruck ? "4000 gallon water truck" : null,
      isWaterTruck ? "dust suppression water truck" : null,
      "O'Shea Equipment Company",
      "Shamus O'Shea",
      location,
    ].filter(Boolean),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description: descParts,
      url: canonicalPath,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${item.title} - ${categoryWords}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: descParts,
      images: [imageUrl],
    },
  };
}

// Build a Product + Vehicle JSON-LD schema per equipment item
function buildProductJsonLd(item) {
  if (!item) return null;

  const isAmphibious = item.category === "Amphibious Excavator";
  const categoryName = isAmphibious
    ? "Amphibious Excavator / Marsh Buggy"
    : item.category;

  const images = (item.images || []).map((src) => `${SITE_URL}${src}`);

  const additionalProps = [];
  if (item.specs?.hours) additionalProps.push({ "@type": "PropertyValue", name: "Hours", value: item.specs.hours });
  if (item.specs?.serialNumber) additionalProps.push({ "@type": "PropertyValue", name: "Serial Number", value: item.specs.serialNumber });
  if (item.categorySpecific?.["Arm Length"]) additionalProps.push({ "@type": "PropertyValue", name: "Arm Length", value: item.categorySpecific["Arm Length"] });
  if (item.categorySpecific?.["Boom Length"]) additionalProps.push({ "@type": "PropertyValue", name: "Boom Length", value: item.categorySpecific["Boom Length"] });
  if (item.categorySpecific?.["Operating Weight"]) additionalProps.push({ "@type": "PropertyValue", name: "Operating Weight", value: item.categorySpecific["Operating Weight"] });
  if (item.chassis?.Amphibious) additionalProps.push({ "@type": "PropertyValue", name: "Amphibious", value: item.chassis.Amphibious });
  if (item.capacities?.Capacity) additionalProps.push({ "@type": "PropertyValue", name: "Tank Capacity", value: item.capacities.Capacity });
  if (item.powertrain?.Engine) additionalProps.push({ "@type": "PropertyValue", name: "Engine", value: item.powertrain.Engine });
  if (item.powertrain?.Horsepower) additionalProps.push({ "@type": "PropertyValue", name: "Horsepower", value: item.powertrain.Horsepower });

  return {
    "@context": "https://schema.org",
    "@type": ["Product", "Vehicle"],
    name: `${item.title} ${categoryName}`,
    sku: item.id,
    productID: item.specs?.serialNumber || item.id,
    image: images.length > 0 ? images : undefined,
    description: item.description || `${item.title} ${categoryName} available for sale or rent from O'Shea Equipment Company.`,
    category: categoryName,
    brand: {
      "@type": "Brand",
      name: item.specs?.manufacturer || "Caterpillar",
    },
    manufacturer: item.specs?.manufacturer
      ? { "@type": "Organization", name: item.specs.manufacturer }
      : undefined,
    model: item.specs?.model,
    vehicleModelDate: item.specs?.year ? String(item.specs.year) : undefined,
    productionDate: item.specs?.year ? String(item.specs.year) : undefined,
    mileageFromOdometer: item.specs?.hours
      ? { "@type": "QuantitativeValue", value: item.specs.hours, unitText: "operating hours" }
      : undefined,
    itemCondition:
      item.specs?.condition === "Used"
        ? "https://schema.org/UsedCondition"
        : "https://schema.org/NewCondition",
    additionalProperty: additionalProps.length > 0 ? additionalProps : undefined,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/current-inventory/${item.id}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: item.priceText || "Call for price",
      },
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: "United States",
    },
  };
}

function buildBreadcrumbJsonLd(item) {
  if (!item) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Current Inventory", item: `${SITE_URL}/current-inventory` },
      { "@type": "ListItem", position: 3, name: item.title, item: `${SITE_URL}/current-inventory/${item.id}` },
    ],
  };
}

export default function InventoryItemLayout({ children, params }) {
  const item = getListingById(params?.id);
  const productSchema = buildProductJsonLd(item);
  const breadcrumbSchema = buildBreadcrumbJsonLd(item);

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {children}
    </>
  );
}
