import Image from "next/image";
import styles from "./BestSellingAuthor.module.css";
import ActionButtons from "@/components/ActionButtons";

export default function BestSellingAuthor() {
return (
<section className={`{styles.author_section} sec_padding`}>
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_right}>
                    <h2>
                        <span className="primarytxt">Best Selling Author</span>
                        <span className="break_line"></span> that make us Book Publishing Champion                        
                    </h2>
                    <p>
                        From debut storytellers to celebrated literary icons, our authors are the heart of our work. Explore biographies, latest releases, interviews, and upcoming events. From debut storytellers to celebrated literary icons, our authors are the heart of our work. Explore biographies, latest releases, interviews, and upcoming events.
                    </p>
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
