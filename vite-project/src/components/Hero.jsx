import React from 'react';


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Get <span className="highlight-yellow">Quality</span> Service from <span className="highlight-yellow">Verified</span> Experts!</h1>
        <p className="hero-description">"Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting—contact us today for a free consultation!"</p>
        <button className="testimonial-btn-main">
          <span className="testimonial-btn-text">Connect</span>
          <span className="testimonial-btn-icon">
            <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}