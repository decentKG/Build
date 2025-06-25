import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import OurTeam from './components/OurTeam'
import Features from './components/Features'
import PostingJobs from './components/PostingJobs'
import User from './components/User'
import HeroC from './components/HeroC'
import AboutCompany from './components/AboutCompany'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Features/>
      <PostingJobs/>
      <OurTeam/>
    </>
  )
}

export default Home