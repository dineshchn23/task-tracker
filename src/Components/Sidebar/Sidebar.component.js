import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Sidebar.style.css";

const Side = ({ isDrawerOpen }) => {
  return (
    <>
      <Nav
        className={`${
          isDrawerOpen ? "d-block" : "d-none"
        } d-md-block bg-light sidebar`}
        activeKey="/tasks"
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item className="px-sm-3">
          <Nav.Link href="/tasks">Tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-sm-3">
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
