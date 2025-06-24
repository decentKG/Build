import React from 'react';
import './Hero2.css';
import heroBg from '../assets/hero12.png'; // Adjust the path as necessary

export default function Hero2 () {
  return (
    <section className="homehero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="homehero-top-label">
        Handyman <span className="homehero-yellow">Services</span>
      </div>
      <div className="homehero-overlay"></div>
      <div className="homehero-content">
        <h1 className="homehero-quote">
          “Your <span className="homehero-yellow">Solution</span> For Every<span className="homehero-yellow">Fix!</span> ”
        </h1>
        <p className="homehero-desc">
          At BuildLink, our handyman services are designed to tackle all your repair and maintenance needs. 
          From quick fixes to complex projects, our experienced team is ready to help you with efficiency and expertise. 
          Trust us to keep your space in top shape—contact us today!
        </p>
      </div>
      <button className="homehero-down-btn">
        <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" stroke="#ffb300" strokeWidth="2" fill="#fff" />
          <path d="M8 10l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}
