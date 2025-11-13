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

if (params && params.slug === "book-marketing-services") {
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
          "Working with Book Publishing Services for their Book Marketing Services was one of the best decisions I’ve made as an author. Their team took the time to truly understand my book and target audience, then crafted a marketing strategy that felt both creative and personal. I started seeing real engagement and growth in my readership within weeks. From press coverage to social media promotions, everything was executed flawlessly and with genuine passion. I’m deeply impressed by their professionalism and commitment to helping authors succeed. I’d definitely recommend them to any writer who wants to see their book reach its full potential.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "4.3",
          worstRating: "3.6",
        },
        datePublished: "2025-07-15",
        author: { "@type": "Person", name: "Emily Carter" },
        publisher: {
          "@type": "Organization",
          name: "Book Publishing Services",
        },
      },
      {
        "@type": "Review",
        name: "Olivia Reed",
        reviewBody:
          "Book Publishing Services did an incredible job promoting my novel. Their marketing team was not only professional but also genuinely invested in my success. They created a campaign that perfectly matched my book’s theme and tone. Within a month, my online visibility and reader engagement grew noticeably. I loved how transparent and supportive they were throughout the process. Highly recommended for any author who wants results without losing authenticity.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.1",
          bestRating: "4.3",
          worstRating: "3.6",
        },
        datePublished: "2024-10-07",
        author: { "@type": "Person", name: "Olivia Reed" },
        publisher: {
          "@type": "Organization",
          name: "Book Publishing Services",
        },
      },
      {
        "@type": "Review",
        name: "Daniel Brooks",
        reviewBody:
          "I was skeptical about hiring a marketing service at first, but Book Publishing Services completely changed my mind. They understood what my book needed and helped me build a real connection with my readers. Their mix of social media strategies, author branding, and targeted ads worked wonders. The team’s communication was excellent — I always knew what was happening. I couldn’t have asked for a better experience!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3.7",
          bestRating: "4.3",
          worstRating: "3.6",
        },
        datePublished: "2018-03-14",
        author: { "@type": "Person", name: "Daniel Brooks" },
        publisher: {
          "@type": "Organization",
          name: "Book Publishing Services",
        },
      },
      {
        "@type": "Review",
        name: "Mia Sullivan",
        reviewBody:
          "Book Publishing Services made my book launch smoother and far more successful than I imagined. They handled everything from press releases to online features with expertise and creativity. What stood out to me most was how personal their approach felt. They treated my book like their own project, and that made all the difference. My book sales have gone up, and I’ve gained loyal readers who genuinely connect with my story.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.3",
          bestRating: "4.3",
          worstRating: "3.6",
        },
        datePublished: "2024-10-22",
        author: { "@type": "Person", name: "Mia Sullivan" },
        publisher: {
          "@type": "Organization",
          name: "Book Publishing Services",
        },
      },
    ],
  };
}
   else if (params.slug === "ebook-writing-services") {
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
      review: [/* reviews as before */],
    };
  } else if (params.slug === "book-editing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Book Editing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Fbook-editing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our Book Editing Service transforms your manuscript into a refined, professional-quality book...",
      brand: { "@type": "Brand", name: "Book Publishing Services" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.22",
        bestRating: "4.8",
        worstRating: "3.4",
        ratingCount: "4",
        reviewCount: "4",
      },
      review: [/* reviews as before */],
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