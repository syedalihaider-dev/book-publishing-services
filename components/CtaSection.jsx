import Image from "next/image";
import ChatButton from "@/components/ChatButton";
import { PHONE_NUMBER } from "@/config/config";
import styles from "./CtaSection.module.css";


export default function CtaSection() {
return (
<section className={styles.cta}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_left}>
                    <Image src="/cta-logo-img.png" alt="book" width={89} height={89} className="myImage" />
                    <h2>
                        Publish your Book with
                        <span className="break_line"></span>
                        Book Publishing Services
                    </h2>
                    <div className="combo_btn">
                        <ChatButton />
                        <p className="mb-0">Have any queries regarding our award-winning services? Connect with us
                            now via live chat or call.</p>
                    </div>
                    <div className={styles.call_btn}>
                        <Image src="/cta-call-icon.png" alt="cta call icon" width={32} height={32}
                            className="myImage" />
                        <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_right}>
                    <Image src="/cta-right-img.png" alt="Book" width={663} height={635} className="myImage" />
                </div>
            </div>
        </div>
    </div>
</section>
);
}