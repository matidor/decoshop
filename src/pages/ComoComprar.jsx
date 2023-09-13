import Header from '../components/Header';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/ComoComprar.css';

const ComoComprar = () => {
    return (
        <div>
            <Header />
            <section className="como-comprar">
                <div className="breadcrumbs">
                    <a href="/">Inicio</a> / Como comprar
                </div>
               <h1>¿Como comprar?</h1>

                <p>
                    Para hacer una compra, simplemente sigue estos pasos:
                </p>
                <ol className="centered-list" >
                    <li>
                        <FaCheckCircle className="icon-check" /> {/* Agrega el ícono antes del elemento */}
                        Navega por nuestro catálogo y encuentra los productos que deseas.
                    </li>
                    <li>
                        <FaCheckCircle className="icon-check" /> {/* Agrega el ícono antes del elemento */}
                        Haz clic en el botón "Agregar al carrito" para cada producto que desees comprar.
                    </li>
                    <li>
                        <FaCheckCircle className="icon-check" /> {/* Agrega el ícono antes del elemento */}
                        Revisa los productos en tu carrito de compras y procede al pago.
                    </li>
                    <li>
                        <FaCheckCircle className="icon-check" /> {/* Agrega el ícono antes del elemento */}
                        Selecciona un método de pago y proporciona la información necesaria.
                    </li>
                    <li>
                        <FaCheckCircle className="icon-check" /> {/* Agrega el ícono antes del elemento */}
                        Confirma tu compra y recibirás una confirmación por correo electrónico.
                    </li>
                </ol>
                <p>
                    Si tienes alguna pregunta o necesitas asistencia durante el proceso de compra, no dudes en <a href="/contacto">contactarnos</a>.
                </p>
                <p>
                    Cualquier inquietud, podes escribirnos a nuestro WhatsApp 👉 2255609449
                </p> <br />
                <p>¡Muchas gracias por elegirnos! ❤🙌 <br />
                    Fue un placer ayudarte a sorprender. <br />
                    Te esperamos pronto, Sol.</p>
            </section>
        </div>
    );
};

export default ComoComprar;