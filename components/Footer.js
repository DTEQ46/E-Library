import styles from "../styles/Footer.module.css";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Footer() {
  return (
    <div className={styles.major} id="contact">
      <div className={styles.h3cont}>
        <h3>Contact</h3>
      </div>
      <div className={styles.subcont}>
        <div className={styles.social}>
          <h3>Let's Connect on...</h3>
          <Link href="#">
            <a>
              <FacebookIcon />
            </a>
          </Link>
          <Link href="#">
            <a>
              <TwitterIcon />
            </a>
          </Link>
          <Link href="#">
            <a>
              <InstagramIcon />
            </a>
          </Link>
          <Link href="#">
            <a>
              <WhatsAppIcon />
            </a>
          </Link>
        </div>
        <div className={styles.message}>
          <h3>Leave us a message</h3>
          <div className={styles.input1}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className={styles.input2}>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
