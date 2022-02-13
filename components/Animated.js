import React, { useEffect } from "react";
import { init } from "ityped";
import styles from "../styles/Animated.module.css";

function Animated() {
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      backDelay: 2000,
      strings: [
        "To be a leader, you need to be a reader.",
        "Visit here often.",
        "You've got alot to explore.",
      ],
    });
  });

  return (
    <div className={styles.container}>
      <p id="myElement"></p>
    </div>
  );
}

export default Animated;
