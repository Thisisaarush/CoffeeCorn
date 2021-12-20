import React from "react";

// styles
import styles from "./banner.module.css";

const Banner = ({ buttonText, handleExplore }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}> Corn</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleExplore}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
