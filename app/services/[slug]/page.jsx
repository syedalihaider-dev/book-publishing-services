import {servicesData} from "@/data/servicesData";
import {BestSellingAuthor, ContactSection, Testimonials} from "@/components/home";
import FAQSection from "@/components/ui/FAQSection";
import { BannerSection, ProcessSection, FeaturesSection, ActionPlanSection } from "@/components/services/";

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) return <h1>Service Not Found</h1>;

  return (
    <>
      <BannerSection data={service.banner} />
      <ProcessSection data={service.process} />
      <FeaturesSection data={service.features} />
      <ActionPlanSection data={service.actionPlan} />
      <Testimonials />
      <BestSellingAuthor />
      <FAQSection faqs={service.faqs} />
      <ContactSection />
    </>
  );
}
