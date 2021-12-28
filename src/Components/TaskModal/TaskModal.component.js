import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Form, Button, FloatingLabel, Alert } from "react-bootstrap";

const TaskModal = (props) => {
  const {
    setIsTaskModalActive,
    submitTask,
    currentTaskDetails,
    editHandler,
    toggleTaskModal,
  } = props;
  const {
    id = null,
    projectId = null,
    taskName = null,
    description = null,
  } = currentTaskDetails || {};
  const projectList = useSelector((state) => state.projectList);
  const [formData, setFormData] = useState({
    ...(id && { id }),
    taskName: (id && taskName) || "",
    projectId: (id && projectId) || "",
    description: (id && description) || "",
  });
  const [formError, setFromError] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const data = {
      ...formData,
      [e.target.name]: value,
    };
    setFormData(data);
  };

  const close = () => {
    toggleTaskModal(false);
  };

  const submit = () => {
    setFromError({ error: false, field: {} });
    for (var val of Object.keys(formData)) {
      if (!formData[val] && val !== "description") {
        setFromError({ error: true, field: val });
        return false;
      }
    }
    if (id) {
      editHandler({ ...formData, id });
    } else {
      setIsTaskModalActive(false);
      submitTask(formData);
    }
  };
  return (
    <>
      <Modal show centered >
        <Modal.Header closeButton onHide={() => close()}>
          <Modal.Title>{id ? "Edit Task" : "Create Task"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="taskName">
              <Form.Label>*Task Name</Form.Label>
              <Form.Control
                type="text"
                name="taskName"
                placeholder="Task name"
                onChange={(e) => handleChange(e)}
                defaultValue={taskName}
              />
              {formError.error && formError.field === "taskName" && (
                <Alert variant="danger">Please enter the task name</Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectName">
              <Form.Label>*Project Name</Form.Label>
              <Form.Select
                name="projectId"
                aria-label="Select Project"
                onChange={(e) => handleChange(e)}
                defaultValue={projectId}
              >
                <option>Select Project</option>
                {projectList.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </Form.Select>
              {formError.error && formError.field === "projectId" && (
                <Alert variant="danger">Please select a project</Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="description">
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  onChange={(e) => handleChange(e)}
                  defaultValue={description}
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={() => close()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => submit(currentTaskDetails)}>
            {(id && "Submit") || "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TaskModal;
