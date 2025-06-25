
import React from 'react';
import './Gallery.css';

// Using placeholder images that match the theme
const galleryImg1 = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const galleryImg2 = 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const galleryImg3 = 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-images">
        <div className="gallery-image-wrapper">
          <img src={galleryImg1} alt="Finished modern house" />
        </div>
        <div className="gallery-image-wrapper">
          <img src={galleryImg2} alt="Modern living room interior" />
        </div>
        <div className="gallery-image-wrapper">
          <img src={galleryImg3} alt="House under construction" />
        </div>
      </div>
      <div className="gallery-button-container">
        <button className="testimonial-btn-main">
          <span className="testimonial-btn-text">View more</span>
          <span className="testimonial-btn-icon">
            <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Gallery;