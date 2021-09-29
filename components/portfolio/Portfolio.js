import React from "react";
import Image from "next/image";
import styles from "./Portfolio.module.scss";
import Airbnb from "../../assets/airbnb.png";
import Starbuks from "../../assets/starbuks.png";
import fylo from "../../assets/fylo.png";
import portfolio from "../../assets/portfolio.png";

function Portfolio() {
  return (
    <div className={styles.port}>
      <div className={styles.title}>
        <h1>Portfolio</h1>
      </div>
      <div className={styles.projects}>
        <div>
          <Image src={Airbnb} alt="Airbnb Clone"></Image>
          <p className={styles.tag}>Airbnb Clone</p>
        </div>
        <div>
          <Image src={Starbuks} alt="Starbucks Clone"></Image>
          <p className={styles.tag}>Starbucks Clone</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
