import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.component";
import Topbar from "./Components/Topbar/Topbar.component";
import "./App.css";
import Tasks from "./Pages/Tasks/Tasks.component";
import Home from "./Pages/Home/Home.component";
import TaskDetails from "./Pages/TaskDetails/TaskDetails.component";
import ContactUs from "./Pages/ContactUs/ContactUs.component";

const Dash = (props) => {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  window.isMobile = width <= 768;

  return (
    <>
      <Topbar toggleDrawer={() => toggleDrawer(!isDrawerOpen)} />
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={() => toggleDrawer(!isDrawerOpen)} />
      <Container fluid>
        <Row className="flex-nowrap">
          <Col xs={12} id="page-content-wrapper">
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/tasks">
                <Tasks />
              </Route>
              <Route path="/tasks/:id">
                <TaskDetails />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Dashboard = withRouter(Dash);
export default Dashboard;
