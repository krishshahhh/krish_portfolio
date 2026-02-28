import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">&lt;*~*&gt;</div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Resources</a>
      </nav>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;