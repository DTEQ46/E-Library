import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Dropdown.module.css";

function Dropdown({ click, MenuClick }) {
  const router = useRouter();
  return (
    <div
      className={!click ? styles.containerclicked : styles.container}
      onClick={MenuClick}
    >
      <button
        className={styles.button}
        onClick={() => {
          router.push("/books/web");
        }}
      >
        Web Technologies
      </button>
      <button
        className={styles.button}
        onClick={() => {
          router.push("/books/dbs");
        }}
      >
        Database Systems
      </button>
      <button
        className={styles.button}
        onClick={() => {
          router.push("/books/elect");
        }}
      >
        Electronics
      </button>
      <button
        className={styles.button}
        onClick={() => {
          router.push("/books/csc");
        }}
      >
        Computer Science
      </button>
    </div>
  );
}

export default Dropdown;
