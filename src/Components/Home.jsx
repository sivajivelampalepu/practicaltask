import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Container className="home">
      <Card className="hero-card text-white mb-5 shadow-lg">
        <Card.Body className="text-center">
          <Card.Title as="h1" className="display-4 fw-bold">
            Welcome to Head & Tail
          </Card.Title>
          <Card.Text className="fs-5 mb-4">
            Dive into a fun and interactive coin toss game! Test your luck and see how the patterns unfold.
          </Card.Text>
          <Button as={Link} to="/head-tail" variant="warning" size="lg" className="hero-button">
            Play Now
          </Button>
        </Card.Body>
      </Card>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="feature-card shadow">
            <Card.Body>
              <Card.Title as="h2" className="fs-3 fw-bold">Interactive Gameplay</Card.Title>
              <Card.Text>
                Add Heads or Tails and watch them stack in columns, creating unique patterns with each choice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="feature-card shadow">
            <Card.Body>
              <Card.Title as="h2" className="fs-3 fw-bold">Modern Design</Card.Title>
              <Card.Text>
                Enjoy a sleek, responsive interface built with React and styled with Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;