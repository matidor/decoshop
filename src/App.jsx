
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GiftBoxesPage from './pages/GiftBoxesPage';
import QuienesSomos from './pages/QuienesSomos';
import ComoComprar from './pages/ComoComprar';
import Envios from './pages/Envios';
import ContactPage from './pages/ContactPage';




const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gift-boxes" element={<GiftBoxesPage />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/como-comprar" element={<ComoComprar />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
