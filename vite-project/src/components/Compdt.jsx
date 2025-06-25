import React, { useState } from 'react';
// import './Comphouse.css';

export default function Compdt() {
  const [employmentType, setEmploymentType] = useState('Part-time');
  const [experienceType, setExperienceType] = useState('6-7years');

  return (
    <div className="job-post-container">
      <h2 className="job-post-title">
        "You Have a Job for Us? Post it <span className="job-post-highlight">Here!</span>"
      </h2>
      <div className="job-post-info">
        <strong>Add job information</strong>
        <div className="job-post-subinfo">"Let's fill out the job information".</div>
      </div>
      <form className="job-post-form">
        <div className="job-post-fields">
          <input type="text" className="job-input" placeholder="Job title" />
          <input type="text" className="job-input" placeholder="Select job category" />
          <input type="text" className="job-input" placeholder="Select location" />
        </div>
        <div className="job-post-options">
          <div className="job-post-group">
            <div className="job-post-label">Employment type</div>
            <div className="job-post-buttons">
              <button type="button" className={`job-btn${employmentType === 'Contract' ? ' selected' : ''}`} onClick={() => setEmploymentType('Contract')}>Contract</button>
              <button type="button" className={`job-btn${employmentType === 'Part-time' ? ' selected' : ''}`} onClick={() => setEmploymentType('Part-time')}>Part-time</button>
              <button type="button" className={`job-btn${employmentType === 'Full-time' ? ' selected' : ''}`} onClick={() => setEmploymentType('Full-time')}>Full-time</button>
            </div>
          </div>
          <div className="job-post-group">
            <div className="job-post-label">Experience type</div>
            <div className="job-post-buttons">
              <button type="button" className={`job-btn${experienceType === '0-3years' ? ' selected' : ''}`} onClick={() => setExperienceType('0-3years')}>0-3years</button>
              <button type="button" className={`job-btn${experienceType === '3-5years' ? ' selected' : ''}`} onClick={() => setExperienceType('3-5years')}>3-5years</button>
              <button type="button" className={`job-btn${experienceType === '6-7years' ? ' selected' : ''}`} onClick={() => setExperienceType('6-7years')}>6-7years</button>
              <button type="button" className={`job-btn${experienceType === '7-10years' ? ' selected' : ''}`} onClick={() => setExperienceType('7-10years')}>7-10years</button>
              <button type="button" className={`job-btn${experienceType === '10+years' ? ' selected' : ''}`} onClick={() => setExperienceType('10+years')}>10+years</button>
            </div>
          </div>
        </div>
        <button type="submit" className="job-post-submit">SEND JOB</button>
      </form>
    </div>
  );
}