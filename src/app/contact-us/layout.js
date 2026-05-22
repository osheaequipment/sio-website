// SEO metadata for the Contact Us page

export const metadata = {
  title: "Contact Us - Request a Quote for Amphibious Excavator & Water Truck",
  description:
    "Contact O'Shea Equipment Company for amphibious excavator and marsh buggy rentals, Oshkosh 6x6 water truck quotes, dredging equipment availability, and custom builds. Based in Montgomery, TX. Call +1-817-422-1393 or email shamus@osheaequipment.com.",
  keywords: [
    "contact O'Shea Equipment",
    "amphibious excavator quote",
    "marsh buggy rental quote",
    "water truck rental quote",
    "Shamus O'Shea contact",
    "Montgomery Texas heavy equipment",
    "Houston amphibious excavator rental",
    "heavy equipment rental Texas",
  ],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact O'Shea Equipment Company - Request a Quote",
    description:
      "Request a quote for amphibious excavator and marsh buggy rentals, Oshkosh 6x6 water trucks, or dredging equipment. Montgomery, TX. Nationwide service.",
    url: "/contact-us",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact O'Shea Equipment Company",
    description:
      "Request a quote for amphibious excavator and marsh buggy rentals, Oshkosh 6x6 water trucks, or dredging equipment.",
  },
};

const SITE_URL = "https://www.osheaequipment.com";

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact-us`,
  name: "Contact O'Shea Equipment Company",
  description:
    "Contact page for O'Shea Equipment Company to request quotes for amphibious excavator and marsh buggy rentals, Oshkosh 6x6 water trucks, and dredging equipment.",
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const contactBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: `${SITE_URL}/contact-us` },
  ],
};

export default function ContactUsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
