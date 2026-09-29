import { useAuth } from "../auth/Auth";
import styles from "./Welcome.module.css";

export default function Welcome() {
  const { user } = useAuth();

  return (
    <div className={styles.welcomeCard}>
      <fieldset className={styles.welcomeFieldset}>
        <h2 className={styles.welcomeName}>{user?.userName || "USER NAME"}</h2>

        <div className={styles.welcomeInfoRow}>
          <span className={styles.welcomeLabel}>Your Registration No. :</span>
          <span className={styles.welcomeValue}>{user?.userId || "N/A"}</span>
        </div>

        <div className={styles.welcomeInfoRow}>
          <span className={styles.welcomeLabel}>Your Email :</span>
          <span className={styles.welcomeValue}>{user?.emailId || "N/A"}</span>
        </div>
      </fieldset>
    </div>
  );
}
