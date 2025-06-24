import React from 'react';
import groupImage from '../assets/Group 6.png';

export default function Team() {
  return (
    <section className="team-section">
      <div className="main-team">
        <img src={groupImage} alt="Our Team" />
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
}