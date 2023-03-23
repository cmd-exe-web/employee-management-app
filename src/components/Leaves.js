import { useEffect, useState } from "react";
import { loadAllLeaves } from "../services/leave-service";
import { getCurrentUserDetail } from "../auth";

const Leaves = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    //getting currentUser info
    setUser(getCurrentUserDetail());
  }, []);

  useEffect(() => {
    console.log("logging before sending the get request");
    console.log(user);
    console.log(user.id);
    // let userId = user.id;
    // console.log(userId);
    // load all the leaves from server
    // loadAllLeaves(userId)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [user]);

  return (
    <div>
      <h1>These are all your leaves</h1>
    </div>
  );
};

export default Leaves;
