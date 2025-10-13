"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./PortfolioSection.page.module.css";

export default function PortfolioSection() {
  const [activeGenre, setActiveGenre] = useState(0);

  const genres = [
    { name: "Fiction", books: ["/port-book-01.png","/port-book-02.png","/port-book-03.png","/port-book-04.png","/port-book-05.png","/port-book-06.png"] },
    { name: "Non-Fiction", books: ["/port-book-02.png","/port-book-03.png","/port-book-04.png","/port-book-05.png","/port-book-06.png","/port-book-01.png"] },
    { name: "Romance", books: ["/port-book-03.png","/port-book-04.png","/port-book-05.png","/port-book-06.png","/port-book-01.png","/port-book-02.png"] },
    { name: "Science", books: ["/port-book-04.png","/port-book-05.png","/port-book-06.png","/port-book-01.png","/port-book-02.png","/port-book-03.png"] },
    { name: "History", books: ["/port-book-05.png","/port-book-06.png","/port-book-01.png","/port-book-02.png","/port-book-03.png","/port-book-04.png"] },
    { name: "Fantasy", books: ["/port-book-06.png","/port-book-01.png","/port-book-02.png","/port-book-03.png","/port-book-04.png","/port-book-05.png"] },
    { name: "Biography", books: ["/port-book-01.png","/port-book-03.png","/port-book-05.png","/port-book-02.png","/port-book-04.png","/port-book-06.png"] },
    { name: "Children", books: ["/port-book-02.png","/port-book-04.png","/port-book-06.png","/port-book-01.png","/port-book-03.png","/port-book-05.png"] },
    { name: "Mystery", books: ["/port-book-03.png","/port-book-05.png","/port-book-01.png","/port-book-06.png","/port-book-02.png","/port-book-04.png"] },
  ];

  return (
    <section className={`${styles.portfolio_section} sec_padding`}>
      <Image
        src="/portfolio-banner-bg.png"
        alt="portfolio Bg Image"
        fill
        style={{ objectFit: "cover" }}
        className={styles.bannerBg}
      />
      <div className={`${styles.book} ${styles.book1}`}>
        <Image 
        src="/book-icon-01.png" 
        width={147} 
        height={121} 
        alt="Book Images" 
        />
      </div>
      <div className={`${styles.book} ${styles.book2}`}>
        <Image 
        src="/book-icon-02.png" 
        width={141} 
        height={123} 
        alt="Book Images" 
        />
      </div>
      <div className={`${styles.book} ${styles.book3}`}>
        <Image 
        src="/book-icon-03.png" 
        width={161} 
        height={124} 
        alt="Book Images" 
        />
      </div>
      <div className={`${styles.book} ${styles.book4}`}>
        <Image 
        src="/book-icon-04.png" 
        width={123} 
        height={114} 
        alt="Book Images" 
        />
      </div>
      <div className="container">
        <div className={`${styles.sec_top} text-center`}>
          <h2>
            We Publish these
            <span className="break_line"></span>
            <span className="primarytxt">Book Categories</span>
          </h2>
          <p>
            At Book Publishing, we believe every story has the power to change
            <span className="break_line"></span> the world. We publish books that inspire, entertain.
          </p>
          <ul className={styles.tabs}>
            {genres.map((genre, index) => (
              <li
                key={index}
                className={index === activeGenre ? styles.activeTab : ""}
                onClick={() => setActiveGenre(index)}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 3 }, 
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4 }, 
          1400: { slidesPerView: 5 }, 
        }}
        className={styles.swiper}>
        {genres[activeGenre].books.map((book, i) => (
          <SwiperSlide key={i}>
            <div className={styles.bookCard}>
              <Image 
              src={book} 
              alt="Portfolio Book" 
              fill 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
