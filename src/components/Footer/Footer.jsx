import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logos/primary_logo_light.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
  <div className="footer-inner">
    {/* LOGO CONTENT */}
    <div className="footer-logo">
      <img src={logo} alt="Mizu Logo" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="footer-right">
      <div className='footer-content'>
        <div className="nav-column">
          <h3>NOSOTROS</h3>
          <Link to="/about">Nuestra Historia</Link>
        </div>
        <div className="nav-column">
          <h3>TIENDA</h3>
          <Link to="/products">Jabones Faciales</Link>
          <br />
          <Link to="/products">Jabones Corporales</Link>
          <br />
          <Link to="/products">Exfoliantes</Link>
        </div>
        <div className="nav-column">
          <h3>CONTÁCTANOS</h3>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/mizuartesanal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/share/15qSoSNknf/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://wa.link/gndiqm" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>

      <p className="copyright-text">© 2025 Mizu Cosmética Natural.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
