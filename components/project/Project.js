import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import rating from "../../assets/Rating.png";
import info from "../../assets/Transparent zoomed 1.svg";
function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.completed}>
        <h1>12+</h1>
        <h3>Completed Projects</h3>
      </div>
      <div className={styles.rating}>
        <Image src={rating} alt="rating" />
        <h4>Positive Review’s</h4>
      </div>
      <div className={styles.desc}>
        <h1>Glad to Help You!</h1>
        <p>
          As a web developer, I'm very keen on learning new and pioneering
          technologies, programming languages, and development techniques.
        </p>
        <Image src={info} alt="info"></Image>
      </div>
    </div>
  );
}

export default Project;
