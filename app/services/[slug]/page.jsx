import { servicesData } from "@/data/servicesData";
import styles from "./page.module.css";
import { ContactSection, Testimonials } from "@/components/home";
import FAQSection from "@/components/ui/FAQSection";
import {
  BannerSection,
  ProcessSection,
  FeaturesSection,
  ActionPlanSection,
  ServicesSection,
  CTASection,
} from "@/components/services/";
import Script from "next/script";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return {
      title: "Service Not Found | Book Publishing Services io",
      description: "The requested service could not be found.",
      alternates: {
        canonical: "https://bookpublishingservices.io/services",
      },
    };
  }

  return {
    title: service.seoTitle || `${service.banner.title}`,
    description: service.seoDescription || service.banner.description,
    alternates: {
      canonical: `https://bookpublishingservices.io/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];
  if (!service) return <h1>Service Not Found</h1>;

  let schema = null;

  if (params.slug === "book-marketing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Book Marketing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Fbook-marketing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our Book Marketing Services are designed to help authors build visibility, attract readers, and boost book sales through strategic and creative promotion...",
      brand: { "@type": "Brand", name: "Book Publishing Services" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.03",
        bestRating: "4.3",
        worstRating: "3.6",
        ratingCount: "4",
        reviewCount: "4",
      },
      review: [
        {
          "@type": "Review",
          name: "Emily Carter",
          reviewBody:
            "Working with Book Publishing Services for their Book Marketing Services was one of the best decisions I’ve made as an author...",
          reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "4.3", worstRating: "3.6" },
          datePublished: "2025-07-15",
          author: { "@type": "Person", name: "Emily Carter" },
          publisher: { "@type": "Organization", name: "Book Publishing Services" },
        },
        {
          "@type": "Review",
          name: "Olivia Reed",
          reviewBody:
            "Book Publishing Services did an incredible job promoting my novel. Highly recommended for any author who wants results without losing authenticity.",
          reviewRating: { "@type": "Rating", ratingValue: "4.1", bestRating: "4.3", worstRating: "3.6" },
          datePublished: "2024-10-07",
          author: { "@type": "Person", name: "Olivia Reed" },
          publisher: { "@type": "Organization", name: "Book Publishing Services" },
        },
        // baki reviews yahan include kar sakte ho
      ],
    };
  }

  // Add more schemas for other services
  if (params.slug === "ebook-writing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "eBook Writing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Febook-writing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our eBook Writing Services help authors create high-quality digital books that engage readers...",
      brand: { "@type": "Brand", name: "Book Publishing Services" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.07",
        bestRating: "4.6",
        worstRating: "3.7",
        ratingCount: "4",
        reviewCount: "4",
      },
      review: [
        {
          "@type": "Review",
          name: "Rohit Malhotra",
          reviewBody:
            "This was my first time getting an eBook written, and I had no idea where to start. Amazing experience!",
          reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "4.6", worstRating: "3.7" },
          datePublished: "2025-07-15",
          author: { "@type": "Person", name: "Rohit Malhotra" },
          publisher: { "@type": "Organization", name: "Book Publishing Services" },
        },
        // baki reviews yahan
      ],
    };
  }

  if (params.slug === "book-editing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Book Editing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Fbook-editing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our Book Editing Service transforms your written manuscript into a refined, professional-quality book...",
      brand: { "@type": "Brand", name: "Book Publishing Services" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.22",
        bestRating: "4.8",
        worstRating: "3.4",
        ratingCount: "4",
        reviewCount: "4",
      },
      review: [
        {
          "@type": "Review",
          name: "Neha Bansal",
          reviewBody:
            "My novel’s flow and readability improved drastically. Truly professional work!",
          reviewRating: { "@type": "Rating", ratingValue: "4.2", bestRating: "4.8", worstRating: "3.4" },
          datePublished: "2025-07-15",
          author: { "@type": "Person", name: "Neha Bansal" },
          publisher: { "@type": "Organization", name: "Book Publishing Services" },
        },
        // baki reviews yahan
      ],
    };
  }

  return (
    <div className={`${styles.services_page} ${params.slug}`}>
      {schema && (
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <BannerSection data={service.banner} />
      <ProcessSection data={service.process} />
      <FeaturesSection data={service.features} />
      <ActionPlanSection data={service.actionPlan} />
      <ServicesSection data={service.services} />
      <Testimonials />
      <CTASection />
      <FAQSection faqs={service.faqs} />
      <ContactSection />
    </div>
  );
}
