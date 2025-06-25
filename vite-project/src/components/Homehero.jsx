import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero12.png';

const Homehero = () => {
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
        Get <span className="homehero-yellow">to know</span> Us
      </div>
      <div className="homehero-overlay"></div>
      <div className="homehero-content">
        <h1 className="homehero-quote">
          “Your <span className="homehero-yellow">Trusted</span> Partner in <span className="homehero-yellow">Quality</span> Construction”
        </h1>
        <p className="homehero-desc">
          "At BuildLink, we are passionate about transforming spaces and delivering quality craftsmanship. With a commitment to excellence and customer satisfaction, our journey began with a vision to provide reliable handyman services. Let us help you build your dreams!"
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

export default Homehero;