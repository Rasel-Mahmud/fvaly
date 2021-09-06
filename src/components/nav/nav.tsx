import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Category</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Merchant</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default nav;
