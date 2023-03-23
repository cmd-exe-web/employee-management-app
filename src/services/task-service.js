import { privateAxios } from "./helper";

//create task function
export const createTask = (taskData) => {
  console.log(taskData);
  return privateAxios
    .post(`/api/user/${taskData.userId}/tasks`, taskData)
    .then((response) => response.data);
};

//get all task of a user by id
export const loadAllTasks = (userId) => {
  return privateAxios
    .get(`/api/user/${userId}/tasks`)
    .then((response) => response.data);
};
