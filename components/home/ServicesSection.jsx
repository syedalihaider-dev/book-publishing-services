"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import ChatButton from "@/components/ui/ChatButton";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 767);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const services = [
    {
      title: "eBook Writing",
      desc: "At Book Publishing Services, our professional eBook writers help turn your ideas into powerful digital reads. Whether you’re writing for impact, income, or influence, let’s create something unforgettable together.",
      stats: [
        { value: "257", label: "Books Published" },
        { value: "$24M", label: "Royalty Generated" },
      ],
      bg: "/ebook-writing-bg.png",
    },
    {
      title: "Book Trailer",
      desc: "A great story deserves a great introduction. Our book trailer services give your story the spotlight it deserves, turning browsers into readers through powerful visuals...",
      stats: [
        { value: "340+", label: "Trailers Delivered" },
        { value: "95%", label: "Client Satisfaction" },
      ],
      bg: "/ebook-writing-bg.png",
    },
    {
      title: "Book Audio",
      desc: "We believe every story deserves a chance to be heard. Our audiobook services are designed to turn your stories into melodies that keep your audience hooked till the end.",
      stats: [
        { value: "120", label: "Audiobooks Produced" },
        { value: "15+", label: "Languages Covered" },
      ],
      bg: "/ebook-writing-bg.png",
    },
    {
      title: "Book Cover Design",
      desc: "Your book deserves a cover that grabs attention and sparks curiosity. Our designers create covers that speak to your story and resonate with your audience.",
      stats: [
        { value: "500+", label: "Covers Designed" },
        { value: "Top 10", label: "Design Awards Won" },
      ],
      bg: "/ebook-writing-bg.png",
    },
    {
      title: "Book Marketing",
      desc: "We don’t just help you publish—we help you get noticed. Our book marketing services are tailored to elevate your story and connect it with the right audience.",
      stats: [
        { value: "10k+", label: "Campaigns Run" },
        { value: "85%", label: "Sales Growth" },
      ],
      bg: "/ebook-writing-bg.png",
    },
    {
      title: "Book Publishing",
      desc: "Book Publishing Services helps you publish professionally on platforms like Amazon and beyond. We handle every detail—so you can focus on your story.",
      stats: [
        { value: "1,000+", label: "Titles Published" },
        { value: "50+", label: "Publishing Platforms" },
      ],
      bg: "/ebook-writing-bg.png",
    },
  ];
  const ServiceBox = ({ service }) => (
    <div className={styles.box}>
      <Image
        src={service.bg}
        alt={`${service.title} background`}
        fill
        style={{ objectFit: "cover" }}
        className={styles.bgImage}
      />
        <h3 className={styles.heading}>{service.title}</h3>
        <div className={styles.inner_box}>
          <h3>{service.title}</h3>
          <p className="scroll_block my-3">{service.desc}</p>
          <ul>
            {service.stats.map((s, i) => (
              <li key={i}>
                <h4>{s.value}</h4>
                <p className="mb-0">{s.label}</p>
              </li>
            ))}
          </ul>
          <div className="combo_btn">
            <ChatButton />
          </div>
      </div>
    </div>
  );

  return (
    <section className={`${styles.services} sec_padding`}>
      <Image
        src="/services-banner-bg.png"
        alt="Service Bg Image"
        fill
        style={{ objectFit: "cover" }}
        className={styles.bannerBg}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_left}>
              <h2>
                Providing you the best <span className="break_line"></span>
                <span className="primarytxt">Book Publishing</span>
                <span className="break_line"></span> possible services.
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <p className="m-0">
                As a prominent Amazon book publishing service, we deliver what we
                promise. Our trained professionals are on their toes to bring
                you the perfect tales readers can enjoy like never before.
              </p>
              <div className="combo_btn">
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                576: { 
                slidesPerView: 2,
                },
                320: {
                slidesPerView: 1,
                },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <ServiceBox service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          services.map((service, i) => <ServiceBox key={i} service={service} />)
        )}
      </div>
    </section>
  );
}
