import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Smart Attendance System",
    date: "Aug 2024 – Oct 2024",
    description:
      "Real-time face recognition attendance system with defaulter alerts using face detection and recognition.",
    stack: "Python, OpenCV, Dlib, Pandas, Streamlit",
    repo: "https://github.com/tm7218921/Smart-attendance-System",
  },
  {
    title: "QA Defect Analytics Dashboard",
    date: "Oct 2025",
    description:
      "Built an interactive dashboard to analyze QA defect data, visualize trends, severity distribution, and module-wise bug density to support data-driven quality decisions.",
    stack: "Python, Pandas, Streamlit, Data Visualization",
    repo: "https://github.com/tm7218921/qa-defect-analytics-dashboard",
  },
  {
    title: "n8n Workflow Automation",
    date: "Nov 2025",
    description:
      "Designed automated workflows using n8n to integrate APIs, process data, and trigger actions across services, reducing manual effort and improving operational efficiency.",
    stack: "n8n, APIs, Webhooks, JSON, Automation",
    repo: "https://github.com/tm7218921/n8n-workflows",
  },
  {
    title: "Voice Pizza Order Status Agent",
    date: "Dec 2025",
    description:
      "Built a Python-based voice assistant that lets users check pizza order status by speaking an order ID, using speech recognition and AI-generated voice output.",
    stack: "Python, SpeechRecognition, ElevenLabs API, JSON",
    repo: "https://github.com/tm7218921/voice-pizza-order-status-agent",
  },
  {
    title: "Direct Market Access Platform",
    date: "Mar 2025 – Apr 2025",
    description:
      "Web application for real-time product listings and dashboards connecting farmers directly with retailers.",
    stack: "Node.js, Express, MongoDB, EJS",
    repo: "https://github.com/tm7218921/direct-market-access",
  },
  {
    title: "Object Tracking System",
    date: "Dec 2024 – Jan 2025",
    description:
      "Live object tracking system using YOLOv3 trained on the COCO dataset for robust real-time detection.",
    stack: "YOLOv3, Python, Deep Learning",
    repo: "https://github.com/tm7218921/Object_tracking_System",
  },
  {
    title: "Product Authentication Using Blockchain",
    date: "Sep 2025 – Oct 2025",
    description:
      "Designed Ethereum smart contracts to securely register products and track ownership to prevent counterfeiting.",
    stack: "Blockchain, Ethereum, Smart Contracts, Web3, Python",
    repo: "https://github.com/tm7218921/Product-Auth-Using-Blockchain",
  },
  {
    title: "Simon Says – Color Memory Game",
    date: "Aug 2025",
    description:
      "Interactive color-based memory game where players repeat an increasing sequence to advance levels.",
    stack: "HTML, CSS, JavaScript",
    live: "https://tm7218921.github.io/simon-says-game/",
  },
  {
    title: "Spotify Clone",
    date: "Jul 2025",
    description:
      "Front-end clone of Spotify with responsive UI, music controls, and playlist-style layout.",
    stack: "HTML, CSS, JavaScript",
    repo: "https://github.com/tm7218921/Spotify-Clone",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects fade-in">
      <h2>Projects</h2>

      <div className="projects__list">
        {projects.map((p) => (
          <div className="project__card" key={p.title}>
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
