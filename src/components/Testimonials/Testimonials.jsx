import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';
import { testimonialsData } from '../../data/TestimonialsData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Experiencias reales de personas que han encontrado su momento MIZU.</p>
      </div>
      
      <div className="testimonials-carousel-container">
        <Swiper
          // Infinity carousel config
          modules={[Autoplay]}
          spaceBetween={30}      
          slidesPerView={'auto'} // show the card with auto space
          loop={true}            // infinity loop for the carousel
          allowTouchMove={false} // Disable de manual movement
          autoplay={{
            delay: 0,            // without delay between transitions
            disableOnInteraction: false, // Autoplay do not stop
          }}
          speed={5000} // transition speed (higher = more slow )
          className="my-infinite-swiper"
        >
          {/* 
          DUlplicate the info to make a visual loop eventhough they repet
          */}
          {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-content">
                  <p className="testimonial-quote">“{testimonial.quote}”</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;