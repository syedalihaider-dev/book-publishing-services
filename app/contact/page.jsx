import Image from "next/image";
import styles from "./page.module.css";
import {CallButton} from "@/components/ui";
import {ContactSection} from "@/components/home";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "@/config/config";

export const metadata = {
  title: "Contact Us | Get in Touch with Our Publishing Team",
  description:
    "Have questions about publishing your book? Contact Book Publishing Services today. Our team helps with editing, formatting, printing, and complete publishing support.",
  openGraph: {
    title: "Contact Us | Get in Touch with Our Publishing Team",
    description:
      "Have questions about publishing your book? Contact Book Publishing Services today. Our team helps with editing, formatting, printing, and complete publishing support.",
    url: "https://bookpublishingservices.io/contact",
    siteName: "Book Publishing Services",
    type: "website",
  },
  alternates: {
    canonical: "https://bookpublishingservices.io/contact",
  },
};

export default function Contact() {
return (
<div className={styles.contactpage}>
    <section className={styles.banner}>
        <Image 
        src="/contact/banner.png" 
        alt="Banner Background Image" 
        fill 
        style={{ objectFit: "cover" }} 
        className={styles.bannerBg} 
        />
        <div className="container">
            <div className="row align-items-end">
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_left}>
                        <h1>
                            <span className="primarytxt">Connect with Us Today </span>
                            to Get Premium Publishing Services
                        </h1>
                        <p>
                            Get in touch with us to avail our industry-leading Amazon publishing services. We ensure you receive nothing but high-quality work at reasonable pricing. Please Fill Out the Form Below:
                        </p>
                        <div className="combo_btn">
                            <CallButton />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_right}>
                        <Image 
                        src="/contact/banner-left.png" 
                        alt="Contact Banner Left Image" 
                        fill 
                        className={styles.img} 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={styles.info_section}>
        <div className="container">
            <div className="row align-items-end">
                <div className="col-sm-12 col-md-12">
                    <div className={styles.sec_content}>
                        <h2 className="text-center">
                            <span className="primarytxt">Are You Ready To Share</span>
                            <span className="break_line"></span>
                            Your Story With The World?
                        </h2>
                        <ul>
                            <li>
                                <div className={styles.box}>
                                    <div className={styles.img}>
                                        <Image 
                                        src="/contact/call-icon.png" 
                                        alt="Loading Call Icon" 
                                        width={86} 
                                        height={86}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <p className="mb-0">
                                            Call us at: 
                                            <a href={`tel:${PHONE_NUMBER}`}>Call Us Now</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.box}>
                                    <div className={styles.img}>
                                        <Image 
                                        src="/contact/chat-icon.png" 
                                        alt="Loading Call Icon" 
                                        width={85} 
                                        height={86}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <p className="mb-0">
                                            Representative: 
                                            <a href="#!" className="chat">Click To Begin</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.box}>
                                    <div className={styles.img}>
                                        <Image 
                                        src="/contact/email-icon.png" 
                                        alt="Loading Call Icon" 
                                        width={86} 
                                        height={86}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <p className="mb-0">
                                            Send us an email: 
                                            <a href={`mailto:${EMAIL_ADDRESS}`}>Email Us Now</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.box}>
                                    <div className={styles.img}>
                                        <Image 
                                        src="/contact/quote-icon.png" 
                                        alt="Loading Call Icon" 
                                        width={85} 
                                        height={86}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <p className="mb-0">
                                            Get a free 
                                            <a href="#!" className="popup_btn">Quote</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ContactSection />
</div>
);
}
