import { servicesData } from "@/data/servicesData";
import BannerSection from "@/components/services/BannerSection";
import styles from "./page.module.css";


export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div className={styles.servicespage}>
        <BannerSection />
    </div>
  );
}
