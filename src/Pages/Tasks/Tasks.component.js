import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Row, Col, Button, Form } from "react-bootstrap";
import TaskList from "../../Components/TaskList/TaskList.component";
import TaskModal from "../../Components/TaskModal/TaskModal.component";
import TaskDeleteModal from "../../Components/TaskDeleteModal/TaskDeleteModal.component";
import { createTask, editTask, deleteTask } from "../../store/actions";
import "./Tasks.style.css";

const data = [
  {
    id: "tt-1001",
    taskName: "Create the base layout",
    projectName: "Task Tracker",
    description:
      "To develop the task tracker project, we need a base layout to get it started.",
  },
  {
    id: "tt-1002",
    taskName: "Create the base layout",
    projectName: "Task Tracker",
    description:
      "To develop the task tracker project, we need a base layout to get it started.",
  },
  {
    id: "tt-1003",
    taskName: "Create the base layout",
    projectName: "Task Tracker",
    description:
      "To develop the task tracker project, we need a base layout to get it started.",
  },
  {
    id: "tt-1004",
    taskName: "Create the base layout",
    projectName: "Task Tracker",
    description:
      "To develop the task tracker project, we need a base layout to get it started.",
  },
  {
    id: "tt-1005",
    taskName: "Create the base layout",
    projectName: "Task Tracker",
    description:
      "To develop the task tracker project, we need a base layout to get it started.",
  },
];

const Tasks = (props) => {
  const dispatch = useDispatch();
  // const taskList = useSelector((state) => state.tasks);
  const taskList = useSelector((state) => [...data, ...state.tasks]);
  const [isTaskModalActive, setIsTaskModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const [currentTaskDetails, setCurrentDetails] = useState(false);

  const submitTask = (data) => {
    dispatch(createTask(data));
  };
  const editHandler = (data) => {
    if (!isTaskModalActive) {
      setCurrentDetails(data);
      setIsTaskModalActive(true);
    } else {
      setIsTaskModalActive(false);
      dispatch(editTask(data));
    }
  };
  const deleteHandler = (data) => {
    if (!isDeleteModalActive) {
      setCurrentDetails(data);
      setIsDeleteModalActive(true);
    } else {
      setIsDeleteModalActive(false);
      dispatch(deleteTask(currentTaskDetails));
    }
  };
  const toggleTaskModal = () => {
    setIsTaskModalActive(false);
    setCurrentDetails({});
  };
  return (
    <>
      <Row>
        <Col xs={12} md={3}>
          <h3>Manage Tasks</h3>
          <Button
            className="mb-sm-3 full-width"
            onClick={() => setIsTaskModalActive(true)}
          >
            <span>
              <i className="bi bi-plus-circle"></i>
            </span>{" "}
            Create Task
          </Button>
          <p>Total records: {taskList.length}</p>
          <Form.Control type="text" placeholder="Start typing..." />
          <hr></hr>
          <div>
            <p>Available filters</p>
            <Button size="sm" className="mx-2" variant="outline-secondary">
              Priority <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Button size="sm" className="mx-2" variant="outline-secondary">
              Active <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Button size="sm" className="mx-2" variant="outline-secondary">
              Closed <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </div>
        </Col>
        <Col xs={12} md={9} id="tasks">
          <div className="table-container">
            <TaskList
              taskList={taskList}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          </div>
          {isTaskModalActive && (
            <TaskModal
              setIsTaskModalActive={setIsTaskModalActive}
              submitTask={submitTask}
              editHandler={editHandler}
              currentTaskDetails={currentTaskDetails}
              toggleTaskModal={toggleTaskModal}
            />
          )}
          {isDeleteModalActive && (
            <TaskDeleteModal
              deleteHandler={deleteHandler}
              setIsDeleteModalActive={setIsDeleteModalActive}
              currentTaskDetails={currentTaskDetails}
            />
          )}
        </Col>
      </Row>
    </>
  );
};
export default Tasks;
