import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const TopBar = ({ toggleDrawer }) => {
  return (
    <Navbar className="mb-3" bg="primary" variant="dark">
      <Container fluid>
        <Button size="lg" onClick={() => toggleDrawer()}>
          <i class="bi bi-list"></i>
        </Button>
        <Navbar.Brand href="/home">Task-Tracker</Navbar.Brand>
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
