import { useEffect, useState } from "react";
import {
  loadAllLeaves,
  deleteLeave as doDeleteLeave,
  updateLeave as doUpdateLeave,
} from "../services/leave-service";
import { getCurrentUserDetail } from "../auth";
import { Button, Col, Row } from "reactstrap";
import Leave from "./Leave";
import { toast } from "react-toastify";

const Leaves = () => {
  const [user, setUser] = useState(undefined);

  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setUser(getCurrentUserDetail());
    console.log("setting user details useEffect called");
  }, []);

  useEffect(() => {
    console.log("printing user before calling the api");
    console.log(user);
    console.log("^^^^ user object");
    // let userId = user?.id;
    console.log(user?.id);
    loadLeaveData();
  }, [user]);

  const loadLeaveData = () => {
    loadAllLeaves(user?.id)
      .then((data) => {
        console.log(data);
        setLeaves(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete leave handler
  const deleteLeave = (leaveObject) => {
    //calling delete api
    doDeleteLeave(leaveObject.id)
      .then((resp) => {
        console.log(resp);
        toast.success("Leave is deleted");
        loadLeaveData();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in deleting leave");
      });
  };

  //update leave handler
  const updateLeave = (leaveObject) => {
    //calling update api
    doUpdateLeave(leaveObject)
      .then((resp) => {
        console.log(resp);
        toast.success("Leave update");
        loadLeaveData();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error updating leave");
      });
  };

  if (leaves[0] === undefined) {
    <p>Loading</p>;
  } else {
    return (
      <div className="container-fluid">
        <h2>These are you leaves</h2>
        <Row>
          {/* <Leave leaveObject={leaves[0]} /> */}
          {leaves.map((leave) => {
            return (
              <Leave
                leaveObject={leave}
                deleteLeave={deleteLeave}
                updateLeave={updateLeave}
              />
            );
          })}
        </Row>
      </div>
    );
  }
};

export default Leaves;
