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
        <div className="text-container">
          <p>Texto debajo de los iconos</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;