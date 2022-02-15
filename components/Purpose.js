import styles from "../styles/Purpose.module.css";
import Link from "next/link";
function Purpose() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.p1}>
          Our priority is to help both secondary school students and teachers
          get easy access to relevant books for learning...
        </p>
      </div>
      <div>
        <p className={styles.p2}>
          Click{" "}
          <Link href="#">
            <a>here </a>
          </Link>
          to learn more about our library’s mode of operation
        </p>
      </div>
    </div>
  );
}

export default Purpose;
