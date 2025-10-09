import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Thank You | Book Publishing Services",
  description:
    "Thank you for contacting Book Publishing Services. Our team will reach out shortly to discuss your publishing goals and guide you through the next steps.",
  openGraph: {
    title: "Thank You | Book Publishing Services",
    description:
      "Thank you for contacting Book Publishing Services. Our team will reach out shortly to discuss your publishing goals and guide you through the next steps.",
    url: "https://bookpublishingservices.io/thank-you",
    siteName: "Book Publishing Services",
    type: "website",
  },
  alternates: {
    canonical: "https://bookpublishingservices.io/thank-you",
  },
};


export default function ThankYou() {
return (
<div className={styles.thank_you}>
    <Image
        src="/banner-bg.png"
        alt="Banner Bg Image"
        fill
        style={{ objectFit: "cover" }}
        className={styles.bannerBg}
    />
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12">
                <h1>Thank You</h1>
                <p>
                    Your form has been submitted successfully. Our team will get back to you shortly.
                </p>
                <hr />
                <Link href="/" className={styles.btn}>Go Back to Home</Link>
            </div>
        </div>
    </div>
</div>
);
}