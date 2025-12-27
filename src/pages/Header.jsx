import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Logo + Name → Home */}
      <Link to="/" className="header__branding" onClick={closeMenu}>
        <img
          src={require("../assets/logo.png")}
          alt="Site Icon"
          className="header__icon"
        />
        <div className="header__logo">TANMAY</div>
      </Link>

      {/* Hamburger button */}
      <button
        aria-label="Toggle menu"
        className={`header__menu-btn${menuOpen ? " open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      {/* Navigation */}
      <nav className={`header__nav${menuOpen ? " open" : ""}`}>
        <Link to="/about" className="nav__link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/skills" className="nav__link" onClick={closeMenu}>
          Skills
        </Link>
        <Link
          to="/work-experience"
          className="nav__link"
          onClick={closeMenu}
        >
          Experience
        </Link>
        <Link
          to="/academic-activities"
          className="nav__link"
          onClick={closeMenu}
        >
          Education
        </Link>
        <Link to="/projects" className="nav__link" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/contact" className="nav__link" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/blog" className="nav__link" onClick={closeMenu}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
