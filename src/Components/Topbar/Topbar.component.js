import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const TopBar = ({ openDrawer }) => {
  return (
    <Navbar className="mb-3" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          Task-Tracker
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => openDrawer()}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <span className="text-white">
            Dinesh <i className="bi bi-person-circle"></i>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
