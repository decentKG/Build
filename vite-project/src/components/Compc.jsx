import React from 'react';
import './Comphero.css';
import heroImg from '../assets/kupa2.jpg';

export default function Compc () {
  return (
    <div className="compc-row">
      <img src={heroImg} alt="Smiling construction workers" className="compc-img" />
      <div className="compc-text-block">
        <h2 className="compc-title">Why Choose AK Construction?</h2>
        <div className="compc-line">
          <span className="compc-label team">Expert Team:</span> Our skilled contractors bring expertise and dedication to every project.
        </div>
        <div className="compc-line">
          <span className="compc-label quality">Commitment to Quality:</span> We use only the best materials and practices to ensure lasting results.
        </div>
        <div className="compc-line">
          <span className="compc-label satisfaction">Customer Satisfaction:</span> Your vision is our priority; we work closely with you to bring it to life.
        </div>
      </div>
    </div>
  );
}