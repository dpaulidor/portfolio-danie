// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="hero">

      
      {/* ✅ Section principale */}
      <div className="hero-content">
        <div className="hero-text">
          <p className="small-text">Welcome to my portfolio,</p>
          <h1>
            <span className="highlight">Je suis Danika Paulidor</span>
          </h1>
          <h2 className="subtitle">Développeuse Fullstack Junior</h2>
          <p className="description">
            Je suis une étudiante en 2e année en sciences informatiques à l’Université Espoir de Calvary Chapel.<br />
            Je conçois des applications utiles, accessibles et modernes pour résoudre des problèmes réels.
          </p>
        </div>

        <div className="hero-image">
          <img src="/images.jpg" alt="Danika Paulidor" />
        </div>
      </div>

      {/* ✅ Boutons d’appel à l’action */}
      <div className="cta">
        <Link to="/about" className="btn btn-primary">En savoir plus</Link>
        <Link to="/contact" className="btn btn-primary">Me contacter</Link>
        <Link to="/projects" className="btn btn-secondary">Voir mon travail</Link>
      </div>

      {/* ✅ Section galerie de profils */}
      <div className="profile-gallery">
        <h2 className="section-title">Découvrez mes profils</h2>
        <div className="profile-cards">
          <div className="profile-card">
            <img
              src={`${process.env.PUBLIC_URL}/profile1.jpg`}
              alt="Profil 1"
              className="profile-image"
            />
            <h3>Danika</h3>
            <p>Développeuse Frontend</p>
          </div>

          <div className="profile-card">
            <img
              src={`${process.env.PUBLIC_URL}/profile2.jpg`}
              alt="Profil 2"
              className="profile-image"
            />
            <h3>Danika</h3>
            <p>UI/UX Designer</p>
          </div>

          <div className="profile-card">
            <img
              src={`${process.env.PUBLIC_URL}/profile3.jpg`}
              alt="Profil 3"
              className="profile-image"
            />
            <h3>Danika</h3>
            <p>Intégratrice Web</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
