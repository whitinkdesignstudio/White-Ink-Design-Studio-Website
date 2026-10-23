import type { Metadata } from "next";
import WorkClientPage from "@/components/work/WorkClientPage";

export const metadata: Metadata = {
  title: "Website & Branding Portfolio | White Ink Design Studio",
  description:
    "Explore 50+ websites, branding systems, and growth case studies crafted for 400+ healthcare, D2C, and international brands by White Ink Design Studio.",
  openGraph: {
    title: "Website & Branding Portfolio | White Ink Design Studio",
    description:
      "Explore 50+ websites, branding systems, and growth case studies crafted for 400+ healthcare, D2C, and international brands by White Ink Design Studio.",
    url: "https://whiteinkdesignstudio.com/work",
    siteName: "White Ink Design Studio",
    locale: "en_IE",
    type: "website",
  },
  alternates: {
    canonical: "https://whiteinkdesignstudio.com/work",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://whiteinkdesignstudio.com/work#webpage",
        "url": "https://whiteinkdesignstudio.com/work",
        "name": "Website & Branding Portfolio | White Ink Design Studio",
        "description":
          "Explore 50+ websites, branding systems, and growth case studies crafted for 400+ healthcare, D2C, and international brands by White Ink Design Studio.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://whiteinkdesignstudio.com/#website",
          "url": "https://whiteinkdesignstudio.com",
          "name": "White Ink Design Studio",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://whiteinkdesignstudio.com/work#breadcrumb",
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
            "name": "Work",
            "item": "https://whiteinkdesignstudio.com/work",
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
      <WorkClientPage />
    </>
  );
}

