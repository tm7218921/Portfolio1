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
    title: "Voice Pizza Order Status Agent",
    date: "Dec 2025",
    description:
      "Built a Python-based voice assistant that lets users check pizza order status by speaking an order ID. The system uses speech recognition to capture input, fetches order details from JSON, and responds with AI-generated voice output.",
    stack: "Python, SpeechRecognition, ElevenLabs API, JSON",
    repo: "https://github.com/tm7218921/voice-pizza-order-status-Agent"
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
    description:
      "Designed smart contracts on Ethereum to manage secure product registration and ownership tracking.",
    stack: "Blockchain, Ethereum, Smart Contracts, Web3, Python"
  },
  {
    title: "Simon Says – Color Memory Game",
    date: "Aug 2025",
    description:
      "Built an interactive color-based memory game where players repeat an increasing sequence of colors to advance levels.",
    stack: "HTML, CSS, JavaScript",
    live: "https://tm7218921.github.io/simon-says-game/"
  },
  {
    title: "Spotify Clone",
    date: "July 2025",
    description:
      "Developed a front-end clone of Spotify with a responsive UI, music controls, and playlist-style layout.",
    stack: "HTML, CSS, JavaScript",
    repo: "https://github.com/tm7218921/Spotify-Clone"
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

            <div className="project__links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
