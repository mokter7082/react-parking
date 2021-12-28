import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://i.ibb.co/Pw6c6h5/logot.png"
                width="150"
                height="50"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">List Your Parking</Nav.Link>
              <Nav.Link href="#pricing">Our Solution</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
              <Nav.Link href="#pricing">Request Parking</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
