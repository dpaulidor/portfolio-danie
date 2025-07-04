// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css'; // à créer si non existant

function Projects() {
  return (
    <section className="projects-section">
      <h1>Mes Projets</h1>
      <p>
        Voici quelques projets que j'ai réalisés au cours de mon parcours : applications web, 
        interfaces utilisateurs, outils de gestion, et plus encore.
      </p>
      {/* Tu peux ajouter une liste de projets ici */}
    </section>
  );
}

export default Projects;
