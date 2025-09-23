"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./FAQSection.module.css"

export default function FAQSection({ faqs }) {
const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<section className={` ${styles.faq_section} sec_padding `}>
  <Image 
  src="/faqs-bg.png" 
  alt="FAQs Bg Image" 
  fill 
  priority 
  fetchPriority="high" 
  style={{ objectFit: "cover" }} 
  className={styles.bannerBg} 
  />
  <div className="container">
    <div className={styles.sec_top}>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h2>Frequently Asked Question</h2>
        </div>
      </div>
    </div>
    <div className={styles.sec_content}>
      <div className="row">
        {faqs.map((faq, index) => (
        <div key={index} className="col-sm-12 col-md-6 mb-3">
          <div className={styles.box}>
            <div className={styles.heading} onClick={()=> toggleFAQ(index)}>
              <strong>{faq.question}</strong>
            </div>
            {openIndex === index && (
            <p className="">
              {faq.answer}
            </p>
            )}
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}