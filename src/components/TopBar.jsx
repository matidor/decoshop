import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/TopBar.css';

const messages = [
  "¡Hacemos envios a todo el pais!",
  "¡Siempre tenemos stock!",
  "Descuentos especiales esta semana",
  "¡Viví la magia de regalar con Decobox!" 
];

const TopBar = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-bar">
      <div className="social-icons">
        <a href="https://www.facebook.com/Ecobox.ok" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/decobox.gift/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="mailto:decobox.gift@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
      <div className="top-bar-text">
        {messages[currentMessageIndex]}
      </div>
    </div>
  );
};

export default TopBar;