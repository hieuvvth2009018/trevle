import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <h1 className='home'>IF YOU CAN DREAM IT YOU CAN DO IT </h1>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
