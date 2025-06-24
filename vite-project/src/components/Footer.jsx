// Footer.js
import React from 'react';
import logo from '../assets/Group 1.png';

const Footer = () => {
  const footerCss = `
    /* Footer.css - Embedded for direct compilation */

    .footer-container {
      background-color: #000000;
      color: #fff;
      padding: 20px 40px 20px 40px;
      margin-top: 100px;
      width: 100%;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer-container::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 200px;
      background-color: #ffb300;
      border-bottom-right-radius: 90% 90px;
      border-bottom-left-radius: 70% 60px;
      transform: translateY(-130px);
      z-index: 0;
    }

    .footer-container::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 200px;
      background: linear-gradient(to bottom, #ffffff 0%, #ffffff calc(100% - 3px), #007bff calc(100% - 3px), #007bff 100%);
      border-bottom-right-radius: 90% 90px;
      border-bottom-left-radius: 70% 60px;
      transform: translateY(calc(-130px + 4px));
      z-index: 1;
    }

    .footer-content-wrapper {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 100px;
      width: 100%;
    }

    .footer-logo-section {
      flex-shrink: 0;
      margin-right: 40px;
      text-align: center;
      padding-bottom: 20px;
    }

    .footer-logo-text {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    .footer-logo-text .link-part {
      color: white;
    }

    .footer-logo {
      max-width: 180px;
      height: auto;
    }

    .footer-links-group {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .footer-section {
      flex: 1;
      min-width: 200px;
      padding: 10px;
      text-align: left;
    }

    .footer-section h3 {
      color: #ffffff;
      margin-bottom: 15px;
      font-size: 1.1em;
      font-weight: bold;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 8px;
    }

    .footer-section ul li a {
      color: #cccccc;
      text-decoration: none;
      font-size: 0.9em;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #ffb300;
    }

    .footer-bottom {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.9em;
      color: #fff;
    }

    .footer-email {
      font-size: 1em;
      color: #fff;
    }

    .footer-bottom .footer-email a, .footer-bottom .footer-email span.buildlink-black {
      color: #000 !important;
      font-weight: bold;
      text-decoration: none;
    }

    .social-icons {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-top: 10px;
    }

    .social-icons a {
      color: #ffffff;
      font-size: 1.2em;
      text-decoration: none;
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .social-icons a:hover {
      transform: translateY(-3px) scale(1.1);
    }

    .social-icons a svg {
      width: 1.2em;
      height: 1.2em;
      fill: currentColor;
      margin-bottom: 5px;
    }

    @media (max-width: 900px) {
      .footer-content-wrapper {
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
      }

      .footer-logo-section {
        margin-right: 0;
        margin-bottom: 30px;
      }

      .footer-links-group {
        width: 100%;
        justify-content: center;
      }

      .footer-section {
        min-width: 180px;
        text-align: center;
      }

      .footer-bottom {
        flex-direction: column;
        margin-top: 30px;
        padding-top: 15px;
      }

      .footer-email {
        margin-bottom: 10px;
      }

      .social-icons {
        margin-top: 0;
      }
    }

    @media (max-width: 550px) {
      .footer-section {
        min-width: 100%;
      }
      .footer-content-wrapper {
        padding: 40px 20px 20px 20px;
      }
      .footer-container::before, .footer-container::after {
        border-bottom-right-radius: 60% 100px;
        border-bottom-left-radius: 40% 50px;
      }
    }
  `;

  return (
    <footer className="footer-container">
      <style dangerouslySetInnerHTML={{ __html: footerCss }} />
      <div className="footer-content-wrapper">
        <div className="footer-logo-section">
          <img src={logo} alt="BuildLink Logo" className="footer-logo" />
        </div>
        <div className="footer-links-group">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Handyman</a></li>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Specialists</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Handyman</h3>
            <ul>
              <li><a href="#">Plumber</a></li>
              <li><a href="#">Electrician</a></li>
              <li><a href="#">Builder</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Companies</h3>
            <ul>
              <li><a href="#">Construction Companies</a></li>
              <li><a href="#">Electrical Specialists</a></li>
              <li><a href="#">Plumber Specialists</a></li>
              <li><a href="#">Builder Specialists</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-email">www.buildlink@gmail.com</span>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM135.45 416H69.55V192h65.9zM102.5 167.33h-.25c-20.78 0-34.42-14.15-34.42-33.43 0-19.68 13.92-33.43 35.1-33.43 21.17 0 34.42 13.65 34.42 33.43 0 19.28-13.92 33.43-34.85 33.43zm245.02 248.67h-65.9V300.12c0-24.81-9.9-49.88-44.5-49.88-34.1 0-48.5 29.4-48.5 49.88v115.88h-65.9V192h65.9v28.8c9.64-15.18 25.4-28.8 58.1-28.8 68.4 0 81.9 44.8 81.9 101.48V416z"/></svg>
            <span>linkedin</span>
          </a>
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.35 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.35 504 378.32 504 256z"/></svg>
            <span>facebook</span>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 12.6C107.5 12.6 15.6 119.5 15.6 236.1 15.6 352.7 107.5 459.6 224.1 459.6 340.7 459.6 432.6 352.7 432.6 236.1 432.6 119.5 340.7 12.6 224.1 12.6zM224.1 428.6C124.7 428.6 45.6 349.5 45.6 236.1 45.6 122.7 124.7 43.6 224.1 43.6 323.5 43.6 402.6 122.7 402.6 236.1 402.6 349.5 323.5 428.6 224.1 428.6zM345.1 114.6c-17.7 0-32.1 14.4-32.1 32.1s14.4 32.1 32.1 32.1 32.1-14.4 32.1-32.1-14.4-32.1-32.1-32.1zm-136 67c-65.7 0-119.1 53.4-119.1 119.1s53.4 119.1 119.1 119.1 119.1-53.4 119.1-119.1-53.4-119.1-119.1-119.1zm0 200c-44.2 0-80.1-35.9-80.1-80.1s35.9-80.1 80.1-80.1 80.1 35.9 80.1 80.1-35.9 80.1-80.1 80.1z"/></svg>
            <span>instagram</span>
          </a>
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H376.1L252.3 298.3 162.7 464H36.1L197.6 256.7 40.5 48h112.6L248.7 194.3 389.2 48zM364.4 421.8h39.4L112.6 92.2H73.2L364.4 421.8z"/></svg>
            <span>twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
