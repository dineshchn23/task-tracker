import React from "react";
import { Table, Button } from "react-bootstrap";

const TaskList = (props) => {
  const { taskList = [], deleteHandler, editHandler } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Task ID</th>
          <th>Task Name</th>
          <th>Project</th>
          <th>description</th>
          <th>Created Date</th>
          <th>Updated Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {taskList.length === 0 && (
          <tr>
            <td colSpan="8">
              <p className="mt-2 text-center">No task added!</p>
            </td>
          </tr>
        )}
        {Array.isArray(taskList) &&
          taskList.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.taskName}</td>
              <td>{task.projectName}</td>
              <td>{task.description}</td>
              <td>{task.createdDate || "NA"}</td>
              <td>{task.updatedDate || "NA"}</td>
              <td>
                <Button
                  variant="light"
                  size="sm"
                  className="mb-sm-3"
                  onClick={() => editHandler(task)}
                >
                  <span>
                    <i className="bi bi-pencil"></i>
                  </span>{" "}
                  Edit
                </Button>
                <Button
                  variant="light"
                  size="sm"
                  className="mb-sm-3"
                  onClick={() => deleteHandler(task)}
                >
                  <span>
                    <i className="bi bi-trash"></i>
                  </span>{" "}
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
export default TaskList;
