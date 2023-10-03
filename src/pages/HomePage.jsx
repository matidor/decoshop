// HomePage.jsx
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footers from '../components/Footers';
import WhatsAppButton from '../components/WhattsApp';
import '../styles/WhatsApp.css'

const HomePage = () => {
  return (
    <div className="home-page">

      <Header />

      <MainSection />
      <Footers />
      <WhatsAppButton />

    </div>
  );
};

export default HomePage;