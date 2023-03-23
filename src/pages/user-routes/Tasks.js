import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { getCurrentUserDetail } from "../../auth";
import { loadAllTasks } from "../../services/task-service";
import Task from "./Task";

const Tasks = () => {
  const [user, setUser] = useState(undefined);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setUser(getCurrentUserDetail());
  }, []);

  useEffect(() => {
    //fetching data from backend
    loadAllTasks(user?.id)
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  if (tasks[0] === undefined) {
    <p>Loading</p>;
  } else {
    return (
      <div className="container-fluid">
        <h2>These are your Tasks</h2>
        <Row>
          {/* <Task taskObject={tasks[0]} /> */}
          {tasks.map((task) => {
            return <Task taskObject={task} />;
          })}
        </Row>
      </div>
    );
  }
};

export default Tasks;
