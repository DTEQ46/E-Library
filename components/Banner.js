import Image from "next/image";
import styles from "../styles/Banner.module.css";
import Animated from "../components/Animated";
import arrow from "../public/3.png";

function Banner() {
  return (
    <div className={styles.major}>
      <div className={styles.bannerImg}></div>
      <div className={styles.bannerText}>
        <h3>
          Welcome to GSS Bukuru <br /> E-Library
        </h3>
        <Animated />
        <button>Learn How</button>
      </div>
      <div className={styles.arrow}>
        <Image
          src={arrow}
          style={{ position: "relative", marginLeft: "5rem" }}
        />
      </div>
    </div>
  );
}

export default Banner;
