import Image from "next/image";
import styles from "./page.module.css";
import ActionButtons from "@/components/ActionButtons";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import PortfolioSection from "@/components/PortfolioSection";
import AwardsSection from "@/components/AwardsSection";
import ProcessSection from "@/components/ProcessSection";
import BestSellingAuthor from "@/components/BestSellingAuthor";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
return (
<div className={styles.homepage}>
  <section className={styles.banner}>
    <div className={`${styles.img} ${styles.book1}`}>
      <Image src="/banner-book-01.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book2}`}>
      <Image src="/banner-book-02.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book3}`}>
      <Image src="/banner-book-03.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book4}`}>
      <Image src="/banner-book-04.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book5}`}>
      <Image src="/banner-book-05.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book6}`}>
      <Image src="/banner-book-06.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book7}`}>
      <Image src="/banner-book-07.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className={`${styles.img} ${styles.book8}`}>
      <Image src="/banner-book-08.png" alt="Book" width={191} height={286} priority className="myImage" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="content text-center">
            <h1>
              <span className="primarytxt">Award Winning </span>
              <span className="break_line"></span>
              Book Publishing Services?
            </h1>
            <p>
              Publishing a book with amazon is a hassle but luckily, not with us. We can help you in publishing book
              <span className="break_line"></span>
              on amazon without any trouble. Get in touch today and say hello to the aspiring author inside you.
            </p>
            <div className="combo_btn">
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className={styles.about}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-6">
          <div className={styles.sec_left}>
            <h2>
              <span className="primarytxt">Book Publishing</span>
              <span className="break_line"></span> isn’t Big Dream
            </h2>
            <p>
              <strong>A few years back, publishing a book on amazon was nothing less than a blurred dream.</strong>
              <br /> Luckily, with us, that dream is going to become a reality. We can become your partners in the
              process, helping you fulfill your dream of having a bestseller book to your name.
            </p>
            <div className="combo_btn">
              <ActionButtons />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className={styles.sec_right}>
            <Image src="/book-in-hand.png" alt="Book" width={661} height={562} priority className="myImage" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <ServicesSection />
  <CtaSection />
  <PortfolioSection />
  <AwardsSection />
  <ProcessSection />
  <BestSellingAuthor />
  <Testimonials />
  <ContactSection />
</div>
);
}