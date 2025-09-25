"use client";
import Image from "next/image";
import styles from "./BannerSection.module.css";
import CallButton from "@/components/ui/CallButton";

export default function ServiceBanner({ title, highlight, description, bgImage, rightImage }) {
  return (
    <section className={styles.banner}>
      {/* Background */}
      <Image 
        src="/services/banner.png"
        alt="Banner Bg Image" 
        fill 
        priority 
        fetchPriority="high" 
        style={{ objectFit: "cover" }} 
        className={styles.bannerBg} 
      />

      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_left}>
              <h1>
                <span className="primarytxt">{highlight}</span> {title}
              </h1>
              <p>{description}</p>
              <div className="combo_btn">
                <CallButton />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <Image 
                src={rightImage} 
                alt="Banner Right Image" 
                fill 
                priority 
                fetchPriority="high" 
                className={styles.right_img} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}