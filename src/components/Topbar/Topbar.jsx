import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <img
        src="/src/assets/wordle-logo.png"
        alt="logo-wordle"
        className="wordle-logo"
      />
      <p className="topbar">WORDLE</p>
    </div>
  );
};

export default Topbar;
