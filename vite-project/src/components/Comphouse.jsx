import React from 'react';
import './Comphero.css';
import house1 from '../assets/7544d0c4bcec0b5ec91626bbc113cb2e4dbb227b.jpg';
import house2 from '../assets/a8ce4684fd4e6cd8e34fcda1162f1a5cacec9ead.jpg';
import house3 from '../assets/81de046ef8ac5171244ad15e08f000330051da34.jpg';

export default function Comphouse() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={house1} alt="Modern house exterior" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={house2} alt="Modern interior living room" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={house3} alt="House under construction" className="gallery-image" />
        </div>
      </div>
      <button className="view-all-button">
        View all <span>→</span>
      </button>
    </section>
  );
}