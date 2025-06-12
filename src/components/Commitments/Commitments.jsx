import React from 'react';
import { Link } from 'react-router-dom';
import './Commitments.css';

import { pilaresData } from '../../data/CommitmentsData';

const Commitments = () => {
  return (
    <section className="esencia-container">
      <h2 className="section-title">Nuestra Esencia</h2>
      <div className="pilares-wrapper">
        {pilaresData.map(({ id, image, title, description }) => (
          <div className="pilar-card" key={id}>
            <div className="pilar-icon">
              <img src={image} alt={title} />
            </div>
            <h3 className="pilar-title">{title}</h3>
            <p className="pilar-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Commitments;