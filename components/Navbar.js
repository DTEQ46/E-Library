import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";

function Navbar() {
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

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">
              <a onClick={MenuClick}>
                Books{" "}
                <span>
                  <i
                    className={
                      click ? "fas fa-caret-down" : "fas fa-caret-right"
                    }
                  />
                </span>
              </a>
            </Link>
          </li>

          {click && <Dropdown click={click} MenuClick={MenuClick} />}

          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#">Help</Link>
          </li>
        </ul>
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

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">
                <a onClick={MenuClick}>
                  Books
                  <i
                    className={
                      click ? "fas fa-caret-down" : "fas fa-caret-right"
                    }
                  />
                </a>
              </Link>
            </li>

            {click && <Dropdown click={click} MenuClick={MenuClick} />}

            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#">Help</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
