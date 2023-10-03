import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footers = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Suscríbete a nuestra newsletter</h3>
            <p>Recibe las últimas noticias y ofertas especiales directamente en tu bandeja de entrada.</p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Suscribirse
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mt-4">© 2023 Decoboxgift. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footers;
