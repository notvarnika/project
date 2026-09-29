import React, { useState } from "react";
import styles from "./Button.module.css";

function Button({ isOpen, onToggle }) {
  return (
    <div className={styles["menu-container"]}>
      <button
        className={`${styles["hamburger-btn"]} ${isOpen ? styles.open : ""}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </button>
    </div>
  );
}

export default Button;
