import { useState, useEffect } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/Auth";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const { logIn } = useAuth();

  const handleFocus = () => setFocused(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles[`login-input-group`]}`)) {
        setFocused(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (user && pass) setFocused(false);
  }, [user, pass]);

  const userSubmit = async (e) => {
    e.preventDefault();
    if (!user || !pass) {
      alert("Please enter both user ID and password.");
      return;
    }

    await logIn({ emailId: user, password: pass });
  };

  return (
    <div
      className={`${styles[`login-body`]} ${focused ? styles[`blur-active`] : ""}`}
    >
      <div className={styles[`login-container`]}>
        <div className={styles[`login-left`]}>
          <form className={styles[`login-form`]} onSubmit={userSubmit}>
            <h1 className={styles[`login-h1`]}>LOGIN</h1>

            <div className={styles[`login-input-group`]}>
              <input
                className={styles[`login-input`]}
                type="email"
                id="email"
                placeholder="your@email.com"
                onFocus={handleFocus}
                autoComplete="username"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
              <label className={styles[`login-label`]} htmlFor="email">
                USER ID
              </label>
            </div>
            <div className={styles[`login-input-group`]}>
              <input
                className={styles[`login-input`]}
                type="password"
                id="password"
                placeholder="••••••••"
                autoComplete="current-password"
                onFocus={handleFocus}
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
              <label className={styles[`login-label`]} htmlFor="password">
                PASSWORD
              </label>
            </div>

            <p
              className={styles[`login-forgot-password`]}
              onClick={() => navigate("/ForgotPass")}
            >
              forgot password?
            </p>
            <button className={styles[`login-button`]} type="submit">
              SIGN IN
            </button>
          </form>
        </div>

        <div className={styles[`login-right`]}>
          <h2 className={styles.objectives}>Our Objective</h2>
          <ul>
            <li className={styles.ob1}>Objective 1</li>
            <li className={styles.ob2}>Objective 2</li>
            <li className={styles.ob3}>Objective 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
