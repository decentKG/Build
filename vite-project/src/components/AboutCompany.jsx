import React from 'react';
import './AboutCompany.css';

const AboutCompany = () => {
  return (
    <section className="about-company-section">
      <div className="about-company-header-row">
        <h2 className="about-company-title">About AK Construction</h2>
        <div className="about-company-reviews">
          <span className="about-company-reviews-label">Customer reviews</span>
          <span className="about-company-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span style={{color: '#bbb'}}>★</span>
          </span>
        </div>
      </div>
      <p className="about-company-description">
        AK Construction is a leading contracting company with over 15 years of experience dedicated to delivering high-quality construction services. Our team of skilled professionals specializes in residential and commercial projects, ensuring each build meets the highest standards of quality and craftsmanship
      </p>
    </section>
  );
};

export default AboutCompany; 