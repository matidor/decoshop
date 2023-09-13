import { useState } from 'react';
import logo from '../assets/logoo.png';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css';

const NavBar = ({onCartIconClick}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCartIconClick = () => {
    if (onCartIconClick) {
      onCartIconClick();
    }
  };

  return (
    <nav className="navbar">
      <div className={`mobile-menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
        {menuVisible ? <FaTimes /> : <FaBars />}
      </div>
      <Link to="/"> 
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={`nav-links ${menuVisible ? 'active' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        {menuVisible && (
          <li className="menu-intro">
            ¡Viví la magia de regalar con Decobox!
          </li>
        )}
        <li className="nav-item"><Link to="/">Inicio</Link></li> 
        <li className="nav-item"><Link to="/gift-boxes">Gift boxes</Link></li>
        <li className="nav-item"><Link to="/quienes-somos">Quienes somos</Link></li> 
        <li className="nav-item"><Link to="/como-comprar">Como comprar</Link></li>
        <li className="nav-item"><Link to="/envios">Envios</Link></li>
        <li className="nav-item"><Link to="/">Contacto</Link></li>
      </ul>

      <div className="icons-nav">
        <Link to="/"><FaSearch /></Link> 
        <a href="/" onClick={handleCartIconClick}><FaShoppingCart /></a> 
      </div>
    </nav>
  );
};

export default NavBar;
