// src/pages/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-container">
      {/* Image à gauche */}
      <div className="about-image">
        <img src="/moi.jpg" alt="Danika Paulidor" />
      </div>

      {/* Texte à droite */}
      <div className="about-text">
        <h2>À propos de moi</h2>

        <p>
          Je m’appelle <strong>Danika Paulidor</strong>, étudiante en <strong>4e année de licence en sciences informatiques</strong> à l’Université Espoir de Calvary Chapel.
          Je suis passionnée par le développement, la résolution de problèmes, et la création de projets utiles.
        </p>
        <p>
          Mon objectif : devenir développeuse fullstack et utiliser mes compétences pour améliorer l’accès à la technologie et aux soins en Haïti.
        </p>
        <p>
          J’aime apprendre, chercher des solutions et transformer mes idées en applications concrètes.
        </p>
        {/* Espace entre le À propos et la section CV */}
        <div className="about-cv-spacer"></div>

        {/* Introduction au CV intégré */}
       <div className="cv-section-intro">
       <h3 className="cv-section-title">📄 Voici mon CV intégré</h3>
       <p className="cv-section-subtitle">
       Cette section présente un aperçu de mon parcours professionnel, technique et personnel.
       </p>
       </div>

        {/* --- Expériences & Projets --- */}
        <h3>Expérience & Projets</h3>
        <ul>
          <li>
            <strong>Site web de portfolio personnel</strong> (React, CSS) : mise en valeur de mon profil professionnel, projets et compétences.
          </li>
          <li>
            <strong>Application d’analyse de sentiments</strong> (Python, NLP, Hugging Face) : évaluation de textes selon leur tonalité, projet individuel universitaire.
          </li>
          <li>
            <strong>Plateforme de gestion de rendez-vous médicaux</strong> (HTML, Flask, MySQL) : solution pensée pour améliorer l'accès aux soins en Haïti.
          </li>
          <li>
            <strong>Activité indépendante</strong> en tant que styliste et nailtech : gestion clientèle, communication visuelle avec Canva & Figma, organisation autonome.
          </li>
        </ul>

        {/* --- Compétences techniques --- */}
        <h3>Compétences techniques</h3>
        <div className="skills-grid">
          <div>
            <h4>Langages</h4>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <div>
            <h4>Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Flask</li>
              <li>Node.js</li>
              <li>.NET</li>
            </ul>
          </div>
          <div>
            <h4>Outils</h4>
            <ul>
              <li>Git / GitHub</li>
              <li>MySQL</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div>
            <h4>Design</h4>
            <ul>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </div>
        </div>

        {/* --- Langues --- */}
        <h3>Langues</h3>
        <ul>
          <li>Créole haïtien : courant</li>
          <li>Français : courant</li>
          <li>Anglais : intermédiaire</li>
        </ul>

        {/* --- Centres d’intérêt --- */}
        <h3>Centres d’intérêt</h3>
        <p>Musique, séries, lecture, résolution de problèmes, recherche, technologies numériques.</p>

        {/* --- Boutons CV --- */}
        <div className="cv-buttons">
          <a
            href="/Profil_Danika_Paulidor_4e_annee.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Lire mon CV en ligne
          </a>

          <a
            href="/Profil_Danika_Paulidor_4e_annee.pdf"
            download
            className="btn btn-primary"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
