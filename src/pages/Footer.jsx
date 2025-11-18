import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        © {new Date().getFullYear()} Tanmay Vikas Mandal — <span className="footer__mail">aids.61.tanmaymandal@gmail.com</span>
      </div>
      <div className="footer__links">
        <a href="https://github.com/tm7218921" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tanmay-mandal-a56a42313" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
