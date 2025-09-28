"use client";
import styles from "./ProcessSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";
import Image from "next/image";

export default function ProcessSection({ data }) {
  const { image, highlight, title, description, steps } = data;

  return (
    <section className={`${styles.process_section} sec_padding`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_left}>
              <Image src={image} alt="Process Illustration" fill className="myImages" />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <h2>
                <span className="primarytxt">{highlight}</span> {title}
              </h2>
              <p className="mb-0">{description}</p>

              {/* Steps */}
              <ul>
                {steps.map((step, i) => (
                  <li key={i}>
                    <div className={styles.box}>
                      <div className={styles.head}>
                        <div className={styles.img}>
                          <Image src={step.icon} alt={step.title} fill className="myImages" />
                        </div>
                        <h6>{step.title}</h6>
                      </div>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="combo_btn">
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
