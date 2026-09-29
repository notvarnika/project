import { useState } from "react";
import { useAuth } from "../auth/Auth";
import styles from "./Logout.module.css";

function Logout() {
  const [showOptions, setShowOptions] = useState(false);

  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div>
        <button
          className={styles["logout-btn"]}
          type="button"
          onClick={() => setShowOptions(!showOptions)}
        >
          logout
        </button>

        {showOptions && (
          <div className={styles["logout-overlay-topright"]}>
            <div className={styles["logout-popup"]}>
              <h2>Log out?</h2>
              <button
                type="button"
                className={styles["logout-btn-yes"]}
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                type="button"
                className={styles["logout-btn-no"]}
                onClick={() => setShowOptions(false)}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Logout;
