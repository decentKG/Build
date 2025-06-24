import React from 'react';
import Navbar from './components/Navbar';
import Homehero from './components/Homehero';
import Aboutteam from './components/Aboutteam';
import About from './components/About';
import Aboutmeat from './components/Aboutmeat';
import Cards from './components/Cards';
import Footer from './components/Footer';
import OurTeam from './components/OurTeam';

function Aboutus() {
  return (
    <>
  
      <Homehero />
      <Aboutteam />
      <About />
      <Cards />

    </>
  );
}

export default Aboutus;