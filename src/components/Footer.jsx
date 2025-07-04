// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-contact">
          <p>Contactez-moi :</p>
          <a href="mailto:danikapaulidor@gmail.com" aria-label="Email">
            <FaEnvelope className="footer-icon" />
            <span className="footer-text">danikapaulidor@gmail.com</span>
          </a>
        </div>

        <div className="footer-socials">
          <a href="https://linkedin.com/in/danie" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
            <span className="footer-text">LinkedIn</span>
          </a>
          <a href="https://github.com/danie" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
            <span className="footer-text">GitHub</span>
          </a>
          <a href="https://instagram.com/danie" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
            <span className="footer-text">Instagram</span>
          </a>
        </div>

        <div className="footer-legal">
          <a href="/mentions-legales">
            <span className="footer-text">Mentions légales</span>
          </a>
        </div>
        
      </div>
      <p className="footer-copy">&copy; 2025 Danika. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
