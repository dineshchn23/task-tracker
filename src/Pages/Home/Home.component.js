import React, { useSelector } from "react";
import {
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Form,
  Row,
  Col,
  Badge,
  FloatingLabel,
  Image,
} from "react-bootstrap";
import "./Home.style.css";
import TaskTypesDoughnutChart from "../../Components/DashboardCharts/TaskTypesDoughnutChart.component";
import TaskPriorityBarChart from "../../Components/DashboardCharts/TaskPriorityBarChart.component";

const data = {
  id: "1001",
  taskName: "Create the base layout",
  projectName: "Task Tracker",
  description:
    "To develop the task tracker project, we need a base layout to get it started.",
};

const Home = (props) => {
  return (
    <Row>
      <Col xs={12} md={3}>
        <div className="filter datewise">
          <h6>Filter Datewise</h6>
          <Button size="sm" className="mx-2 mb-2" variant="outline-secondary">
            Last 3 days <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          <Button size="sm" className="mx-2 mb-2" variant="outline-secondary">
            Last 15 days <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          <Button size="sm" className="mx-2 mb-2" variant="outline-secondary">
            Last 1 month <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          <Button size="sm" className="mx-2 mb-2" variant="outline-primary">
            Last 3 months <Badge bg="primary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          <Button size="sm" className="mx-2 mb-2" variant="outline-secondary">
            Last 1 year <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          <Button size="sm" className="mx-2 mb-2" variant="link">
            Clear
          </Button>
        </div>
        <hr></hr>
        <div>
          <h6>Filter Projectwise</h6>
          <div className="mb-2">
            <Button className="mx-1" size="sm" variant="primary">
              Project A <i className="bi bi-x"></i>
            </Button>
            <Button className="mx-1" size="sm" variant="primary">
              Project B <i className="bi bi-x"></i>
            </Button>
            <Button size="sm" className="mx-2 mb-2" variant="link">
              Clear
            </Button>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Type.." />
          </Form.Group>
          <div className="mb-3">
            <Form.Check type="checkbox" checked label="Project A" />
          </div>
          <div className="mb-3">
            <Form.Check type="checkbox" checked label="Project B" />
          </div>
          <div className="mb-3">
            <Form.Check type="checkbox" label="Project C" />
          </div>
          <div className="mb-3">
            <Form.Check type="checkbox" label="Project D" />
          </div>
          <div className="mb-3">
            <Form.Check type="checkbox" label="Project E" />
          </div>
        </div>
        <hr></hr>
      </Col>
      <Col xs={12} md={9}>
        <Row>
          <Col xs={12} md={4} id="tasks">
            <TaskTypesDoughnutChart />
          </Col>
          <Col xs={12} md={8} id="tasks">
            <TaskPriorityBarChart />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Home;
