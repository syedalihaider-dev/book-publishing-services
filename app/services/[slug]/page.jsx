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
import Head from "next/head";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return { title: "Service Not Found | Book Publishing Services io" };
  }

  return {
    title: service.seoTitle || `${service.banner.title}`,
    description: service.seoDescription || service.banner.description,
    alternates: {
      canonical: `https://bookpublishingservices.io/services/${slug}`,
    },
    other: {
      "ld+json": JSON.stringify(schemaObjectHere),
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return <h1>Service Not Found</h1>;

  // Single schema variable for both services
  let schema = null;

  if (slug === "book-marketing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Book Marketing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Fbook-marketing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our Book Marketing Services are designed to help authors build visibility, attract readers, and boost book sales through strategic and creative promotion. We combine digital marketing, social media campaigns, press releases, and author branding to create customized plans that fit each book’s goals. From getting featured in online publications to running targeted ads and engaging readers through organic content, our team ensures your book reaches the right audience. With a focus on authentic storytelling and measurable results, we turn your book into a recognized brand and your readers into loyal fans.",
      brand: {
        "@type": "Brand",
        name: "Book Publishing Services",
      },
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
            name: "Book Marketing Services",
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
  } else if (slug === "ebook-writing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "eBook Writing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Febook-writing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our Book Marketing Services are designed to help authors build visibility, attract readers, and boost book sales through strategic and creative promotion. We combine digital marketing, social media campaigns, press releases, and author branding to create customized plans that fit each book’s goals. From getting featured in online publications to running targeted ads and engaging readers through organic content, our team ensures your book reaches the right audience. With a focus on authentic storytelling and measurable results, we turn your book into a recognized brand and your readers into loyal fans.",
      brand: {
        "@type": "Brand",
        name: "Book Publishing Services",
      },
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
            "This was my first time getting an eBook written, and I had no idea where to start. Their team turned my rough notes into a complete, polished manuscript. Amazing experience!",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
            bestRating: "4.6",
            worstRating: "3.7",
          },
          datePublished: "2025-07-15",
          author: { "@type": "Person", name: "Rohit Malhotra" },
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
            ratingValue: "3.7",
            bestRating: "4.6",
            worstRating: "3.7",
          },
          datePublished: "2024-10-07",
          author: { "@type": "Person", name: "Olivia Reed" },
          publisher: { "@type": "Organization", name: "Olivia Reed" },
        },
        {
          "@type": "Review",
          name: "Sara Ahmed",
          reviewBody:
            "The writing style was natural and reader-friendly. Delivery was slightly delayed, but the final output was totally worth it. Highly recommend!",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
            bestRating: "4.6",
            worstRating: "3.7",
          },
          datePublished: "2018-03-14",
          author: { "@type": "Person", name: "Sara Ahmed" },
          publisher: {
            "@type": "Organization",
            name: "Book Marketing Services",
          },
        },
        {
          "@type": "Review",
          name: "Daniel Smith",
          reviewBody:
            "Initially thought the price was a bit high, but after reading the final draft, I realized the quality was worth every penny. Clear communication throughout the process.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4.6",
            bestRating: "4.6",
            worstRating: "3.7",
          },
          datePublished: "2019-08-05",
          author: { "@type": "Person", name: "Daniel Smith" },
          publisher: {
            "@type": "Organization",
            name: "Book Publishing Services",
          },
        },
      ],
    };
  } else if (slug === "book-editing-services") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Book Editing Services",
      image:
        "https://bookpublishingservices.io/_next/image?url=%2Fservices%2Fbook-editing-services%2Fright-img.png&w=1920&q=75",
      description:
        "Our Book Editing Service transforms your written manuscript into a refined, professional-quality book. We provide grammar correction, structural editing, tone adjustment, readability improvement, and consistency checks to make sure your work is publication-ready. Our editors are experienced across genres fiction, non-fiction, academic, and biographies ensuring your voice stays intact while the quality is elevated.",
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
      reviewBody: "My novel’s flow and readability improved drastically. The editor explained every suggestion clearly — truly professional work!",
      reviewRating: { "@type": "Rating", ratingValue: "4.2", bestRating: "4.8", worstRating: "3.4" },
      datePublished: "2025-07-15",
      author: { "@type": "Person", name: "Neha Bansal" },
      publisher: { "@type": "Organization", name: "Book Publishing Services" }
      },
      {
        "@type": "Review",
        name: "Rahul Verma",
        reviewBody: "The editors restructured the content and made the story more impactful. Fast communication and great attention to detail. Worth it!",
        reviewRating: { "@type": "Rating", ratingValue: "3.7", bestRating: "4.8", worstRating: "3.4" },
        datePublished: "2024-10-07",
        author: { "@type": "Person", name: "Rahul Verma" },
        publisher: { "@type": "Organization", name: "Book Publishing Services" }
      },
      {
        "@type": "Review",
        name: "Chris Sky",
        reviewBody: "I thought my manuscript was already good, but after editing, I realized how many small issues were fixed. Incredible improvement!",
        reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "4.8", worstRating: "3.4" },
        datePublished: "2018-01-30",
        author: { "@type": "Person", name: "Chris Sky" },
        publisher: { "@type": "Organization", name: "Book Marketing Services" }
      },
      {
        "@type": "Review",
        name: "Jackson Watt",
        reviewBody: "They polished every paragraph so beautifully that my book now reads like a professional publication. Totally satisfied",
        reviewRating: { "@type": "Rating", ratingValue: "4.6", bestRating: "4.8", worstRating: "3.4" },
        datePublished: "2019-08-05",
        author: { "@type": "Person", name: "Jackson Watt" },
        publisher: { "@type": "Organization", name: "Book Publishing Services" }
      }
      ],
    };
  }

  return (
    <div className={`${styles.services_page} ${slug}`}>
      <Head>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>

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
