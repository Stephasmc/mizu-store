import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/docs/Mizu-Catalogo-2025.pdf';
    link.download = 'Mizu-Catalogo-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>DESCUBRE LA MÁGIA DE <br />LO ARTESANAL</h1>
          <p>
            Jabón natural, hecho a mano <br />
            para una limpieza suave y nutritiva
          </p>
          <button className="hero-cta-button" onClick={handleDownload}>
            Descargar Catálogo
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;