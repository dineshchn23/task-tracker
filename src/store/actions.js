import {
  CREATE_TASK,
  LIST_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "./actionTypes";

export function createTask(data) {
  return {
    type: CREATE_TASK,
    data,
  };
}
export function listTask(data) {
  return {
    type: LIST_TASK,
    data,
  };
}
export function editTask(data) {
  return {
    type: EDIT_TASK,
    data,
  };
}
export function deleteTask(data) {
  return {
    type: DELETE_TASK,
    data,
  };
}
