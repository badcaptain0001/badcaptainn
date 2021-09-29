import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Icon from "../../assets/mail.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.mail}>
        <Image src={Icon} alt="mail" className={styles.icon}></Image>
        <p>rishabh@123.com</p>
      </div>
      <div className={styles.copyright}>
        <p>Made with ❤️ Rishabh</p>
      </div>
    </div>
  );
}

export default Footer;
