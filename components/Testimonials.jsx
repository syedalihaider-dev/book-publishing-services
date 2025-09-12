import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
return (
<section className={` ${styles.testimonials_section} sec_padding`}>
    <div className={styles.content}>
        <div className={`${styles.box} ${styles.box1}`}>
            <h5>
                Don’t be afraid to make Publish Services
            </h5>
            <div className={styles.info}>
                <Image src="/men-01.png" alt="avatar" width={37} height={37} className="myImage" />
                <p>
                    Charles Gachet <br /><span>Author of CODEX</span>
                </p>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
            <Image src="/men-02.png" alt="avatar" width={295} height={155} className="myImage" />
            <div className={styles.info}>
                <Image src="/men-02-1.png" alt="avatar" width={47} height={46} className="myImage" />
                <p>
                    Charles Gachet <br /><span>Author of CODEX</span>
                </p>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
            <h5>
                Don’t be afraid to make Publish Services
            </h5>
            <div className={styles.info}>
                <Image src="/men-03.png" alt="avatar" width={37} height={37} className="myImage" />
                <p>
                    Charles Gachet <br /><span>Author of CODEX</span>
                </p>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
            <h5>
                Publish the world with a wide angle Lens
            </h5>
            <div className={styles.info}>
                <Image src="/men-04.png" alt="avatar" width={37} height={37} className="myImage" />
                <p>
                    Charles Gachet <br /><span>Author of CODEX</span>
                </p>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
            <h5>
                Don’t be afraid to make Publish Services
            </h5>
            <div className={styles.info}>
                <Image src="/men-05.png" alt="avatar" width={37} height={37} className="myImage" />
                <p>
                    Charles Gachet <br /><span>Author of CODEX</span>
                </p>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
            <div className={styles.info}>
                <Image src="/feather.png" alt="feather image" width={30} height={28} className="myImage" />
                <p>At Book Publishing, we believe every</p>
            </div>
        </div>
    </div>
    <h2>Testimonials</h2>
</section>
);
}