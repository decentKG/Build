import React from 'react';
import card4 from '../assets/Card (3).png';
import card5 from '../assets/Card (4).png';
import card6 from '../assets/Card (5).png';

export default function Features2() {
  return (
    <section className='feature'>
      <div className="all-cards">
        <div className="col-md-2 fat1">
          <img src={card4} alt="Feature Card 4" />
        </div>
        <div className="col-md-2 fat2">
          <img src={card5} alt="Feature Card 5" />
        </div>
        <div className='col-md-2 fat3'>
          <img src={card6} alt="Feature Card 6" />   
        </div>
      </div>
    </section>
  );
}