import styles from "./ProcessSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";
import Image from "next/image";

export default function ProcessSection() {
  // ✅ Process steps ko array me daal diya
  const steps = [
    {
      icon: "/romance-icon.png",
      title: "Romance",
      text: "Love is in the air. You and us together will spark the magic in your love stories. We deploy the best marketing tools to make your book rest in a shelf where all the bestselling authors are.",
    },
    {
      icon: "/thriller-icon.png",
      title: "Thriller",
      text: "Lights. Camera. Thriller. We can help you connect with the audience with your engaging tales that have the power to keep the readers hooked till the end.",
    },
    {
      icon: "/scifi-icon.png",
      title: "Sci-Fi",
      text: "We have the power to take you to the moon and back. Our publishing services can empower your ground-breaking stories to become known to the world in no time.",
    },
  ];

  return (
    <section className={`${styles.process_section} sec_padding`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_left}>
              <Image
                src="/process-left-img.png"
                alt="Process Book" 
                fill 
                className="myImages"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <h2>
                <span className="primarytxt">Publishing Book</span>
                <span className="break_line"></span> on is a Simple Process
              </h2>
              <p className="mb-0">
                We are the master of amazon publishing, with our craft expanding
                to a diverse range of genres. Our amazon publishing services
                enable you to publish a book without any hassle. We excel in
                genres like:
              </p>
              
              <ul>
                {steps.map((step, i) => (
                  <li key={i}>
                    <div className={styles.box}>
                      <div className={styles.head}>
                        <div className={styles.img}>
                            <Image
                            src={step.icon}
                            alt={step.title} 
                            fill
                            className="myImages"
                            />
                        </div>
                        <h6>{step.title}</h6>
                      </div>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
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
