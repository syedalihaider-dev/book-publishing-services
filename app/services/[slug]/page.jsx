import { servicesData } from "@/data/servicesData";
import ServiceBanner from "@/components/services/BannerSection";
import ProcessSection from "@/components/services/ProcessSection";
import FeaturesSection from "@/components/services/FeaturesSection";

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) return <h1>Service Not Found</h1>;

  return (
    <>
      <ServiceBanner
        title={service.banner.title}
        highlight={service.banner.highlight}
        description={service.banner.description}
        rightImage={service.banner.rightImage}
        imageAlign={service.banner.imageAlign}
      />
      <ProcessSection
        image={service.process.image}
        highlight={service.process.highlight}
        title={service.process.title}
        description={service.process.description}
        steps={service.process.steps}
      />
      
      <FeaturesSection
        highlight={service.features.highlight}
        title={service.features.title}
        description={service.features.description}
        beforeImage={service.features.beforeImage}
        afterImage={service.features.afterImage}
        boxes={service.features.boxes}
      />
    </>
  );
}
