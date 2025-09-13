import Image from "next/image";
import styles from "./ContactSection.module.css"

export default function ContactSection(){
    return(
        <div className={styles.contact_section}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <h2>
                                <span className="primarytxt">Contact Us</span>
                            </h2>
                            <h3>
                                Keep in touch, stay with us
                                <span className="break_line"></span> for more exciting news
                            </h3>
                            <Image src="/contact-left-img.png" alt="Book" width={835} height={488} priority className="myImage" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_right}>
                            <h4>Services</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}