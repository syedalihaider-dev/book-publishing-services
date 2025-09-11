"use client";   // Must Be At The Very Top
import styles from "../app/page.module.css";
import ActionButtons from "@/components/ActionButtons";
import ChatButton from "@/components/ChatButton";
// import Slider from "react-slick";

const ServicesSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3, slidesToScroll: 3 },
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 2, slidesToScroll: 2 },
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
    ],
  };

  return (
    <div>
      <Slider {...settings} >
        <div>
            <div className={`${styles.box} ${styles.ebook_writing}`}>
                <h3 className={styles.heading}>eBook Writing</h3>
                <div className={styles.inner_box}>
                    <h3>eBook Writing</h3>
                    <p className="my-3">
                        At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
        </div>
        <div>
            <div className={`${styles.box} ${styles.book_trailer}`}>
                <h3 className={styles.heading}>eBook Writing</h3>
                <div className={styles.inner_box}>
                    <h3>eBook Writing</h3>
                    <p className="my-3">
                        At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
        <div>
            <div className={`${styles.box} ${styles.book_audio}`}>
                <h3 className={styles.heading}>eBook Writing</h3>
                <div className={styles.inner_box}>
                    <h3>eBook Writing</h3>
                    <p className="my-3">
                        At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
        <div>
            <div className={`${styles.box} ${styles.book_cover}`}>
                <h3 className={styles.heading}>eBook Writing</h3>
                <div className={styles.inner_box}>
                    <h3>eBook Writing</h3>
                    <p className="my-3">
                        At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
        <div>
            <div className={`${styles.box} ${styles.book_marketing}`}>
                <h3 className={styles.heading}>eBook Writing</h3>
                <div className={styles.inner_box}>
                    <h3>eBook Writing</h3>
                    <p className="my-3">
                        At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
        <div>
            <div className={`${styles.box} ${styles.book_publishing}`}>
                <h3 className={styles.heading}>eBook Writing</h3>
                <div className={styles.inner_box}>
                    <h3>eBook Writing</h3>
                    <p className="my-3">
                        At Book Publishing, we believe every story has the power to change the world.  We publish books that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
      </Slider>
    </div>
  );
};

export default ServicesSlider;