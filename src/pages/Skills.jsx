import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C", "Java", "Python", "JavaScript"]
  },
  {
    category: "Technologies & Frameworks",
    skills: ["Node.js", "React.js", "Express", "Streamlit"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "OpenCV", "Pandas", "Dlib"]
  },
  {
    category: "Domains",
    skills: [
      "Machine Learning",
      "Web Development",
      "Deep Learning",
      "Computer Vision"
    ]
  },
  {
    category: "Creative & Communication Skills",
    skills: [
      "Video Editing",
      "Blog Writing",
      "Poetry Writing",
      "Content Creation",
      "Visual Storytelling"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills fade-in">
      <h2>Skills</h2>
      <div className="skills__container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills__category">
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill__tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
