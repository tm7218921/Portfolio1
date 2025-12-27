import React from "react";
import "./ProfileSection.css";
import myphoto from "../assets/myphoto.jpg"; // Adjust path as needed


export default function ProfileSection() {
  return (
    <section className="profile fade-in">
      <img className="profile__avatar" src={myphoto} alt="Tanmay Vikas Mandal" />
      <div>
        <h1 className="profile__name">Tanmay Vikas Mandal</h1>
        <p className="profile__role">Software Engineer</p>
        <div className="profile__contact">
          <a href="mailto:aids.61.tanmaymandal@gmail.com">aids.61.tanmaymandal@gmail.com</a> |
          <a href="tel:+917385122101">+91-7385122101</a>
        </div>
        <div className="profile__links">
          <a href="https://github.com/tm7218921" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/tanmay-mandal-a56a42313" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
