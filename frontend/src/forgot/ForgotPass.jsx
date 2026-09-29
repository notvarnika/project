import styles from "./ForgotPass.module.css";

function ForgotPass() {
  return (
    <div className={styles["forgot-pass-body"]}>
      <div className={styles["forgot-pass-container"]}>
        <h2>Forgot Password</h2>
        <p>Please enter your email address to reset your password.</p>
        <input type="email" placeholder="Email Address" />
        <button className={styles["forgot-pass-button"]}>Submit</button>
      </div>
    </div>
  );
}

export default ForgotPass;
