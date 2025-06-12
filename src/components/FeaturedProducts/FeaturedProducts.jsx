import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { featuredProductsData } from '../../data/featuredProductsData';
import './FeaturedProducts.css';

// Import components and styles Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const FeaturedProducts = () => {

  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
     <section className="featured-products-container">
      <div className="featured-products-header">
        <h2 className="title-section">Productos Destacados</h2>

        <div className="swiper-nav-buttons">
          <button className="swiper-button-prev-custom">
            <FiArrowLeft />
          </button>
          <button className="swiper-button-next-custom">
            <FiArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30} // space between cards
        loop={true} // infity carousel
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        // responsive configuration
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="products-swiper"
      >
        {featuredProductsData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <div className="product-image-link" onClick={() => openModal(product.image)}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <FiSearch className="overlay-icon" />
                </div>
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">
                  <Link to={product.url}>{product.name}</Link>
                </h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Ampliada" />
            <button className="modal-close" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts;