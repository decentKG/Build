import React from 'react';
import './About.css';
import teamMember1 from '../assets/fa39b8bfc8ef5a922ffcf71d92e0f60668105974.jpg';
import teamMember2 from '../assets/b1bd6186f06d818fdc3fc9216ac0368ffbaa81c2.jpg';
import teamMember3 from '../assets/86f66d3884616efa4a9ff3e998a212355300e2d9.jpg';

const OurTeam = () => {
  return (
    <section className="our-team-section">
      <div className="our-team-images">
        <div className="team-image-main-wrapper">
          <img src={teamMember1} alt="Team Lead" className="team-image-main" />
        </div>
        <img src={teamMember2} alt="Team Member 2" className="team-image-secondary top" />
        <img src={teamMember3} alt="Team Member 3" className="team-image-secondary bottom" />
      </div>
      <div className="flex-team">
        <h1>Meet Our Team</h1>
        <p>
          At Buildlink Zimbabwe, our dedicated team is committed to connecting you
          with the <span>best</span> professionals in the industry. With diverse
          backgrounds in construction, technology, and{' '}
          <span>customer service</span>, we work tirelessly to ensure a
          seamless experience for our users. Each member brings expertise and
          passion, making it our mission to foster <span>trust</span> and{' '}
          <span>reliability</span> in every connection. Together, we're building a
          community that prioritizes quality and service.
        </p>
        <button className="team-btn" type="button">
          <span className="team-btn-text">Learn more</span>
          <span className="team-btn-icon">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default OurTeam;