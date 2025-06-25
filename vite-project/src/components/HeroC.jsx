import React from 'react';

// Import your images. Ensure these paths are correct relative to HeroC.jsx
import profileLadyShopping from '../assets/ab97640a6d12c6fe5e92e7602d59265e0d74692d.jpg'; // The lady with shopping bags (leftmost in the visual overlap)
import profileLadySmiling from '../assets/a027133503b2a1993d1b9f76e8ca896763458a27.jpg'; // The lady with the bob cut (middle in the visual overlap)
import profileManThumbsUp from '../assets/ff33db379231275220af3d3e48553cb970236bfb.jpg';

// Import the CSS file for styling
import './HeroC.css';

const HeroC = () => {
  return (
    <section className='heroC'>
      <div className='heroC-bottomright'>
        <div className='hero-profiles-wrapper' style={{marginTop: '32px'}}>
          <img src={profileManThumbsUp} alt='Customer 3 (Man)' className='profile-img' />
          <img src={profileLadySmiling} alt='Customer 2 (Lady Smiling)' className='profile-img' />
          <img src={profileLadyShopping} alt='Customer 1 (Lady Shopping)' className='profile-img' />
        </div>
      </div>
    </section>
  );
}

export default HeroC;