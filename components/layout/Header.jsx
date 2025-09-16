import styles from "./Header.module.css";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "@/config/config";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.head_top}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className={styles.left}>
                <p>🌟 One-Stop All Book Solutions For Authors & Writers</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.right}>
                <ul>
                  <li>
                    <a href="{`tel:${PHONE_NUMBER}`}">{PHONE_NUMBER}</a>
                  </li>
                  <li>
                    <a href="{`mailto:${EMAIL_ADDRESS}`}">{EMAIL_ADDRESS}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}