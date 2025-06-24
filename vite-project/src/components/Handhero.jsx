import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero.jpg';

const Handhero = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Consider "at bottom" when within 50px of the bottom
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="homehero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="homehero-top-label">
        Handyman <span className="homehero-yellow">Services</span>
      </div>
      <div className="homehero-overlay"></div>
      <div className="homehero-content">
        <h1 className="homehero-quote">
          “Your <span className="homehero-yellow">Solution</span> For Every<span className="homehero-yellow"> Fix!</span> ”
        </h1>
        <p className="homehero-desc">
        "At BuildLink, our handyman services are designed to tackle all your repair and maintenance needs. From quick fixes to complex projects, our experienced team is ready to help you with efficiency and expertise. Trust us to keep your space in top shape—contact us today!"
        </p>
      </div>
      <button 
        className="homehero-down-btn"
        onClick={handleClick}
        style={{
          transform: isAtBottom ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.3s ease'
        }}
      >
        <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" stroke="#ffb300" strokeWidth="2" fill="#fff" />
          <path d="M8 10l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default Handhero;