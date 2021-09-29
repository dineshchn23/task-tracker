import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import TaskList from "../../Components/TaskList/TaskList.component";
import TaskModal from "../../Components/TaskModal/TaskModal.component";
import TaskDeleteModal from "../../Components/TaskDeleteModal/TaskDeleteModal.component";
import { createTask, editTask, deleteTask } from "../../store/actions";
import "./Tasks.style.css";

const Tasks = (props) => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks);
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
      <Container fluid>
        <Row>
          <Col xs={12} id="tasks">
            <Button
              variant="light"
              className="mb-sm-3"
              onClick={() => setIsTaskModalActive(true)}
            >
              <span>
                <i className="bi bi-plus-circle"></i>
              </span>{" "}
              Create Task
            </Button>
            <p>Total records: {taskList.length}</p>
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
      </Container>
    </>
  );
};
export default Tasks;
