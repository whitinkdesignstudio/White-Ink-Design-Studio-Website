import type { Metadata } from "next";
import ServicesHubClient from "@/components/services/ServicesHubClient";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services & Capabilities | White Ink Design Studio | Ahmedabad & London",
  description:
    "One studio, five ways to grow your brand. Explore Website Design (50+ built), Brand Identity (400+ launched), Growth Marketing, Social & Content, and AI WhatsApp Automation.",
  openGraph: {
    title: "Services & Capabilities | White Ink Design Studio",
    description:
      "Website design, branding, growth marketing, content production, and AI automation for healthcare and D2C brands in India, the UK and beyond.",
    url: "https://whiteinkdesignstudio.com/services",
    siteName: "White Ink Design Studio",
    locale: "en_IE",
    type: "website",
  },
  alternates: {
    canonical: "https://whiteinkdesignstudio.com/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://whiteinkdesignstudio.com/services#webpage",
        "url": "https://whiteinkdesignstudio.com/services",
        "name": "Services & Capabilities | White Ink Design Studio",
        "description":
          "Explore White Ink's 5 core pillars: Website Design, Brand Identity, Performance Marketing, Social Media Production, and AI WhatsApp Automation.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://whiteinkdesignstudio.com/#website",
          "url": "https://whiteinkdesignstudio.com",
          "name": "White Ink Design Studio",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://whiteinkdesignstudio.com/services#itemlist",
        "name": "White Ink Design Studio Service Pillars",
        "itemListElement": SERVICES_DATA.map((pillar, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": pillar.title,
          "description": pillar.tagline,
          "url": `https://whiteinkdesignstudio.com/services/${pillar.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://whiteinkdesignstudio.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://whiteinkdesignstudio.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://whiteinkdesignstudio.com/services",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://whiteinkdesignstudio.com/#organization",
        "name": "White Ink Design Studio",
        "url": "https://whiteinkdesignstudio.com",
        "logo": "https://whiteinkdesignstudio.com/logo.png",
        "foundingDate": "2018",
        "sameAs": [
          "https://www.linkedin.com/company/the-white-ink-design-studio",
          "https://www.instagram.com/whiteinkdesignstudio/",
          "https://www.facebook.com/profile.php?id=61563613269632",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHubClient />
    </>
  );
}

