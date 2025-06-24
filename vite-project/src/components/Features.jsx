import React from 'react';
import card1 from '../assets/Card.png';
import card2 from '../assets/Card (1).png';
import card3 from '../assets/Card (2).png';

export default function Features() {
  return (
    <section className='feature'>
      <div className="all-cards">
        <div className="col-md-2 fat1">
          <img src={card1} alt="Feature Card 1" />
        </div>
        <div className="col-md-2 fat2">
          <img src={card2} alt="Feature Card 2" />
        </div>
        <div className='col-md-2 fat3'>
          <img src={card3} alt="Feature Card 3" />   
        </div>
      </div>
    </section>
  );
}