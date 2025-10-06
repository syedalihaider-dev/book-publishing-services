"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const servicesList = [
    "eBook Editing",
    "Book Trailer",
    "Book Audio",
    "Book Marketing",
    "Book Proofreading",
    "Book Publishing",
    "Book Editing",
    "Book Cover Design",
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  });

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();

      const payload = {
        ...formData,
        services: selectedServices,
        formType: "Footer Form",
        pageUrl: window.location.href,
        userIp: ipData.ip,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={`${styles.contact_section} sec_padding`}>
      <Image
        src="/contact-banner-bg.png"
        alt="Contact Bg Image"
        fill
        priority
        fetchPriority="high"
        style={{ objectFit: "cover" }}
        className={styles.bannerBg}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_left}>
              <h2>
                <span className="primarytxt">Contact Us</span>
              </h2>
              <h3>
                Keep in touch, stay with us
                <span className="break_line"></span> for more exciting news
              </h3>
              <div className={styles.img}>
                <Image
                  src="/contact-left-book.png"
                  alt="Book"
                  fill
                  className={styles.contact_img}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <h3 className={styles.service_heading}>Service</h3>
              <div className={styles.services_wrap}>
                {servicesList.map((service, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`${styles.service_btn} ${
                      selectedServices.includes(service) ? styles.active : ""
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <form className={styles.form_wrap} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className={styles.form_group}>
                      <label className={styles.form_label} htmlFor="name">
                        <Image src="/user-icon.png" alt="User" width={13} height={15} />
                        Full name*
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className={styles.form_input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className={styles.form_group}>
                      <label className={styles.form_label} htmlFor="phone">
                        <Image src="/phone-icon.png" alt="Phone" width={13} height={16} />
                        Phone*
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className={styles.form_input}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className={styles.form_group}>
                      <label className={styles.form_label} htmlFor="email">
                        <Image src="/envelop-icon.png" alt="Email" width={16} height={16} />
                        Email address*
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="info@example.com"
                        className={styles.form_input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className={styles.form_group}>
                      <label className={styles.form_label} htmlFor="budget">
                        <Image src="/dollar-icon.png" alt="Budget" width={12} height={14} />
                        Select Your Budget
                      </label>
                      <input
                        id="budget"
                        type="text"
                        placeholder="$200k"
                        className={styles.form_input}
                        value={formData.budget}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className={styles.form_group_full}>
                      <label className={styles.form_label} htmlFor="message">
                        <Image src="/message-icon.png" alt="Message" width={14} height={14} />
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        placeholder="Write a message"
                        className={styles.form_textarea}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className={styles.submit_wrap}>
                      <button type="submit" className={styles.submit_btn}>
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
