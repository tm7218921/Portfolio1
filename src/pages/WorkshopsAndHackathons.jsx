import React from "react";
import "./WorkshopsAndHackathons.css";

const workshops = [
  {
    title: "Microsoft Azure AI-900 Workshop",
    organizer: "SHAIDS DMCE",
    date: "Issued Jul 2024",
    credential: "https://photos.app.goo.gl/ikCv7excnN19dHwL7",
  },
  {
    title: "Web Development Workshop Series",
    organizer: "SHAIDS DMCE",
    date: "Issued Apr 2024",
    credential: "https://photos.app.goo.gl/mX3s3XFKoCkZt47p8",
  },
  {
    title: "Linux Commands and Shell Scripting",
    organizer: "SHAIDS DMCE",
    date: "Issued Jan 2024",
    credential: "https://photos.app.goo.gl/gwMJYm2PXgsroUwKA",
  },
  {
    title: "MySQL Workshop",
    organizer: "SHAIDS DMCE",
    date: "Issued Jan 2024",
    credential: "https://photos.app.goo.gl/TVDjnRmficQE93h79",
  },
];

const hackathons = [
  {
    name: "HackHive",
    organizer: "SHAIDS (Dept. of Artificial Intelligence and Data Science, DMCE)",
    role: "Team Member",
    project: "Study Planner (AI-based)",
    year: "2025",
    collaborators: [
      "Mahesh Badwaik",
      "Pratiksha Mirgane",
      "Sumit Kadam",
      "Nupoor Mhadgut",
    ],
  },
];

export default function WorkshopsAndHackathons() {
  return (
    <section id="workshops-hackathons" className="workshops__section fade-in">
      <h2>Workshops & Hackathons</h2>

      <div className="workshops__list-section">
        <h3 className="ws__subtitle">Workshops Attended</h3>
        <div className="workshops__list">
          {workshops.map((ws, idx) => (
            <div className="workshop__card" key={idx}>
              <div>
                <span className="workshop__title">{ws.title}</span>
                <span className="workshop__org">@ {ws.organizer}</span>
              </div>
              <div className="workshop__details">
                <span className="workshop__date">{ws.date}</span>
                <a
                  href={ws.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workshop__cred"
                >
                  Show Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hackathons__section">
        <h3 className="ws__subtitle">Hackathons</h3>
        {hackathons.map((hk, idx) => (
          <div className="hackathon__card" key={idx}>
            <span className="hackathon__name">{hk.name}</span>
            <span className="hackathon__org">@ {hk.organizer}</span>
            <div className="hackathon__details">
              <span className="hackathon__role">{hk.role}</span>
              <span className="hackathon__topic">
                Project: <strong>{hk.project}</strong>
              </span>
              <span className="hackathon__year">{hk.year}</span>
              {hk.collaborators && (
                <span className="hackathon__collaborators">
                  Collaborators: {hk.collaborators.join(", ")}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
