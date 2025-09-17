import Image from "next/image";
import Link from "next/link";
import ChatButton from "@/components/ui/ChatButton";
import styles from "./Header.module.css";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "@/config/config";

export default function Header() {
return (
<header className={styles.header}>
  <div className={styles.head_top}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-6">
          <div className={styles.left}>
            <p>🌟 One-Stop All Book Solutions For Authors & Writers</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className={styles.right}>
            <ul>
              <li>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Image src="/top-head-phone-icon.png" width={24} height={24} alt="Phone Icon" priority />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL_ADDRESS}`}>
                  <Image src="/top-head-envelope-icon.png" width={24} height={24} alt="Phone Icon" priority />
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.main_header}>
    <div className="container">
      <div className={styles.inner_wrapper}>
        <div className="logo">
          <Link href="/">
          <Image src="/logo.png" width={60} height={60} alt="Logo Image" priority />
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#!">About Us</Link>
            </li>
            <li>
              <Link href="#!">Services</Link>
            </li>
            <li>
              <Link href="#!">Blog</Link>
            </li>
            <li>
              <Link href="#!">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="combo_btn">
          <ChatButton />
        </div>
      </div>
    </div>
  </div>
</header>
);
}