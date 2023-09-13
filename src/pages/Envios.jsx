import Header from "../components/Header";
import '../styles/Envios.css';

const Envios = () => {
    return (
        <div>
          <Header />
          <section className="quienes-somos">
            <div className="breadcrumbs">
              <a href="/">Inicio</a> / Envíos
            </div>
            <h1>Envíos</h1>
            <p>
            Somos de Villa Gesell, Pcia de Bs As. 
            </p>
            <p>
            Realizamos envíos a todo el país con la empresa de transporte que vos elijas. 🚚
            </p>
            <p>
            Tambien podes retirar la giftbox elegida en nuestra dirección coordinando a través de nuestro WhatsApp 2255609449.
            </p>

          </section>
        </div>
      );
    };
    
    export default Envios;