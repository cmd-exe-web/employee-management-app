import { privateAxios } from "./helper";

//create leave function
export const createLeave = (leaveData) => {
  console.log(leaveData);
  return privateAxios
    .post(`/api/user/${leaveData.userId}/leaves`, leaveData)
    .then((response) => response.data);
};
