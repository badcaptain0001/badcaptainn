import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";
import group from "../../assets/Group.png";
import profession from "../../assets/Layer_65.png";
import hand from "../../assets/Group 243.png";

function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.communication}>
        <Image src={group} alt="group"></Image>
        <p>Communicative</p>
      </div>
      <div className={styles.communication}>
        <Image src={profession} alt="group"></Image>
        <p>Professional</p>
      </div>
      <div className={styles.communication}>
        <Image src={hand} alt="group"></Image>
        <p>Collaborative​</p>
      </div>
    </div>
  );
}

export default About;
