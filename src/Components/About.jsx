import React from 'react';
import { Card, Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Card className="shadow-lg p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Card.Body>
          <Card.Title as="h1" className="fs-2 fw-bold text-center mb-4">
            About Head & Tail
          </Card.Title>
          <Card.Text className="mb-4">
            Head & Tail is a dynamic React application designed to simulate a coin toss game with a unique
            twist: your choices create visual patterns in columns. Built with modern web technologies, it
            offers a seamless and engaging user experience.
          </Card.Text>
          <Card.Text className="mb-4">
            Key features include responsive navigation, interactive gameplay, and a clean, modern design
            powered by React-Bootstrap. Whether you're exploring for fun or learning about React
            development, this app showcases best practices in frontend development.
          </Card.Text>
          <Card.Text>
            Check out the <a href="/head-tail" className="text-primary">Play</a> page to start tossing!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;