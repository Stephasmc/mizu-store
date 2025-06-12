import React from 'react';
import './ContactPage.css';

// ICONS
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    //Send form logic ....

    alert('Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    
    // clean the form
    event.target.reset(); 
  };
  
  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h2>Escríbenos</h2>
        <p>
          ¡Nos encantaría saber de ti! 
          Ya sea que tengas curiosidad por nuestros jabones, 
          necesites ayuda para elegir el ritual adecuado o simplemente 
          quieras saludarnos o dejarnos tu sugerencia.
          <br />
          ¡Estamos aquí para ti! ✨🌿
        </p>
      </div>

      <div className="contact-content-wrapper">
        {/* --- Contact Form --- */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>
        </div>

        {/* --- Contact Info --- */}
        <div className="contact-info-container">
          <div className="info-item">
            <FiMail className="info-icon" />
            <div className="info-text">
              <h3>Email</h3>
              <p> mizu@mizusoap.com</p>
            </div>
          </div>
          <div className="info-item">
            <FiPhone className="info-icon" />
            <div className="info-text">
              <h3>WhatsApp</h3>
              <p> +57 (305) 724-1776</p>
            </div>
          </div>
          <div className="info-item">
            <FiMapPin className="info-icon" />
            <div className="info-text">
              <h3>Visitanos</h3>
              <p>
                 Cra. 98 #16-200 - Local 97<br />
                 Centro Comercial Jardín Plaza<br />
                 Cali, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;