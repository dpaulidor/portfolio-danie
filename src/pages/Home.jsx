// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="small-text">Welcome to my portfolio,</p>
          <h1>
            <span className="highlight">Je suis Danika Paulidor</span>
          </h1>
          <h2 className="subtitle">Développeuse Fullstack Junior</h2>
          <p className="description">
            Étudiante en 2e année en sciences informatiques à l’Université Espoir de Calvary Chapel.<br />
            Je conçois des applications utiles, accessibles et modernes pour résoudre des problèmes réels.
          </p>
        </div>

        <div className="hero-image">
          <img src="/images.jpg" alt="Danika Paulidor" />
        </div>
      </div>

      <div className="cta">
        <Link to="/about" className="btn btn-primary">En savoir plus</Link>
        <Link to="/contact" className="btn btn-primary">Me contacter</Link>
        <Link to="/projects" className="btn btn-secondary">Voir mon travail</Link>
      </div>

      {/*  Section Galerie de Profils */}
      <div className="profile-gallery">
        <h2>Découvrez nos profils</h2>
        <div className="profile-cards">
          <div className="profile-card">
            <img src="/profile1.jpg" alt="Profil 1" />
            <h3>Danie</h3>
            <p>Développeuse Frontend</p>
          </div>
          <div className="profile-card">
            <img src="/profile2.jpg" alt="Profil 2" />
            <h3>Jean</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="profile-card">
            <img src="/profile3.jpg" alt="Profil 3" />
            <h3>Clara</h3>
            <p>Intégratrice Web</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
