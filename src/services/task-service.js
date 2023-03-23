import { privateAxios } from "./helper";

//create task function
export const createTask = (taskData) => {
  console.log(taskData);
  return privateAxios
    .post(`/api/user/${taskData.userId}/tasks`, taskData)
    .then((response) => response.data);
};
