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
    title:
      service.seoTitle ||
      `${service.banner.title}`,
    description:
      service.seoDescription ||
      service.banner.description,
    alternates: {
      canonical: `https://bookpublishingservices.io/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];
  if (!service) return <h1>Service Not Found</h1>;
  return (
    <div className={`${styles.services_page} ${params.slug}`}>
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
