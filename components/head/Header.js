import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav_bar}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" width={90} height={40} />
        </div>
        <div className={styles.menuicon}>
          <h1>
            <HiOutlineMenuAlt1 />
          </h1>
        </div>
      </nav>
    </div>
  );
}

export default Header;
