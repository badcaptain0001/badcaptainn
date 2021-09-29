import React from "react";
import styles from "./Hero.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className={styles.main}>
      <div>
        <p className={styles.Heading}>Hi</p>
        <h1 className={styles.title}>I’m Rishabh Sharma Frontend developer.</h1>
        <p className={styles.description}>
          Frontend developer based in Himachal Pardesh, India.
          <br /> I am coding with a clean and beautiful problem solving in mind.
        </p>
      </div>
      <div className={styles.social}>
        <FaFacebookSquare size="2rem" color="#FF7315" />
        <RiInstagramFill size="2rem" color="#FF7315" />
        <FaLinkedin size="2rem" color="#FF7315" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button1}>Send Request</button>
        <button className={styles.button2}>Download CV</button>
      </div>
    </div>
  );
}

export default Hero;
