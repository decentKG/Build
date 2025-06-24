import React from 'react';
import tafadzwaImg from '../assets/Download_premium_png_of_Happy_businessman_png_sticker__transparent_background_by_Wee_about_png__transparent_png__people__man__and_design_7691548-removebg-preview 1.png';
import danielImg from '../assets/Homem_que_Trabalha_com_Energia_Solar_Placa_Solar_PNG_Transparente-removebg-preview (1) 1.png';
import traceyImg from '../assets/A_woman_is_holding_a_notebook_and_a_pen___Premium_PSD-removebg-preview.png';
// import bernadetteImg from '../assets/Corporate_Employee_PSD__modèles_PSD_gratuits_de_haute_qualité_à_télécharger___Freepik-removebg-preview 1.png';
import kimberlyImg from '../assets/MGimages_Photography_on_Instagram-removebg-preview 1 (1).png';
import eltonaruImg from '../assets/Employeur_PSD__modèles_PSD_gratuits_de_haute_qualité_à_télécharger___Freepik-removebg-preview 1.png';

const Cards = () => {
  return (
    <div className="cards-section">
      <div className="cards-grid">
        <div className="team-card">
          <div className="team-card-img-wrap">
            <img src={tafadzwaImg} alt="Tafadzwa H." className="team-card-img" />
          </div>
          <div className="team-card-info">
            <div className="team-card-name">Name: <span>Tafadzwa H.</span></div>
            <div className="team-card-position">Position: <span>Co-Director</span></div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-card-img-wrap">
            <img src={danielImg} alt="Daniel K." className="team-card-img" />
          </div>
          <div className="team-card-info">
            <div className="team-card-name">Name: <span>Daniel K.</span></div>
            <div className="team-card-position">Position: <span>Site-manager</span></div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-card-img-wrap">
            <img src={traceyImg} alt="Tracey H." className="team-card-img" />
          </div>
          <div className="team-card-info">
            <div className="team-card-name">Name: <span>Tracey H.</span></div>
            <div className="team-card-position">Position: <span>Client-Assistant</span></div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-card-img-wrap">
            {/* <img src={bernadetteImg} alt="Bernadette T." className="team-card-img" /> */}
          </div>
          <div className="team-card-info">
            <div className="team-card-name">Name: <span>Bernadette T.</span></div>
            <div className="team-card-position">Position: <span>Manager</span></div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-card-img-wrap">
            <img src={kimberlyImg} alt="Kimberly G." className="team-card-img" />
          </div>
          <div className="team-card-info">
            <div className="team-card-name">Name: <span>Kimberly G.</span></div>
            <div className="team-card-position">Position: <span>Supervisor</span></div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-card-img-wrap">
            <img src={eltonaruImg} alt="Eltonaru J." className="team-card-img" />
          </div>
          <div className="team-card-info">
            <div className="team-card-name">Name: <span>Eltonaru J.</span></div>
            <div className="team-card-position">Position: <span>Site-Assistant</span></div>
          </div>
        </div>
      </div>
      <div className="cards-contact-btn-wrap">
        <button className="testimonial-btn-main">
          <span className="testimonial-btn-text">Get in Touch</span>
          <span className="testimonial-btn-icon">
            <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
