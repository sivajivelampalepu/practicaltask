import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="header shadow">
      <div className="container">
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3">
          Head & Tail
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact className="nav-link" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link" activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/head-tail" className="nav-link" activeClassName="active">
              Head & Tail
            </Nav.Link>

             <Nav.Link as={NavLink} to="/head-tailtwo" className="nav-link" activeClassName="active">
              Head & Tail 2
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;