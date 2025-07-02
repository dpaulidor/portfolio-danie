// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulation d'envoi - à remplacer avec EmailJS ou autre plus tard
    setTimeout(() => {
      alert('Message envoyé avec succès !');
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactez-moi</h2>
      <p className="contact-subtitle">
        Vous pouvez m’écrire un message ou me joindre directement à : <br />
        <strong>danikapaulidor@gmail.com</strong>
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre adresse e-mail" required />
        <input type="text" name="subject" placeholder="Sujet (optionnel)" />
        <textarea name="message" placeholder="Votre message..." rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>

      {submitted && (
        <p className="contact-confirmation">✅ Merci ! Votre message a bien été envoyé.</p>
      )}
    </div>
  );
}

export default Contact;
