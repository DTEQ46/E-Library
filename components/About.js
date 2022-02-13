import styles from "../styles/About.module.css";

import Link from "next/link";
function Purpose() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.h3cont}>
        <h3>About Our Library</h3>
        <p>
          This library was founded by the management of Government Secondary
          School Bukuru, Jos, Plateau State, Nigeria. The library is intended to
          aid E-Learning amongst students and teachers...
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Purpose;
