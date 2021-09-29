import React from "react";
import { Modal, Button } from "react-bootstrap";

const TaskModal = (props) => {
  const { currentTaskDetails, setIsDeleteModalActive, deleteHandler } = props;

  const close = () => {
    setIsDeleteModalActive(false);
  };

  return (
    <>
      <Modal show>
        <Modal.Header closeButton onHide={() => close()}>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>Are you sure want to delete the task?</h5>
          <p>Task name: {currentTaskDetails.taskName}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={() => close()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteHandler(currentTaskDetails)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TaskModal;
