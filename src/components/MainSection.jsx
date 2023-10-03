import ImageSlider from './ImageSlider';
import '../styles/MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="hero">
        <ImageSlider />
      </div>
      <h1 className="hero-title">
        ¡Descubre la magia de regalar con Decobox!
      </h1>

      <div className="banner">
        <div className="icon-container">

        </div>
        <div className="div-iconos">
          <p>otras cosas para agregar</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;