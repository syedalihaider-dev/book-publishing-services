"use client";
import Image from "next/image";
import styles from "./AwardsSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AwardsSection() {
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
    <Swiper modules={[Navigation, Autoplay, Pagination]} autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} loop={true} slidesPerView={6} spaceBetween={20} breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 6 },
          }} className={styles.awards_slider}>
      <SwiperSlide>
        <div className={styles.awards_item}>
          <Image src="/award-01.png" alt="Award 1" width={194} height={175} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.awards_item}>
          <Image src="/award-02.png" alt="Award 2" width={201} height={175} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.awards_item}>
          <Image src="/award-03.png" alt="Award 3" width={134} height={175} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.awards_item}>
          <Image src="/award-04.png" alt="Award 4" width={207} height={187} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.awards_item}>
          <Image src="/award-05.png" alt="Award 5" width={204} height={187} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.awards_item}>
          <Image src="/award-01.png" alt="Award 6" width={194} height={175} />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
);
}
