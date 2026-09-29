import styles from "./Header.module.css";
import Logout from "../logout/Logout";
import { useState } from "react";
import ThemeButton from "../button/ThemeButton";
import { useTheme } from "../context/CreateContext";

function Header({ user, loading }) {
  const { theme } = useTheme();
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    if (!loading) {
      setShowLogout(!showLogout);
    }
  };

  return (
    <div className={`${styles.layout} ${theme}`}>
      <header
        className={`${styles["header-fix-top"]} ${loading ? styles["skeleton-pulse"] : ""}`}
      >
        <div className={styles["header-left"]}>
          {loading ? (
            <div
              className={`${styles["header-logo"]} ${styles["skeleton-block"]}`}
            />
          ) : (
            <img src="/logo.png" alt="Logo" className={styles["header-logo"]} />
          )}
        </div>

        <div className={styles["header-right"]}>
          {/* Render directly inside header layout without top offset */}
          <div className={styles["theme-wrapper"]}>
            <ThemeButton />
          </div>

          <div className={styles["header-user"]}>
            {loading ? (
              <div className={styles["skeleton-text"]} />
            ) : (
              <span className={styles["welcome-text"]}>
                {user?.name ? `Welcome, ${user.name}` : ""}
              </span>
            )}

            {loading ? (
              <div
                className={`${styles["header-profile"]} ${styles["skeleton-circle"]}`}
              />
            ) : (
              <img
                src="/profile.png"
                alt="Profile"
                className={styles["header-profile"]}
                onClick={toggleLogout}
              />
            )}

            {!loading && showLogout && (
              <div className={styles["logout-dropdown"]}>
                <Logout />
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
