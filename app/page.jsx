import Image from "next/image";
import styles from "./page.module.css";
import ActionButtons from "@/components/ui/ActionButtons";
import {ServicesSection, CtaSection, PortfolioSection, AwardsSection, ProcessSection, BestSellingAuthor, Testimonials,
ContactSection,} from "@/components/home";

const books = [
"/banner-book-01.png",
"/banner-book-02.png",
"/banner-book-03.png",
"/banner-book-04.png",
"/banner-book-05.png",
"/banner-book-06.png",
"/banner-book-07.png",
"/banner-book-08.png",
];

export default function Home() {
return (
<div className={styles.homepage}>
  <section className={styles.banner}>
    {books.map((src, i) => (
    <div key={i} className={`${styles.img} ${styles[`book${i + 1}`]}`}>
      <Image src={src} alt={`Book ${i + 1}`} fill priority className={styles.banner_book_img} />
    </div>
    ))}

    <div className="container text-center">
      <h1>
        <span className="primarytxt">Award Winning </span>
        <span className="break_line"></span>
        Book Publishing Services?
      </h1>
      <p>
        Publishing a book with amazon is a hassle but luckily, not with us.
        <span className="break_line"></span>
        We can help you in publishing book on amazon without any trouble.
      </p>
      <div className="combo_btn">
        <ActionButtons />
      </div>
    </div>
  </section>
  <section className={styles.about}>
    <div className="container">
      <div className="row align-items-end">
        <div className="col-md-6">
          <div className={styles.sec_left}>
            <h2>
              <span className="primarytxt">Book Publishing</span>
              <span className="break_line"></span> isn’t Big Dream
            </h2>
            <p>
              <strong>A few years back, publishing a book on amazon was nothing less than a blurred dream.</strong>
              <br /> Luckily, with us, that dream is going to become a reality.
            </p>
            <div className="combo_btn">
              <ActionButtons />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.sec_right}>
            <div className={styles.img}>
              <Image src="/book-in-hand.png" alt="Book" fill priority className="myImage" />
            </div>
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
