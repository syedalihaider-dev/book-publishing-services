import styles from "../terms-and-conditions/page.module.css";

export default function TermsAndConditions() {
return (
<div className={styles.privacy}>
  <section className={styles.term_banner}>
    <div className="container">
      <h1>
        <span className="primarytxt">Award Winning </span>
        <span className="break_line"></span>
        Book Publishing Services?
      </h1>
      <p>
        Publishing a book with amazon is a hassle but luckily, not with us.
        <span className="break_line"></span>
        We can help you in publishing book on amazon without any trouble.
      </p>
    </div>
  </section>
</div>
);
}