import styles from "./ProcessSection.module.css";
import ActionButtons from "@/components/ActionButtons";
import Image from "next/image";

export default function ProcessSection() {
return (
<section className={`${styles.process_section} sec_padding`}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_left}>
                    <Image src="/process-left-img.png" alt="Process Book" width={700} height={750}
                        className="myImages" />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_right}>
                    <h2>
                        <span className="primarytxt">Publishing Book</span>
                        <span className="break_line"></span> on is a Simple Process
                    </h2>
                    <p className="mb-0">
                        We are the master of amazon publishing, with our craft expanding to a diverse range of genres.
                        Our amazon publishing services enable you to publish a book without any hassle. We excel in
                        genres like:
                    </p>
                    <ul>
                        <li>
                            <div className={styles.box}>
                                <div className={styles.head}>
                                    <Image src="/romance-icon.png" alt="Process Book" width={36} height={36}
                                        className="myImages" />
                                    <h6>Romance</h6>
                                </div>
                                <p>
                                    Love is in the air. You and us together will spark the magic in your love stories.
                                    We deploy the best marketing tools to make your book rest in a shelf where all the
                                    bestselling authors are.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.box}>
                                <div className={styles.head}>
                                    <Image src="/thriller-icon.png" alt="Process Book" width={36} height={36}
                                        className="myImages" />
                                    <h6>Thriller</h6>
                                </div>
                                <p>
                                    Lights. Camera. Thriller. We can help you connect with the audience with your
                                    engaging tales that have the power to keep the readers hooked till the end.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.box}>
                                <div className={styles.head}>
                                    <Image src="/scifi-icon.png" alt="Process Book" width={36} height={36}
                                        className="myImages" />
                                    <h6>Sci-Fi</h6>
                                </div>
                                <p>
                                    We have the power to take you to the moon and back. Our publishing services can
                                    empower your ground-breaking stories to become known to the world in no time.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="combo_btn">
                        <ActionButtons />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}
