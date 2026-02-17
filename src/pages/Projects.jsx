import { span } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "A responsive weather app using Open-Meteo API with dynamic unit toggle and forecast rendering.",
    stack: ["React", "API", "CSS Grid"],
    link: "https://weather-app-five-rho-73.vercel.app/",
  },
  {
    id: 2,
    title: "Comment Section App",
    description:
      "Interactive comment system with replies, editing, deletion, and localStorage persistence.",
    stack: ["JavaScript", "LocalStorage", "Responsive UI"],
    link: "https://comment-section-app-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "Digital Bank Landing Page",
    description:
      "Modern responsive landing page with animated hero and mobile navigation.",
    stack: ["HTML", "CSS", "Flexbox"],
    link: "https://bank-landing-page-wheat.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <h1 className="projects-title">Selected Work</h1>

        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <div className="project-card" key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View project →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
