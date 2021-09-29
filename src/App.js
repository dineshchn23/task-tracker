import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.component";
import Topbar from "./Components/Topbar/Topbar.component";
import "./App.css";
import Tasks from "./Pages/Tasks/Tasks.component";
import ContactUs from "./Pages/ContactUs/ContactUs.component";

const Dash = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  return (
    <>
      <Container fluid>
        <Row className="flex-nowrap">
          <Col xs={12}>
            <Topbar openDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
            <Row>
              <Col
                xs={12}
                md={2}
                id="sidebar-wrapper"
                className={`${isDrawerOpen ? "d-block" : "d-none"}`}
              >
                <Sidebar isDrawerOpen={isDrawerOpen} />
              </Col>
              <Col xs={isDrawerOpen ? 10 : 12} id="page-content-wrapper">
                <Switch>
                  <Route path="/Tasks">
                    <Tasks />
                  </Route>
                  <Route path="/contact-us">
                    <ContactUs />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Dashboard = withRouter(Dash);
export default Dashboard;
