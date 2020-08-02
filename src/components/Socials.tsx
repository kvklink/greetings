import * as React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import * as styles from "./socials.module.scss";

const Socials = () => (
  <div className={styles.socials}>
    <a
      href="https://github.com/kvklink"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub className={styles.icon} />
    </a>
    <a
      href="https://linkedin.com/in/karel-van-klink"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn className={styles.icon} />
    </a>
    <a
      href="https://instagram.com/karelorkyle"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className={styles.icon} />
    </a>
  </div>
);

export default Socials;
