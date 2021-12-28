import React from "react";
import { Card, Button } from "react-bootstrap";

const TaskListCards = (props) => {
  const { task = {}, deleteHandler, editHandler } = props;
  return (
    <Card border="light" bg="light">
      <Card.Body>
        <Card.Title>
          <Card.Link href={`/tasks/${task.id}`}>#{task.id}</Card.Link>
        </Card.Title>
        <Card.Subtitle>{task.taskName}</Card.Subtitle>
        <div class="text-muted">
          <small>{task.projectName}</small>
        </div>
        <p>{task.description}</p>
        <div>
          {task.createdDate && <small>Created: {task.createdDate}</small>}
          {task.updatedDate && <small>Updated {task.updatedDate}</small>}
        </div>
        <Button
          variant="outline-primary"
          size="sm"
          className=""
          onClick={() => editHandler(task)}
          style={{ marginRight: "4px" }}
        >
          <span>
            <i className="bi bi-pencil"></i>
          </span>{" "}
          Edit
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          className=""
          onClick={() => deleteHandler(task)}
        >
          <span>
            <i className="bi bi-trash"></i>
          </span>{" "}
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default TaskListCards;
