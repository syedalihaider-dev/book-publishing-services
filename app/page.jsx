import Image from "next/image";
import styles from "./page.module.css";
import ActionButtons from "@/components/ActionButtons";
import ChatButton from "@/components/ChatButton";
import { PHONE_NUMBER } from "@/config/config";
import PortfolioSlider from "@/components/PortfolioSlider";
import AwardsSection from "@/components/AwardsSection";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <section className={styles.banner}>
        <div className={`${styles.img} ${styles.book1}`}>
          <Image src="/banner-book-01.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book2}`}>
          <Image src="/banner-book-02.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book3}`}>
          <Image src="/banner-book-03.png"alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book4}`}>
          <Image src="/banner-book-04.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book5}`}>
          <Image src="/banner-book-05.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book6}`}>
          <Image src="/banner-book-06.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book7}`}>
          <Image src="/banner-book-07.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className={`${styles.img} ${styles.book8}`}>
          <Image src="/banner-book-08.png" alt="Book" width={191} height={286} className="myImage" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="content text-center">
                <h1>
                  <span className="primarytxt">Award Winning </span> 
                  <span className="break_line"></span>
                  Book Publishing Services? 
                </h1>
                <p>
                  Publishing a book with amazon is a hassle but luckily, not with us. We can help you in publishing book <span className="break_line"></span> 
                  on amazon without any trouble.  Get in touch today and say hello to the aspiring author inside you.
                </p>
                <div className="combo_btn">
                    <ActionButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <h2>
                  <span className="primarytxt">Book Publishing</span>
                  <span className="break_line"></span> isn’t Big Dream
                </h2>
                <p>
                  <strong>A few years back, publishing a book on amazon was nothing less than a blurred dream.</strong>
                  <br/> Luckily, with us, that dream is going to become a reality. We can become your partners in the process, helping you fulfill your dream of having a bestseller book to your name.
                </p>
                <div className="combo_btn">
                    <ActionButtons />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <Image src="/book-in-hand.png" alt="Book" width={661} height={562} className="myImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.services} sec_padding`}>
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
                  At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
                </p>
                <div className="combo_btn">
                    <ActionButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.box} ${styles.ebook_writing}`}>
            <h3 className={styles.heading}>eBook Writing</h3>
            <div className={styles.inner_box}>
                <h3>eBook Writing</h3>
                <p className="my-3">
                    At Book Publishing, we believe every story has the power to change the world.  We publish books that
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the
                    widest audience possible—both in print and digitally.
                </p>
                <ul>
                    <li>
                        <h4>257</h4>
                        <p className="mb-0">Books Published</p>
                    </li>
                    <li>
                        <h4>$24M</h4>
                        <p className="mb-0">Royalty Generated</p>
                    </li>
                </ul>
                <div className="combo_btn">
                    <ActionButtons />
                </div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.book_trailer}`}>
            <h3 className={styles.heading}>Book Trailer</h3>
            <div className={styles.inner_box}>
                <h3>Book Trailer</h3>
                <p className="my-3">
                    At Book Publishing, we believe every story has the power to change the world.  We publish books that
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the
                    widest audience possible—both in print and digitally.
                </p>
                <ul>
                    <li>
                        <h4>257</h4>
                        <p className="mb-0">Books Published</p>
                    </li>
                    <li>
                        <h4>$24M</h4>
                        <p className="mb-0">Royalty Generated</p>
                    </li>
                </ul>
                <div className="combo_btn">
                    <ChatButton />
                </div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.book_audio}`}>
            <h3 className={styles.heading}>Book Audio</h3>
            <div className={styles.inner_box}>
                <h3>Book Audio</h3>
                <p className="my-3">
                    At Book Publishing, we believe every story has the power to change the world.  We publish books that
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the
                    widest audience possible—both in print and digitally.
                </p>
                <ul>
                    <li>
                        <h4>257</h4>
                        <p className="mb-0">Books Published</p>
                    </li>
                    <li>
                        <h4>$24M</h4>
                        <p className="mb-0">Royalty Generated</p>
                    </li>
                </ul>
                <div className="combo_btn">
                    <ChatButton />
                </div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.book_cover}`}>
            <h3 className={styles.heading}>Book Cover Design</h3>
            <div className={styles.inner_box}>
                <h3>Book Cover Design</h3>
                <p className="my-3">
                    At Book Publishing, we believe every story has the power to change the world.  We publish books that
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the
                    widest audience possible—both in print and digitally.
                </p>
                <ul>
                    <li>
                        <h4>257</h4>
                        <p className="mb-0">Books Published</p>
                    </li>
                    <li>
                        <h4>$24M</h4>
                        <p className="mb-0">Royalty Generated</p>
                    </li>
                </ul>
                <div className="combo_btn">
                    <ChatButton />
                </div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.book_marketing}`}>
            <h3 className={styles.heading}>Book Marketing</h3>
            <div className={styles.inner_box}>
                <h3>Book Marketing</h3>
                <p className="my-3">
                    At Book Publishing, we believe every story has the power to change the world.  We publish books that
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the
                    widest audience possible—both in print and digitally.
                </p>
                <ul>
                    <li>
                        <h4>257</h4>
                        <p className="mb-0">Books Published</p>
                    </li>
                    <li>
                        <h4>$24M</h4>
                        <p className="mb-0">Royalty Generated</p>
                    </li>
                </ul>
                <div className="combo_btn">
                    <ChatButton />
                </div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.book_publishing}`}>
            <h3 className={styles.heading}>Book Publishing</h3>
            <div className={styles.inner_box}>
                <h3>Book Publishing</h3>
                <p className="my-3">
                    At Book Publishing, we believe every story has the power to change the world.  We publish books that
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the
                    widest audience possible—both in print and digitally.
                </p>
                <ul>
                    <li>
                        <h4>257</h4>
                        <p className="mb-0">Books Published</p>
                    </li>
                    <li>
                        <h4>$24M</h4>
                        <p className="mb-0">Royalty Generated</p>
                    </li>
                </ul>
                <div className="combo_btn">
                    <ChatButton />
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <Image src="/cta-logo-img.png" alt="book" width={89} height={89} className="myImage" />
                <h2>
                  Publish your Book with
                  <span className="break_line"></span>  
                  Book Publishing Services
                </h2>
                <div className="combo_btn">
                    <ChatButton />
                    <p className="mb-0">Have any queries regarding our award-winning services? Connect with us now via live chat or call.</p>
                </div>
                <div className={styles.call_btn}>
                    <Image src="/cta-call-icon.png" alt="cta call icon" width={32} height={32} className="myImage" />
                    <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <Image src="/cta-right-img.png" alt="Book" width={663} height={635} className="myImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`{styles.portfolio} sec_padding`}>
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
                    <span className="break_line"></span> the world.  We publish books that inspire, entertain.
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sec_content}>
            <PortfolioSlider />
        </div>
      </section>
      <AwardsSection />
      <ProcessSection />
    </div>
  );
}
