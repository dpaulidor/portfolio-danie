import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Liens internes */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/competences">Compétences</Link>
            </li>
          </ul>
        </div>

        {/* Contact par mail */}
        <div className="footer-section">
          <h4>Contact</h4>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=danikapaulidor@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            danikapaulidor@gmail.com
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h4>Réseaux sociaux</h4>
          <ul className="social-list">
            <li>
              <a
                href="https://github.com/dpaulidor/portfolio-danie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/notifications/?filter=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href=" https://www.instagram.com/danikapaulidorgmail.com3?igsh=YzljYTk1ODg3Zg== "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Danie. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
