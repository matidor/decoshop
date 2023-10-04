import "../styles/Envios.css";
// import Footers from "../components/Footers";
// import WhatsAppButton from "../components/WhattsApp";

const Envios = () => {
  return (
    <div>
      <section className="envios">
        <div className="breadcrumbs-envios">
          <a href="/">Inicio</a> / Envíos
        </div>
        <h1>Envíos</h1>
        <p>
          ¿Cuál es el costo de envío? <br />
          El costo de envío será mostrado en base al total de la compra y
          ubicación, <br /> en el checkout, en el momento previo a la compra.{" "}
          <br />
          <br />
          ¿Cómo se realizan los envíos? <br />
          Realizamos envíos a todo el país con la empresa de transporte que vos
          elijas. <br />
          <br />
          ¿Dónde puedo recibir mi pedido? <br />
          Somos de Villa Gesell, Pcia de Bs As. Realizamos envíos a todo el
          país.
          <br /> O Podesretirar por nuestra dirección la giftbox elegida.
          <br />
          <br />
          ¿Cuánto tarda en llegar el pedido?
          <br />
          El tiempo de entrega dependerá del tipo de envío seleccionado. <br />
          En general la demora se encuentra entre 3 y 7 días hábiles
          <br /> luego de acreditado el pago.
          <br />
        </p>
        <br />
        <p>
          ¡Para más info escribinos y despejamos tus dudas! <br />
        </p>
      </section>
      {/* <div className="footer-envios">
        <Footers />
        <WhatsAppButton />
      </div> */}
    </div>
  );
};

export default Envios;
