import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import PostingJobs from './components/PostingJobs';
import Footer from './components/Footer';
import User from './components/User';
import OurTeam from './components/OurTeam';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Aboutus from './Aboutus';
import Hand from './Hand';
import NavBar2 from './components/NavBar2';
import Home from './Home';
import Login from './Login'
import Companies from './Companies';


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname ==='/';
  return (
    <>

      {!isLoginPage && <NavBar2/>}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Handyman' element={<Hand/>}/>
        <Route path='Companies' element={<Companies/>}/>
        <Route path='Aboutus' element={<Aboutus/>}/>

      </Routes>
      {!isLoginPage && <Footer/>}
    </>
  );
}

export default App;
