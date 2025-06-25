import React from 'react';
import './WhyChooseUs.css';

// Using a placeholder image that matches the theme
const teamImage = 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-image">
        <img src={teamImage} alt="Construction Team" />
      </div>
      <div className="why-choose-us-content">
        <h2 className="why-choose-us-title">Why Choose AK Construction?</h2>
        <div className="why-choose-us-list">
          <p>
            <span className="why-highlight">Expert Team:</span> Our skilled contractors bring expertise and dedication to every project.
          </p>
          <p>
            <span className="why-highlight">Commitment to Quality:</span> We use only the best materials and practices to ensure lasting results.
          </p>
          <p>
            <span className="why-highlight">Customer Satisfaction:</span> Your vision is our priority; we work closely with you to bring it to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 