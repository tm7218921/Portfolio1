import React from "react";
import "./Projects.css";


const projects = [
  {
    title: "Smart Attendance System",
    date: "Aug 2024 – Oct 2024",
    description: "Real-time face recognition attendance system with defaulter alerts.",
    stack: "Python, OpenCV, Dlib, Pandas, Streamlit"
  },
  {
    title: "Direct Market Access Platform",
    date: "Mar 2025 – Apr 2025",
    description: "Web app for real-time product listings and dashboards for farmers/retailers.",
    stack: "Node.js, Express, MongoDB, EJS"
  },
  {
    title: "Object Tracking System",
    date: "Dec 2024 – Jan 2024",
    description: "Live object tracking using YOLOv3, trained on COCO for robust detection.",
    stack: "YOLOv3, Python, Deep Learning"
  },
  {
    title: "Product Authentication Using Blockchain",
    date: "Sept 2025 – Oct 2025",
    description: "Designed smart contracts on Ethereum to manage secure product registration and ownership tracking.",
    stack: "Blockchain, Ethereum, Smart Contracts, Web3, Python"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects fade-in">
      <h2>Projects</h2>
      <div className="projects__list">
        {projects.map((p, i) => (
          <div className="project__card" key={i}>
            <div className="project__title">{p.title}</div>
            <div className="project__date">{p.date}</div>
            <div className="project__desc">{p.description}</div>
            <div className="project__stack">{p.stack}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
