import Image from "next/image";
import styles from "./page.module.css";
import {CallButton, ActionButtons, FAQSection} from "@/components/ui";
import StatsSection from "@/components/about/StatsSection";
import {BestSellingAuthor, ContactSection} from "@/components/home";

export const metadata = {
  title: "About Us | Professional Book Publishing Services",
  description:
    "Discover who we are and what we do. We provide professional book publishing services to help authors with editing, design, printing, and distribution.",
  openGraph: {
    title: "About Us | Professional Book Publishing Services",
    description:
      "Discover who we are and what we do. We provide professional book publishing services to help authors with editing, design, printing, and distribution.",
    url: "https://bookpublishingservices.io/about",
    siteName: "Book Publishing Services",
    type: "website",
  },
  alternates: {
    canonical: "https://bookpublishingservices.io/about",
  },
};

export default function About() {
    const faqs = [
    { 
        question: "What is Book Publishing Services?", 
        answer: "Book Publishing Services is a US-based, full-service publishing company that helps authors publish, edit, market, and distribute their books. We support authors across all genres and stages. Our goal is to provide a human-centered publishing experience that simplifies the journey and maximizes success." 
    },
    { 
        
        question: "What makes your company different from other publishers?", 
        answer: "We combine technical expertise with emotional storytelling. Our team includes real writers, editors, marketers, and designers who care about your success. We also prioritize transparency, customer satisfaction, and full rights ownership for all our clients." 
    },
    { 
        question: "Do you work with new authors?", 
        answer: "Many of our clients are first-time authors. We provide detailed guidance, clear timelines, and step-by-step support to help you publish with confidence. Whether you have a draft or just an idea, we’ll meet you where you are." },
    { 
        question: "What services do you offer?", 
        answer: "We offer everything an author needs: book writing, ghostwriting, editing, proofreading, cover design, book marketing, audiobook creation, website design, and more. Each service can be booked individually or bundled into a full publishing package." 
    },
    { 
        question: "Is your team based in the US?", 
        answer: "Yes. We are a US-based company with a network of experienced professionals across the country. Our team understands the US publishing market and works in alignment with Amazon and Kindle Direct Publishing standards." 
    },
    { 
        question: "How long does it take to publish a book with you?", 
        answer: "Timelines vary by project type and service selection. Most books are ready for publication within 6 to 14 weeks. We keep you informed at every stage and aim for a seamless, efficient process." 
    },
  ];
return (
<div className={styles.aboutpage}>
    <section className={styles.banner}>
        <Image 
        src="/about/banner.png" 
        alt="Banner Bg Image" 
        fill 
        style={{ objectFit: "cover" }} 
        className={styles.bannerBg} 
        />
        <div className="container">
            <div className="row align-items-end">
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_left}>
                        <h1>
                            <span className="primarytxt">Empowering Authors</span>
                            <span className="break_line"></span>
                            with Complete Book Publishing Services
                        </h1>
                        <p>
                            Your story deserves to be heard. At Book Publishing Services, we guide you through every step of the publishing journey, with personalized support and professional results.
                        </p>
                        <div className="combo_btn">
                            <CallButton />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_right}>
                        <Image 
                        src="/about/banner-left.png" 
                        alt="About Banner Bg Image" 
                        fill 
                        className={styles.img} 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={styles.about_sec2}>
        <div className={styles.before_img}>
            <Image 
            src="/about/sec2-before.png" 
            alt="About Before Image" 
            fill 
            />
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-5">
                    <div className={styles.sec_left}>
                        <h6>About Us</h6>
                        <div className={styles.avatar}>
                            <Image 
                            src="/about/avatar.png" 
                            alt="About Avatar Image" 
                            fill 
                            />
                        </div>
                        <div className={styles.trustpilot}>
                            <p className={styles.rate}>4.8</p>
                            <div className={styles.trustpilot_rate}>
                                <Image 
                                src="/about/trustpilot-rate.png" 
                                alt="Rating Trustpilot Image" 
                                fill 
                                />
                            </div>
                        </div>
                        <p className={styles.scores}>See <strong>275+</strong> reviews on Trustpilot</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className={styles.sec_right}>
                        <h2>
                            <span className="primarytxt">We Know What</span> It Takes <span className="break_line"></span>
                            to Publish a Book
                        </h2>
                        <p>
                            As a full-service self-publishing company, we understand the emotional and creative energy authors invest in their manuscripts. That’s why we offer end-to-end publishing solutions that allow you to focus on your story while we handle the rest. Our expert team is here to make your dream of becoming a published author a reality.
                        </p>
                        <div className="combo_btn">
                            <ActionButtons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={styles.cta_section}>
        <Image 
        src="/about/cta-bg.png" 
        alt="Banner Bg Image" 
        fill 
        style={{ objectFit: "cover" }} 
        className={styles.bannerBg} 
        />
        <div className="container">
            <div className="row align-items-end">
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_left}>
                        <Image 
                        src="/about/cta-left-bg.png" 
                        alt="Girl With Book Image" 
                        fill 
                        style={{ objectFit: "cover" }} 
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_right}>
                        <h2>
                            <span className="primarytxt">Simplifying the Publishing</span> Journey for Authors EverywhereResults
                        </h2>
                        <p>
                            At Book Publishing Services, we believe the publishing process should feel exciting, not overwhelming. That’s why we’ve developed streamlined solutions to help you launch your book with confidence. From manuscript to market, we bring your vision to life without the stress.
                        </p>
                        <div className="combo_btn">
                            <ActionButtons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <StatsSection/>
    <BestSellingAuthor />
    <FAQSection faqs={faqs} />
    <ContactSection />
</div>
);
}
