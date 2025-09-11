"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles import
import "swiper/css";
import "swiper/css/navigation";

import styles from "@/app/page.module.css";

export default function PortfolioSlider() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        centeredSlides={true}
        navigation={false}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Image src="/port-book-01.png" alt="Portfolio Book" width={320} height={480} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-02.png" alt="Portfolio Book" width={320} height={480} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-03.png" alt="Portfolio Book" width={320} height={480} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-04.png" alt="Portfolio Book" width={320} height={480} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-05.png" alt="Portfolio Book" width={320} height={480} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-06.png" alt="Portfolio Book" width={320} height={480} className="myImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
