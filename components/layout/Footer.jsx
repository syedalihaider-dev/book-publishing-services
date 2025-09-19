import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/config/config";

export default function Footer() {
return (
<footer className={styles.footer}>
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-sm-12 col-md-2">
                <h4>Quick links</h4>
                <ul className={styles.ft_link}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">About Us</Link>
                    </li>
                    <li>
                        <Link href="/">Services</Link>
                    </li>
                    <li>
                        <Link href="/">Blog</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-2">
                <h4>Services</h4>
                <ul className={styles.ft_link}>
                    <li>
                        <Link href="/">Ebook Writing</Link>
                    </li>
                    <li>
                        <Link href="/">Author Website Creation</Link>
                    </li>
                    <li>
                        <Link href="/">Book Proofreading</Link>
                    </li>
                    <li>
                        <Link href="/">Book Editing</Link>
                    </li>
                    <li>
                        <Link href="/">Book Cover Design</Link>
                    </li>
                    <li>
                        <Link href="/">Book Trailer</Link>
                    </li>
                    <li>
                        <Link href="/">Book Audio</Link>
                    </li>
                    <li>
                        <Link href="/">Audiobook Creation</Link>
                    </li>
                    <li>
                        <Link href="/">Book Illustration Design</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3">
                <div className={styles.ft_logo}>
                    <Link href="/">
                        <Image src="/ft-logo.png" fill alt="Loading Footer Logo" className="myImages" />
                    </Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-2">
                <h4>Contact Us</h4>
                <ul className={styles.ft_info}>
                    <li>
                        <p>
                            <strong>Email Us:</strong>
                            <a href={`mailto:${EMAIL_ADDRESS}`}>Email Us Now</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Phone:</strong>
                            <a href={`tel:${PHONE_NUMBER}`}>Call Us Now</a>
                        </p>
                    </li>
                </ul>
                <h4 className={styles.follow_us}>Follow Us</h4>
                <ul className={styles.social_links}>
                    <li>
                        <Link href="https://www.facebook.com/amzbookpublishing" target="_blank"
                            rel="noopener noreferrer">
                        <Image src="/facebook-icon.png" fill alt="Facebook Icon" className="myIcon" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/amzbookpublishing/" target="_blank"
                            rel="noopener noreferrer">
                        <Image src="/instagram-icon.png" fill alt="Instagram Icon" className="myIcon" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://x.com/amz_publishing" target="_blank" rel="noopener noreferrer">
                        <Image src="/x-icon.png" fill alt="X Icon" className="myIcon" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-2">
                <h4>Locations</h4>
                <ul className={styles.ft_map}>
                    <li>
                        <Image src="/location-icon-01.png" width={43} height={43} alt="Location Icon" />
                        <p>
                            <strong>Location 01:</strong>
                            <span>{LOCATION_ADDRESS}</span>
                        </p>
                    </li>
                    <li>
                        <Image src="/location-icon-02.png" width={43} height={43} alt="Location Icon" />
                        <p>
                            <strong>Location 02:</strong>
                            <span>{LOCATION_ADDRESS}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className={styles.main_ft}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_left}>
                        <p>
                            Copyright © 2025 <span>Book Publishing Services</span>.
                            <Link href="/" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_right}>
                        <Image src="/payment-method.png" fill alt="Payment Method"
                            className="myImages" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
);
}