import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                {/* Add more Nav.Link or other components as needed */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-3">
          <h1>Heading Title</h1>
        </Container>

        {/* Cards */}
        <Container className="mt-3">
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="image-source.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title {idx + 1}</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

