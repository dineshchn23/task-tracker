import React from "react";
import { Row, Col } from "react-bootstrap";
import TaskListCards from "./TaskListCards/TaskListCards.component";
import TaskListTable from "./TaskListTable/TaskListTable.component";

const TaskList = (props) => {
  const { taskList = [] } = props;
  return (
    <>
      {true ? (
        <Row>
          {Array.isArray(taskList) &&
            taskList.map((task) => (
              <Col className="mb-2" xs={12} md={4} key={task.id}>
                <TaskListCards task={task} {...props} />
              </Col>
            ))}
        </Row>
      ) : (
        <TaskListTable {...props} />
      )}
    </>
  );
};
export default TaskList;
