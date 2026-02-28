import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        <p>Building. Learning. Improving.</p>
      </div>

      <div className="footer-right">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <span className="handle">@krish</span>
      </div>

    </footer>
  );
};

export default Footer;