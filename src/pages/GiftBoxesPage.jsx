import { useState } from 'react';
import Header from '../components/Header';
import products from '../Data/productData';
import '../styles/GiftBoxesSection.css';
import Footers from '../components/Footers';
import WhatsAppButton from '../components/WhattsApp';


const GiftBoxesPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Estado para el carrito
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (option) => {
    let filteredProductsArray = [];

    switch (option) {
      case 'newest':
        filteredProductsArray = [...products].sort((a, b) => a.id - b.id);
        break;
      case 'highestPrice':
        filteredProductsArray = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'lowestPrice':
        filteredProductsArray = [...products].sort((a, b) => a.price - b.price);
        break;
      default:
        filteredProductsArray = [...products];
    }

    setFilteredProducts(filteredProductsArray);
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Función para abrir el carrito
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Función para cerrar el carrito
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Calcula el total de la compra
  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <Header />
      <section className="gift-boxes">
        <h2>Bienvenidos a esta hermosa comunidad regalera.</h2>
        <div className="gift-boxes-filter">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="filter-button"
          >
            <option value="" disabled>
              Ordenar por:
            </option>
            <option value="newest" className="filter-option">
              Más nuevo:
            </option>
            <option value="highestPrice" className="filter-option">
              Precio más alto:
            </option>
            <option value="lowestPrice" className="filter-option">
              Precio más bajo:
            </option>
          </select>
        </div>
      </section>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {/* Botón ABRIR carrito */}
      <button onClick={openCart} className="cart-button">
        Carrito ({cart.length})
      </button>
      {isCartOpen && (
        <div className="cart">
          <h2>Carrito de Compras</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={closeCart} className="close-button">X</button>
          <p>Total: ${calculateTotal()}</p>
        </div>
      )}

      <Footers />
      <WhatsAppButton />
    </div>

  );
};

export default GiftBoxesPage;
