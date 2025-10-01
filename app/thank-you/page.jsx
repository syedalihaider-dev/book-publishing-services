import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function ThankYou() {
return (
<div className={styles.thank_you}>
    <Image
        src="/banner-bg.png"
        alt="Banner Bg Image"
        fill
        priority 
        fetchPriority="high" 
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