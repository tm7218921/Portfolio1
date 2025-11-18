import React from "react";
import "./TechnicalBlog.css";

const blogEntries = [
  {
    title: "Building an AI Study Planner: Hackathon Project Deep Dive",
    date: "July 2024",
    summary:
      "A walkthrough of our prize-winning project at HackHive: designing and deploying an AI-powered Student Study Planner. Covers problem definition, dataset gathering (including web scraping), algorithm selection, UI/UX decisions, and project challenges.",
    link: "#"
  },
  {
    title: "Getting Started with Web Scraping Using Python",
    date: "June 2024",
    summary:
      "A practical guide to web scraping for beginners: selecting tools (BeautifulSoup, Requests), ethical scraping practices, and examples—like scraping workshop or news data for analysis in college projects.",
    link: "#"
  },
  {
    title: "What I Learned About AI from Microsoft’s Azure AI-900",
    date: "July 2024",
    summary:
      "Notes and concepts from the Microsoft Azure AI-900 certificate workshop, explained with diagrams and real-world applications. Highlights why foundational AI concepts matter in day-to-day coding.",
    link: "#"
  },
];

export default function TechnicalBlog() {
  return (
    <section id="blog" className="blog__section fade-in">
      <h2>Technical Blog</h2>
      <p className="blog__intro">
        I love sharing what I learn—through concise guides, project walkthroughs, and industry commentaries. Here are a few highlights.
      </p>
      <div className="blog__grid">
        {blogEntries.map((entry, idx) => (
          <div className="blog__card" key={idx}>
            <h3 className="blog__title">{entry.title}</h3>
            <span className="blog__date">{entry.date}</span>
            <p className="blog__summary">{entry.summary}</p>
            {/* Replace `#` with your actual blog post URLs */}
            <a className="blog__link" href={entry.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
