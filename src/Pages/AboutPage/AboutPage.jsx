import React from 'react';
import './AboutPage.css';

//IMPORT IMGs
import ilustracion from '../../assets/img/ilustracion-about.png';
import golden_paint from '../../assets/img/golden_paint.png'; 
import left_flowers from '../../assets/img/left_flowers.png';
import right_flowers from '../../assets/img/right_flowers.png';

const About = () => {
  return (
    <div className="about-page-container">
      <img src={left_flowers} alt="" className="about-deco-image deco-left" />
      <img src={right_flowers} alt="" className="about-deco-image deco-right" />

      <div className="about-header">
        <div className="title-background">
          <img src={golden_paint} alt="Pincelada dorada" />
          <span>Bienvenid@ a</span>
        </div>
        <h1>Mizu</h1>
      </div>

      <div className="about-main-content">
        <div className="about-text-content">
          <div className="about-intro">
            <h3>🌿 Tu rincón de bienestar y cuidado consciente! 🌿</h3>
            <p>
              En MIZU no solo queremos que te lleves un producto artesanal, queremos ofrecerte una experiencia de amor propio y conexión. Cada fórmula está pensada con intención, creada con ingredientes de origen natural, libres de químicos agresivos y seleccionados cuidadosamente para cuidar de ti y de nuestro precioso mundo.
            </p>
          </div>
          <div className="about-illustration-container">
            <img src={ilustracion} alt="Ilustración de la fundadora de Mizu" className="about-illustration" />
          </div> 
          <p>
            Como <strong>ingeniera</strong>, siempre he buscado comprender cómo funcionan las cosas. Así nació MIZU, de ese deseo profundo de equilibrar la lógica con la creatividad. Es un reflejo de mi pasión por transformar lo cotidiano en algo <strong>especial</strong> que puedas sentir, despertando tus sentidos con texturas suaves, aromas envolventes y colores que cuenten historias.
          </p>
          <p>
            Mi sueño es que, cada vez que uses uno de nuestros productos, hagas una pausa, <strong>desaceleres y reconectes</strong> contigo mism@, con la naturaleza, descubriendo la belleza y la magia que se encuentra en lo simple.
          </p>
          <p>
            Te invitamos a explorar nuestra colección, a descubrir texturas y aromas que te transporten, y a encontrar ese pequeño <strong>lujo diario</strong> que te mereces.
          </p>
          <p className="about-highlight">
            ¡Espero que encuentres algo que te haga sentir maravillosamente bien!
          </p>
          <p className="about-signature">
            MIZU – Magia para tu piel en cada burbuja 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;