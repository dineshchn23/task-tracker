import { combineReducers } from "redux";
import { CREATE_TASK, LIST_TASK, EDIT_TASK, DELETE_TASK } from "./actionTypes";

const projectList = () => {
  return [
    {
      id: 1,
      name: "JavaScript Project",
    },
    {
      id: 2,
      name: "Python Project",
    },
    {
      id: 3,
      name: "DevOps Project",
    },
    {
      id: 4,
      name: "Node Project",
    },
    {
      id: 5,
      name: "Java Project",
    },
  ];
};
const tasks = (state = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      const projectItem = projectList().find(
        (item) => item.id.toString() === action?.data?.projectId.toString()
      );
      state.push({
        ...action.data,
        projectName: projectItem?.name,
        id: window.btoa(action?.data?.taskName),
        createdDate: new Date().toJSON().slice(0, 10),
      });
      return state;
    case LIST_TASK:
      return state;
    case EDIT_TASK:
      const stateForEditOp = [...state];
      const editTaskIndex = stateForEditOp.findIndex(
        (data) => data?.id === action?.data?.id
      );
      stateForEditOp[editTaskIndex] = {
        ...stateForEditOp[editTaskIndex],
        ...action.data,
        projectName: projectList().find(
          (item) => item.id.toString() === action?.data?.projectId.toString()
        )?.name,
        updatedDate: new Date().toJSON().slice(0, 10),
      };
      return stateForEditOp;
    case DELETE_TASK:
      const stateForDeleteOp = [...state];
      const deleteTaskIndex = stateForDeleteOp.findIndex(
        (data) => data?.id === action?.data?.id
      );
      stateForDeleteOp.splice(deleteTaskIndex, 1);
      return stateForDeleteOp;
    default:
      return state;
  }
};
export default combineReducers({ projectList, tasks });
