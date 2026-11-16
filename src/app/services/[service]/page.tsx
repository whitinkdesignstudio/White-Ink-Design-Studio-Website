import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "@/components/services/ServiceDetailClient";
import { SERVICES_DATA, ServicePillar } from "@/data/servicesData";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((pillar) => ({
    service: pillar.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const pillar = SERVICES_DATA.find((p) => p.slug === service);

  if (!pillar) {
    return {
      title: "Service Not Found | White Ink Design Studio",
    };
  }

  return {
    title: `${pillar.title} | Ahmedabad, London & Remote | White Ink`,
    description: `${pillar.tagline.slice(0, 155)}`,
    openGraph: {
      title: `${pillar.title} | White Ink Design Studio`,
      description: pillar.tagline.slice(0, 155),
      url: `https://whiteinkdesignstudio.com/services/${pillar.slug}`,
      siteName: "White Ink Design Studio",
      locale: "en_IE",
      type: "website",
    },
    alternates: {
      canonical: `https://whiteinkdesignstudio.com/services/${pillar.slug}`,
    },
  };
}

export default async function ServicePillarPage({ params }: PageProps) {
  const { service } = await params;
  const pillar = SERVICES_DATA.find((p) => p.slug === service);

  if (!pillar) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://whiteinkdesignstudio.com/services/${pillar.slug}#service`,
        "name": pillar.title,
        "description": pillar.tagline,
        "provider": {
          "@type": "Organization",
          "name": "White Ink Design Studio",
          "url": "https://whiteinkdesignstudio.com",
        },
        "areaServed": ["IN", "GB", "US", "AE"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${pillar.title} Services`,
          "itemListElement": pillar.deliverables.map((del) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": del.title,
              "description": del.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://whiteinkdesignstudio.com/services/${pillar.slug}#faq`,
        "mainEntity": pillar.faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://whiteinkdesignstudio.com/services/${pillar.slug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": pillar.navLabel,
            "item": `https://whiteinkdesignstudio.com/services/${pillar.slug}`,
          },
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
      <ServiceDetailClient pillar={pillar} />
    </>
  );
}

