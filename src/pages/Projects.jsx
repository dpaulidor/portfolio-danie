import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Plateforme Webmobile",
    description: "Application webmobile,pour la gestion de rendez-vous médicaux, développée avec React et Flask.",
    image: "/project-webmobile.png",
    link: "https://github.com/dpaulidor/WebMobile-Store"
  },
  {
    title: "Mon Portfolio Web",
    description: "Site personnel réalisé avec React pour présenter mes projets, mes compétences et mon parcours.",
    image: "/project-portfolio.png",
    link: "https://github.com/dpaulidor/portfolio-danie"
  },
  {
    title: "Bibliothèque C#",
    description: "Système de gestion de livres sous Windows Forms. Il permet d'ajouter, modifier et supprimer des livres.",
    image: "/project-winforms.png",
    link: "https://github.com/dpaulidor/winforms-library-manager"
  }
];

export default function Projects() {
  return (


    
    <section className="projects-section">

      <div
  className="projects-intro-block"
  style={{
    backgroundImage: "url('/intro-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}

    >
      {/* 🌄 Bloc introduction avec fond image */}
     
        <div className="intro-overlay"></div>
        <h2 className="projects-title">Mes Projets</h2>
        <p className="projects-intro">
          Voici quelques-uns de mes projets récents, réalisés dans le cadre de ma formation ou de mes recherches personnelles. 
          Ils illustrent mes compétences en développement web, design d'interface, et programmation orientée objet.
        </p>
      </div>

      {/* 🧱 Grille des projets */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
