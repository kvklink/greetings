import * as React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./socials.css";

const Socials = () => (
  <div className="socials">
    <a
      href="https://github.com/kvklink"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub className="icon" />
    </a>
    <a
      href="https://linkedin.com/in/karel-van-klink"
      title="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn className="icon" />
    </a>
  </div>
);

export default Socials;
