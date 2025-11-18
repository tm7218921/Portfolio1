import React from "react";
import "./WorkExperience.css";

const workExperience = [
  {
    title: "Google AI-ML Virtual Internship",
    organization: "All India Council for Technical Education (AICTE)",
    duration: "Oct 2024 – Dec 2024",
    responsibilities: [
      "Completed a virtual internship focused on AI and machine learning projects under AICTE",
      "Gained practical experience in ML algorithms, real-time data processing, and deep learning models",
      "Worked on real-world projects involving object detection and data analysis"
    ]
  },
  {
    title: "Frontend Development Intern",
    organization: "Prachet Agro Food Pvt. Ltd.",
    duration: "May 2025 – Jul 2025",
    responsibilities: [
      "Designed and developed the company website, focusing on responsive frontend development",
      "Utilized HTML, CSS, Tailwind, and React.js to build user-friendly interfaces",
      "Collaborated with the backend team to integrate features and maintain functionality",
      "Debugged and optimized website performance to ensure smooth user experience"
    ]
  }
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience fade-in">
      <h2>Work Experience</h2>
      <div className="experience__timeline">
        {workExperience.map((exp, index) => (
          <div key={index} className="experience__item">
            <div className="experience__marker"></div>
            <div className="experience__content">
              <h3 className="experience__title">{exp.title}</h3>
              <h4 className="experience__organization">{exp.organization}</h4>
              <p className="experience__duration">{exp.duration}</p>
              <ul className="experience__responsibilities">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
