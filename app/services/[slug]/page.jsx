import {servicesData} from "@/data/servicesData";
import styles from "./page.module.css";
import {ContactSection, Testimonials} from "@/components/home";
import FAQSection from "@/components/ui/FAQSection";
import { BannerSection, ProcessSection, FeaturesSection, ActionPlanSection, ServicesSection, CTASection } from "@/components/services/";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
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