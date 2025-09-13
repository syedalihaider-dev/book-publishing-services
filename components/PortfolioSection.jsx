"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./PortfolioSection.page.module.css";

export default function PortfolioSection() {
  return (
    <section className={`${styles.portfolio_section} sec_padding`}>
      <div className="container">
        <div className={`${styles.sec_top} text-center`}>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2>
                We Publish these
                <span className="break_line"></span> 
                <span className="primarytxt">Book Categories</span>
              </h2>
              <p>
                At Book Publishing, we believe every story has the power to change 
                <span className="break_line"></span> the world. We publish books that inspire, entertain.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        className={styles.swiper}
        >
        <SwiperSlide>
          <Image src="/port-book-01.png" alt="Portfolio Book" width={320} height={480} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-02.png" alt="Portfolio Book" width={320} height={480} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-03.png" alt="Portfolio Book" width={320} height={480} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-04.png" alt="Portfolio Book" width={320} height={480} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-05.png" alt="Portfolio Book" width={320} height={480} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/port-book-06.png" alt="Portfolio Book" width={320} height={480} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}