import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
        <p className="footer-text">Keep guessing, keep winning! 🎉</p>
        <p className="footer-text">|</p>
        <p className="footer-text bold-text">All copyrights and logos belong to Wordle. This project is intended solely as a clone as portfolio purposes.</p>
        <p className="footer-text">|</p>
        <a href="https://github.com/Adkasy" className="footer-text  github" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" className="github-logo" />
          Adkasy
        </a>
      </div>
    </div>
  );
};

export default Footer;
