import React from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Sidebar.style.css";

const Side = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Offcanvas
      className="p-3"
      show={isDrawerOpen}
      onHide={() => toggleDrawer()}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Task Tracker</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="bg-light flex-column" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" active>
              <i class="bi bi-display"></i> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/tasks">
              <i class="bi bi-list-ul"></i> Tasks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact-us">
              <i class="bi bi-headset"></i> Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
