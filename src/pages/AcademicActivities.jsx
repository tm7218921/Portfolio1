import React from "react";
import "./AcademicActivities.css";

const academicData = {
  education: [
    {
      institution: "Datta Meghe College of Engineering, Airoli, Navi Mumbai",
      degree: "Bachelor of Engineering (B.E) – Artificial Intelligence and Data Science",
      grade: "CGPA: 7.54",
      duration: "2022 – 2026",
      location: "Navi Mumbai"
    },
    {
      institution: "K. R. K. Kakani Kanishth Mahavidyalay",
      degree: "Pre-University (HSC) – Physics, Chemistry, Maths and Biology",
      grade: "Percentage: 82.50%",
      duration: "2020 – 2022",
      location: "Malegaon"
    },
    {
      institution: "Z. P. Kakani Vidyalaya School",
      degree: "Secondary Schooling (SSC)",
      grade: "Percentage: 91.80%",
      duration: "2008 – 2020",
      location: "Malegaon"
    }
  ],
  achievements: [
    {
      title: "Marathi Vangmay Mandal Fort Making",
      year: "2022",
      type: "Competition"
    },
    {
      title: "Marathi Vangmay Mandal Graphics Team Member",
      year: "Feb 2025",
      type: "Leadership"
    },
    {
      title: "Poetry Published in Adhyayan College Magazine",
      year: "Feb 2025",
      type: "Publication"
    }
  ]
};

export default function AcademicActivities() {
  return (
    <section id="academic-activities" className="academic-activities fade-in">
      <h2>Education & Activities</h2>
      
      {/* Education Section */}
      <div className="education__section">
        <h3 className="section__title">🎓 Education</h3>
        <div className="education__timeline">
          {academicData.education.map((edu, index) => (
            <div key={index} className="education__card">
              <h4 className="education__institution">{edu.institution}</h4>
              <p className="education__degree">{edu.degree}</p>
              <div className="education__details">
                <span className="education__grade">{edu.grade}</span>
                <span className="education__duration">{edu.duration}</span>
              </div>
              <p className="education__location">📍 {edu.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements__section">
        <h3 className="section__title">🏆 Academic & Extracurricular Achievements</h3>
        <div className="achievements__grid">
          {academicData.achievements.map((achievement, index) => (
            <div key={index} className="achievement__card">
              <div className="achievement__type">{achievement.type}</div>
              <h4 className="achievement__title">{achievement.title}</h4>
              <p className="achievement__year">{achievement.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
