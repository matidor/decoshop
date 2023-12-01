import { useState } from "react";
import products from "../Data/productData";
import "../styles/GiftBoxesSection.css";

const GiftBoxesPage = ({ cart, setCart }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (option) => {
    let filteredProductsArray = [];

    switch (option) {
      case "newest":
        filteredProductsArray = [...products].sort((a, b) => a.id - b.id);
        break;
      case "highestPrice":
        filteredProductsArray = [...products].sort((a, b) => b.price - a.price);
        break;
      case "lowestPrice":
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

  return (
    <div>
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
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftBoxesPage;
