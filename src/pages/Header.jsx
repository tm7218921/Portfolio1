import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu and optionally close menu when link clicked (good UX)
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__branding">
        <img src={require("../assets/logo.png")} alt="Site Icon" className="header__icon" />
        <div className="header__logo">TANMAY</div>
      </div>

      {/* Hamburger button for small screens */}
      <button
        aria-label="Toggle menu"
        className={`header__menu-btn${menuOpen ? " open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776; {/* hamburger unicode icon */}
      </button>

      {/* Navigation menu */}
      <nav className={`header__nav${menuOpen ? " open" : ""}`}>
        <a href="about" className="nav__link" onClick={closeMenu}>About</a>
        <a href="skills" className="nav__link" onClick={closeMenu}>Skills</a>
        <a href="work-experience" className="nav__link" onClick={closeMenu}>Experience</a>
        <a href="academic-activities" className="nav__link" onClick={closeMenu}>Education</a>
        <a href="projects" className="nav__link" onClick={closeMenu}>Projects</a>
        <a href="contact" className="nav__link" onClick={closeMenu}>Contact</a>
        <a href="blog" className="nav__link" onClick={closeMenu}>Blog</a>
      </nav>
    </header>
  );
}
