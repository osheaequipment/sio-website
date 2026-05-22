import Script from "next/script";
import Layout from "@/components/Layout";
import "./globals.css";
import 'antd/dist/reset.css';

const SITE_URL = "https://www.osheaequipment.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amphibious Excavators & Marsh Buggy Rentals | O'Shea Equipment Company",
    template: "%s | O'Shea Equipment Company",
  },
  description:
    "O'Shea Equipment Company specializes in amphibious excavator and marsh buggy rentals and sales for dredging, wetland construction, pipeline, and civil projects. Long-reach Caterpillar amphibious excavators and Oshkosh 6x6 water trucks available nationwide.",
  keywords: [
    "amphibious excavator",
    "amphibious excavator rental",
    "amphibious excavator for sale",
    "marsh buggy",
    "marsh buggy rental",
    "swamp buggy excavator",
    "dredging equipment",
    "dredging excavator",
    "long reach excavator",
    "wetland excavator",
    "Oshkosh water truck",
    "6x6 water truck",
    "4000 gallon water truck",
    "off-road water truck",
    "dust suppression water truck",
    "Shamus O'Shea",
    "O'Shea Equipment Company",
    "OEC",
    "Caterpillar amphibious excavator",
    "EIK amphibious undercarriage",
    "pipeline construction equipment",
    "Houston Texas heavy equipment rental",
  ],
  authors: [{ name: "Shamus O'Shea", url: SITE_URL }],
  creator: "O'Shea Equipment Company",
  publisher: "O'Shea Equipment Company",
  applicationName: "O'Shea Equipment Company",
  category: "Heavy Equipment Rental and Sales",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "O'Shea Equipment Company",
    title: "Amphibious Excavators & Marsh Buggy Rentals | O'Shea Equipment Company",
    description:
      "Long-reach amphibious excavators, marsh buggies, and Oshkosh 6x6 water trucks for dredging, wetland construction, pipeline, and civil projects. Nationwide rentals and sales.",
    images: [
      {
        url: "/bannerImg.png",
        width: 1200,
        height: 630,
        alt: "Amphibious excavator on a wetland job site - O'Shea Equipment Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amphibious Excavators & Marsh Buggy Rentals | O'Shea Equipment Company",
    description:
      "Long-reach amphibious excavators, marsh buggies, and Oshkosh 6x6 water trucks. Rentals and sales nationwide.",
    images: ["/bannerImg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// Organization + LocalBusiness structured data - shows OEC in Google with rich details
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "O'Shea Equipment Company",
      alternateName: ["OEC", "O'Shea Equipment", "Oshea Equipment"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo-footer.png`,
      image: `${SITE_URL}/bannerImg.png`,
      description:
        "Specialty heavy equipment company providing amphibious excavator and marsh buggy rentals and sales, plus Oshkosh 6x6 off-road water trucks for dredging, wetland construction, pipeline, and civil projects.",
      founder: {
        "@type": "Person",
        "@id": `${SITE_URL}/#shamus-oshea`,
        name: "Shamus O'Shea",
        jobTitle: "Founder & President",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        email: "shamus@osheaequipment.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "16915 Walden Rd. Suite 310",
        addressLocality: "Montgomery",
        addressRegion: "TX",
        postalCode: "77356",
        addressCountry: "US",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-817-422-1393",
          contactType: "sales",
          email: "shamus@osheaequipment.com",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "O'Shea Equipment Company",
      image: `${SITE_URL}/bannerImg.png`,
      url: SITE_URL,
      telephone: "+1-817-422-1393",
      email: "shamus@osheaequipment.com",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16915 Walden Rd. Suite 310",
        addressLocality: "Montgomery",
        addressRegion: "TX",
        postalCode: "77356",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.3863,
        longitude: -95.6938,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Heavy Equipment Rentals & Sales",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Amphibious Excavators & Marsh Buggies",
          },
          {
            "@type": "OfferCatalog",
            name: "Oshkosh 6x6 Off-Road Water Trucks",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "O'Shea Equipment Company",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Slab:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Organization + LocalBusiness structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
        {/* HubSpot tracking + chat script */}
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/245769545.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
