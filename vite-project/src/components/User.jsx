import React from 'react';
import groupImg from '../assets/Group 7.png';

export default function User() {
  return (
    <section className="user-main-section">
      <div className="user-left-block">
        <h1 className="user-title">You Have A Job<br/>For Us?</h1>
        <p className="user-desc">
          If you have a job opportunity in the construction industry, we want to hear from you! Use the form below to share the details of your project, and let us help you connect with the right professionals. Your submission can make a difference in finding the perfect candidates to get the job done!
        </p>
        <button className="user-btn">
          <span className="user-btn-text">Post Job</span>
          <span className="user-btn-icon">
            <svg width="18" height="18" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
      <div className="user-images-block">
        <img src={groupImg} alt="Plumbing" className="user-img user-img-bottom" />
      </div>
    </section>
  );
}