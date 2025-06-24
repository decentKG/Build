import React from 'react';
import vectorIcon from '../assets/Vector.png';
import screenshotImg from '../assets/Screenshot 2025-06-19 205358.png';

export default function About() {
  return (
    <section className='about'>
      <div className="col-md-1 about-sect1">
        <div className='about-15'>
          <h1>15+</h1>
          <p>Years of <br /> Experience</p>
        </div>
      </div>
      <div className="col-md-6 about-sect2">
        <p><img src={vectorIcon} alt="Vector Icon" />Why choose us?</p>
        <h1>"Your <span>Trusted</span> Source for <br /> Skilled <span>Professionals!</span>"</h1>
        <p className="para">We aim to simplify the process of finding trustworthy professionals by providing a user-friendly marketplace that prioritizes quality and credibility. Our goal is to foster a community where skilled tradespeople can showcase their expertise and connect with clients who value their services.</p>
        <div className='about-flex'>
          <div className="ul">
            <p><img src={vectorIcon} alt="Vector Icon" />Verified Professionals</p>
            <p><img src={vectorIcon} alt="Vector Icon" />User-Friendly Experience</p>
            <p><img src={vectorIcon} alt="Vector Icon" />Transparent Reviews</p>
            <p><img src={vectorIcon} alt="Vector Icon" />Geolocation Services</p>
          </div>
          <div className="flex-image">
            <img src={screenshotImg} alt="Screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
}