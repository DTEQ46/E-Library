import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const [click, setClick] = useState(false);
  const [mclick, setMclick] = useState(false);

  const handleClick = () => setMclick(!mclick);
  const MenuClick = () => {
    setClick(!click);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoImg}></div>

        <h3 className={styles.h3}>GSS Bukuru</h3>
        <h6 className={styles.h6}>E-Library</h6>

        <button
          className={styles.button}
          onClick={session ? handleSignout : handleSignin}
        >
          {!session ? "Login" : "Logout"}
        </button>
        {session && (
          <div className={styles.avatar}>
            <img src={session.user.image} alt="avatar" />
          </div>
        )}

        <div className={styles.linkCont}>
          <button
            className={styles.linkBtn}
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </button>
          <button className={styles.linkBtn} onClick={MenuClick}>
            Books{" "}
            <i className={click ? "fas fa-caret-down" : "fas fa-caret-right"} />
          </button>
          <button
            className={styles.linkBtn}
            onClick={() => {
              router.push("#about");
            }}
          >
            About
          </button>
          <button
            className={styles.linkBtn}
            onClick={() => {
              router.push("#contact");
            }}
          >
            Contact
          </button>
          {click && <Dropdown click={click} MenuClick={MenuClick} />}
        </div>
      </nav>
      <nav className={styles.mobileNav}>
        <div className={styles.logoImg}></div>

        <h3 className={styles.h3}>GSS Bukuru</h3>
        <h6 className={styles.h6}>E-Library</h6>
        <div className={styles.menuIcon} onClick={handleClick}>
          <i
            className={mclick ? "fas fa-times" : "fas fa-bars"}
            style={{
              color: "#00cbfe",
              fontSize: "1.5rem",
            }}
          />
        </div>
      </nav>
      {mclick && (
        <div className={styles.mobileMenu}>
          {session && (
            <div className={styles.avatar}>
              <img src={session.user.image} alt="avatar" />
            </div>
          )}
          <button
            className={styles.button}
            onClick={session ? handleSignout : handleSignin}
          >
            {!session ? "Login" : "Logout"}
          </button>

          <div className={styles.linkCont}>
            <button
              className={styles.linkBtn}
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </button>
            <button className={styles.linkBtn} onClick={MenuClick}>
              Books{" "}
              <i
                className={click ? "fas fa-caret-down" : "fas fa-caret-right"}
              />
            </button>
            <button
              className={styles.linkBtn}
              onClick={() => {
                router.push("#about");
              }}
            >
              About
            </button>
            <button
              className={styles.linkBtn}
              onClick={() => {
                router.push("#contact");
              }}
            >
              Contact
            </button>
            {click && <Dropdown click={click} MenuClick={MenuClick} />}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

//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
//https://elibrary-psi.vercel.app/api/auth/callback/google
