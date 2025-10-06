"use client";
import Image from "next/image";
import styles from "./Testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const mobileTestimonials = [
    {
      text: "Turned my dream manuscript into reality",
      img: "/men-01.png",
      name: "Anna Lee",
      role: "Author of CODEX",
    },
    {
      text: "Book Publishing made success effortless",
      img: "/men-03.png",
      name: "Mark J.",
      role: "Author of CODEX",
    },
    {
      text: "Professional, reliable, and truly inspiring",
      img: "/men-04.png",
      name: "Sarah P.",
      role: "Author of CODEX",
    },
    {
      text: "From draft to bestseller, seamless journey",
      img: "/men-05.png",
      name: "Kevin T.",
      role: "Author of CODEX",
    },
    {
      text: "Publishing simplified, dreams amplified",
      img: "/men-07.png",
      name: "John Smith",
      role: "Author of CODEX",
    },
    {
      text: "Creative, fast, and deeply supportive",
      img: "/men-09.png",
      name: "Emma C.",
      role: "Author of CODEX",
    },
  ];

  return (
    <section className={styles.testimonials_section}>
        <Image
            src="/testimonials-banner-bg.png"
            alt="Testimonials Bg Image"
            fill
            style={{ objectFit: "cover" }}
            className={styles.bannerBg}
        />
        <div className={styles.desktopView}>
            <div className={`${styles.content} ${styles.up}`}>
                <div className={`${styles.box} ${styles.box1}`}>
                    <h5>
                        Turned my dream manuscript into reality
                    </h5>
                    <div className={styles.info}>
                        <Image 
                        src="/men-01.png" 
                        alt="avatar" 
                        width={37}  
                        height={37} 
                        className={styles.avatar} 
                        />
                        <p>
                            Anna Lee <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box2}`}>
                    <Image 
                    src="/men-02.png" 
                    alt="avatar" 
                    width={295}  
                    height={155} 
                    className={styles.myImage} 
                    />
                    <div className={styles.info}>
                        <Image 
                        src="/men-02-1.png" 
                        alt="avatar" 
                        width={47}  
                        height={46} 
                        className={styles.avatar} 
                        />
                        <p>
                            Mia R. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                    <h5>
                        Book Publishing made success effortless
                    </h5>
                    <div className={styles.info}>
                        <Image 
                        src="/men-03.png" 
                        alt="avatar" 
                        width={37} 
                        height={37} 
                        className={styles.avatar} 
                        />
                        <p>
                            Mark J. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box4}`}>
                    <h5>
                        Professional, reliable, and truly inspiring
                    </h5>
                    <div className={styles.info}>
                        <Image 
                        src="/men-04.png" 
                        alt="avatar" 
                        width={37} 
                        height={37} 
                        className={styles.avatar} 
                        />
                        <p>
                            Sarah P. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box5}`}>
                    <h5>
                        From draft to bestseller, seamless journey
                    </h5>
                    <div className={styles.info}>
                        <Image 
                        src="/men-05.png" 
                        alt="avatar" 
                        width={37} 
                        height={37} 
                        className={styles.avatar} 
                        />
                        <p>
                            Kevin T. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box6}`}>
                    <div className={styles.info}>
                        <Image 
                        src="/feather.png" 
                        alt="feather image" 
                        width={30} 
                        height={28} 
                        className={styles.avatar} 
                        />
                        <p>At Book Publishing, we believe every</p>
                    </div>
                </div>
            </div>
            <h2>Testimonials</h2>
            <div className={`${styles.content} ${styles.down}`}>
                <div className={`${styles.box} ${styles.box1}`}>
                    <Image 
                    src="/men-06.png" 
                    alt="avatar" 
                    width={216} 
                    height={155} className={styles.myImage} />
                    <div className={styles.info}>
                        <Image 
                        src="/men-06-1.png" 
                        alt="avatar" 
                        width={47} 
                        height={46} 
                        className={styles.avatar} 
                        />
                        <p>
                            Laura W. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box2}`}>
                    <h5>
                        Publishing simplified, dreams amplified
                    </h5>
                    <div className={styles.info}>
                        <Image 
                        src="/men-07.png" 
                        alt="avatar" 
                        width={37} 
                        height={37} 
                        className={styles.avatar} 
                        />
                        <p>
                            John Smith <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                    <Image 
                    src="/men-08.png" 
                    alt="avatar" 
                    width={230} 
                    height={130} className={styles.myImage} />
                    <div className={styles.info}>
                        <Image 
                        src="/men-08-1.png" 
                        alt="avatar" 
                        width={47} 
                        height={46} 
                        className={styles.avatar} 
                        />
                        <p>
                            Daniel H. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box4}`}>
                    <h5>
                        Creative, fast, and deeply supportive
                    </h5>
                    <div className={styles.info}>
                        <Image 
                        src="/men-09.png" 
                        alt="avatar" 
                        width={37} 
                        height={37} 
                        className={styles.avatar} 
                        />
                        <p>
                            Emma C. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box5}`}>
                    <Image 
                    src="/men-06.png" 
                    alt="avatar" 
                    width={216} 
                    height={155} className={styles.myImage} />
                    <div className={styles.info}>
                        <Image 
                        src="/men-06-1.png" 
                        alt="avatar" 
                        width={47} 
                        height={46} 
                        className={styles.avatar} 
                        />
                        <p>
                            James K. <br /><span>Author of CODEX</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.box6}`}>
                    <div className={styles.info}>
                        <Image 
                        src="/feather.png" 
                        alt="feather image" 
                        width={30} 
                        height={28} 
                        className={styles.avatar} 
                        />
                        <p>At Book Publishing, we believe every</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mobileView}>
            <h2>Testimonials</h2>
            <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
                576: { 
                slidesPerView: 2,
                },
                320: {
                slidesPerView: 1,
                },
            }}
            >
          {mobileTestimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.box}>
                {item.text && <h5>{item.text}</h5>}
                <div className={styles.info}>
                  <Image
                    src={item.img}
                    alt="avatar"
                    width={37}
                    height={37}
                    className="myImage"
                  />
                  <p>
                    {item.name} <br />
                    <span>{item.role}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
