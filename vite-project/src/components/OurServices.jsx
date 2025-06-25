import React from 'react';
import './OurServices.css';

// Using placeholder images that match the theme of the screenshot
const constructionSiteImg = 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const planningImg = 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const OurServices = () => {
  return (
    <section className="our-services-section">
      <div className="our-services-content">
        <h2 className="our-services-title">Our Services</h2>
        <div className="our-services-list">
          <p>
            <span className="service-highlight">General Contracting:</span> Comprehensive management of your construction projects from start to finish.
          </p>
          <p>
            <span className="service-highlight">Renovations and Remodeling:</span> Transforming spaces to meet your vision and needs.
          </p>
          <p>
            <span className="service-highlight">New Construction:</span> Building homes and commercial spaces tailored to your specifications.
          </p>
        </div>
      </div>
      <div className="our-services-images">
        <img src={constructionSiteImg} alt="Construction Site" className="service-img-top" />
        <img src={planningImg} alt="Construction Planning" className="service-img-bottom" />
      </div>
    </section>
  );
};

export default OurServices; 