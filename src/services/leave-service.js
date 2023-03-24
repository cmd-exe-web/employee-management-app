import { privateAxios } from "./helper";

//create leave function
export const createLeave = (leaveData) => {
  console.log(leaveData);
  return privateAxios
    .post(`/api/user/${leaveData.userId}/leaves`, leaveData)
    .then((response) => response.data);
};

//get all leaves by userId
export const loadAllLeaves = (userId) => {
  return privateAxios
    .get(`/api/user/${userId}/leaves`)
    .then((response) => response.data);
};

//delete Leave
export const deleteLeave = (leaveId) => {
  return privateAxios
    .delete(`/api/leaves/${leaveId}`)
    .then((response) => response.data);
};

//update leave
export const updateLeave = (leave) => {
  return privateAxios
    .put(`/api/leaves/${leave.id}`, leave)
    .then((response) => response.data);
};
