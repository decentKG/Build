import React from 'react';

export default function Aboutteam() {
  return (
    <section className="aboutteam-section">
      <div className="aboutteam-cards">
        {/* Verified Card */}
        <div className="aboutteam-card">
          <span className="aboutteam-icon">
            {/* Shield SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6L8 12V22C8 33.0457 24 42 24 42C24 42 40 33.0457 40 22V12L24 6Z" stroke="#888" strokeWidth="2.5" fill="none"/>
              <path d="M18 24L23 29L31 19" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <h3>Verified</h3>
          <p>"At BuildLink, our verified professionals guarantee quality and reliability for every project."</p>
        </div>
        {/* Skilled Card */}
        <div className="aboutteam-card">
          <span className="aboutteam-icon">
            {/* Gear SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="8" stroke="#888" strokeWidth="2.5" fill="none"/>
              <path d="M24 6V12" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M24 36V42" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M6 24H12" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M36 24H42" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M34.1421 13.8579L29.798 18.202" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M18.202 29.798L13.8579 34.1421" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M13.8579 13.8579L18.202 18.202" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M29.798 29.798L34.1421 34.1421" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </span>
          <h3>Skilled</h3>
          <p>"BuildLink is proud to offer skilled professionals dedicated to delivering top-notch workmanship!"</p>
        </div>
        {/* Trusted Card */}
        <div className="aboutteam-card">
          <span className="aboutteam-icon">
            {/* Team/Handshake SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="18" r="4" stroke="#888" strokeWidth="2.5" fill="none"/>
              <circle cx="32" cy="18" r="4" stroke="#888" strokeWidth="2.5" fill="none"/>
              <path d="M12 32C12 27.5817 15.5817 24 20 24H28C32.4183 24 36 27.5817 36 32" stroke="#888" strokeWidth="2.5" fill="none"/>
              <path d="M20 28V32" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M28 28V32" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </span>
          <h3>Trusted</h3>
          <p>"At BuildLink, we prioritize trust and reliability. Count on our team for exceptional results and peace of mind!"</p>
        </div>
      </div>
    </section>
  );
}