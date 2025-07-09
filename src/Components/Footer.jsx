import React from 'react';
import { Container } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer bg="primary" variant="dark" expand="lg" sticky="top" className="header shadow">
         <p className="mb-1 small">© {new Date().getFullYear()} Head & Tail App. Built with React & Bootstrap.</p>
      <Container className="text-end">
       
        <div className="d-flex justify-content-end gap-3">
          <span>@</span>
          <a href="https://github.com/sivajivelampalepu" target='_blank' className="text-white hover-orange small"  rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sivaji-velampalepu" target='_blank' className="text-white hover-orange small"  rel="noreferrer">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;