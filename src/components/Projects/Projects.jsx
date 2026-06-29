import "./Projects.css";
import { motion } from "framer-motion";

import portfolioImg from "../../assets/projects/portfolio.png";
import snapcartImg from "../../assets/projects/snapcart.png";
import smartAuctionImg from "../../assets/projects/smart-auction.png";

const projects = [
  {
    title: "Personal Portfolio",
    image: portfolioImg,
    description:
      "A modern portfolio website built using React with smooth animations and responsive design.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/Praveen08-pravi",
    live: "#",
  },

  {
    title: "SnapCart - E-Commerce Website",
    image: snapcartImg,
    description:
      "A full-stack e-commerce web application built using the MERN Stack. It allows users to browse products, manage a shopping cart, authenticate securely, and place orders.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Praveen08-pravi/snapcart",
    live: "https://snapcart-store.netlify.app/",
  },
  {
  title: "Smart-Auction - AI Powered Online Auction Platform",
  image: smartAuctionImg,
  description:
    "An AI-powered online auction platform developed using the MERN Stack to modernize traditional bidding with secure authentication, real-time bidding using Socket.IO, AI-powered analytics, and role-based dashboards for Admins, Auctioneers, and Bidders.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  
}
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2 className="section-title">
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;