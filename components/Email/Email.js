import React from "react";
import styles from "./Email.module.scss";
function Email() {
  return (
    <div className={styles.mail}>
      <div className={styles.description}>
        <h1>Interested working with me?</h1>
      </div>
      <button>Email Me !</button>
    </div>
  );
}

export default Email;
