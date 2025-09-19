"use client";
import Image from "next/image";
import styles from "./AwardsSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AwardsSection() {
const awards = [
{ src: "/award-01.png", alt: "Award 1", w: 194, h: 175 },
{ src: "/award-02.png", alt: "Award 2", w: 201, h: 175 },
{ src: "/award-03.png", alt: "Award 3", w: 134, h: 175 },
{ src: "/award-04.png", alt: "Award 4", w: 207, h: 187 },
{ src: "/award-05.png", alt: "Award 5", w: 204, h: 187 },
{ src: "/award-01.png", alt: "Award 6", w: 194, h: 175 },
];

return (
<section className={`${styles.awards_section} sec_padding`}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-12 col-md-6">
        <div className={styles.sec_left}>
          <h2 className={styles.heading}>
            <span className="primarytxt">Award-Winning Books.</span>
            <span className="break_line"></span> Industry-Leading Results
          </h2>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className={styles.sec_right}>
          <p>
            At Book Publishing, we believe every story has the power to change the world.
            We publish books that inspire, entertain, and leave a lasting impact.
          </p>
          <div className="combo_btn">
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.sec_content}>
    <Swiper modules={[Navigation, Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false }} loop
      spaceBetween={20} breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1601: { slidesPerView: 6 },
          }} className={styles.awards_slider}>
      {awards.map((award, i) => (
      <SwiperSlide key={i}>
        <div className={styles.awards_item}>
          <Image src={award.src} alt={award.alt} width={award.w} height={award.h} />
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
);
}