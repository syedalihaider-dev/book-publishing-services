import ChatButton from "@/components/ChatButton";
import ActionButtons from "@/components/ActionButtons";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
return (
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
                        At Book Publishing, we believe every story has the power to change the world.  We publish books
                        that inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a
                        thrilling debut novel, a groundbreaking non-fiction work, or a children’s story that sparks
                        imagination, we ensure it reaches the widest audience possible—both in print and digitally.
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
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling
                    debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it
                    reaches the
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
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling
                    debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it
                    reaches the
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
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling
                    debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it
                    reaches the
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
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling
                    debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it
                    reaches the
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
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling
                    debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it
                    reaches the
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
                    inspire, entertain, and leave a lasting impact on readers of all ages. Whether it’s a thrilling
                    debut novel,
                    a groundbreaking non-fiction work, or a children’s story that sparks imagination, we ensure it
                    reaches the
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
);
}