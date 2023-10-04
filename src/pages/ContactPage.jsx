import "../styles/ContactPage.css";
import Footers from "../components/Footers";
import WhatsAppButton from "../components/WhattsApp";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // despues agrego la funcion para enviar los datos.
    console.log("Formulario enviado");
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo:</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono (opcional):</label>
              <input type="tel" id="telefono" name="telefono" />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje"></textarea>
            </div>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
      <div className="footer-contacto">
        <Footers />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default ContactPage;
