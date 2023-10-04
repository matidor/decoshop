import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GiftBoxesPage from "./pages/GiftBoxesPage";
import QuienesSomos from "./pages/QuienesSomos";
import ComoComprar from "./pages/ComoComprar";
import Envios from "./pages/Envios";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import "./styles/GiftBoxesSection.css";
import { useState } from "react";

const App = () => {
  // Estado para el carrito
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para cerrar el carrito
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Función para abrir el carrito
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Calcula el total de la compra
  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return total.toFixed(2);
  };

  return (
    <Router>
      <div className="app">
        <Header openCart={openCart} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/gift-boxes"
            element={<GiftBoxesPage cart={cart} setCart={setCart} />}
          />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/como-comprar" element={<ComoComprar />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>

        {isCartOpen && (
          <div className="cart">
            <h2>Carrito de Compras</h2>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                  <button onClick={() => removeFromCart(product.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={closeCart} className="close-button">
              X
            </button>
            <p>Total: ${calculateTotal()}</p>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
