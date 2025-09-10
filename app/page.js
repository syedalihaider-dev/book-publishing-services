import Image from "next/image";
import styles from "./page.module.css";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <section className={styles.banner}>
        <div className={`${styles.img} ${styles.book1}`}>
          <Image 
            src="/banner-book-01.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book2}`}>
          <Image 
            src="/banner-book-02.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book3}`}>
          <Image 
            src="/banner-book-03.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book4}`}>
          <Image 
            src="/banner-book-04.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book5}`}>
          <Image 
            src="/banner-book-05.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book6}`}>
          <Image 
            src="/banner-book-06.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book7}`}>
          <Image 
            src="/banner-book-07.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className={`${styles.img} ${styles.book8}`}>
          <Image 
            src="/banner-book-08.png"
            alt="Book" 
            width={191}
            height={286}
            className="myImage"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="content text-center">
                <h1>
                  <span className="primarytxt">Award Winning </span> 
                  <span className="break_line"></span>
                  Book Publishing Services? 
                  <span className="break_line"></span> 
                  W’ve got you covered
                </h1>
                <p>
                  Publishing a book is a hassle but luckily, not with us. We can help you in publishing book without any trouble.
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
                  Book Publishing isn’t <span className="break_line"></span>
                  <span className="primarytxt">Big Dream </span>
                </h2>
                <p>
                  At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
                </p>
                <div className="combo_btn">
                    <ActionButtons />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <Image 
                  src="/book-in-hand.png"
                  alt="Book" 
                  width={661}
                  height={562}
                  className="myImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
