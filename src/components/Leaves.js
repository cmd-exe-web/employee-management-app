import { useEffect, useState } from "react";
import { loadAllLeaves } from "../services/leave-service";
import { getCurrentUserDetail } from "../auth";
import { Button, Col, Row } from "reactstrap";
import Leave from "./Leave";

const Leaves = () => {
  const [user, setUser] = useState(undefined);

  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setUser(getCurrentUserDetail());
    console.log("setting user details useEffect called");
  }, []);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  // const loadAllLeaves = (event) => {
  //   console.log("logging before sending the get request");
  //   console.log(user);
  //   let userId = user?.id;
  //   console.log(userId);

  //   // load all the leaves from server
  //   loadAllLeaves(userId)
  //     .then((data) => {
  //       console.log(data);
  //       setLeaves(data);
  //       console.log("printing leaves");
  //       console.log(leaves);
  //       // console.log(leaves[0]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    console.log("printing user before calling the api");
    console.log(user);
    console.log("^^^^ user object");
    // let userId = user?.id;
    console.log(user?.id);
    loadAllLeaves(user?.id)
      .then((data) => {
        console.log(data);
        setLeaves(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  // useEffect(() => {
  //   console.log(leaves);
  //   leaves.map((leave) => {
  //     console.log(leave);
  //   });
  // }, [leaves]);

  if (leaves[0] === undefined) {
    <p>Loading</p>;
  } else {
    return (
      <div className="container-fluid">
        <h2>These are you leaves</h2>
        <Row>
          {/* <Leave leaveObject={leaves[0]} /> */}
          {leaves.map((leave) => {
            return <Leave leaveObject={leave} />;
          })}
        </Row>
      </div>
    );
  }
};

export default Leaves;
