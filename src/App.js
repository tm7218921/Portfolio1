import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
// Pages
import ProfileSection from "./pages/ProfileSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import AcademicActivities from "./pages/AcademicActivities";
import WorkshopsAndHackathons from "./pages/WorkshopsAndHackathons";
import Projects from "./pages/Projects";
import TechnicalBlog from "./pages/TechnicalBlog";
import Contact from "./pages/Contact";
import { Helmet } from "react-helmet";
import "./index.css";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Tanmay Mandal - AI & Data Science Portfolio</title>
        <meta name="description" content="Portfolio of Tanmay Mandal - AI & Data Science Engineer" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/workshops" element={<WorkshopsAndHackathons />} />
        <Route path="/academic-activities" element={<AcademicActivities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<TechnicalBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
