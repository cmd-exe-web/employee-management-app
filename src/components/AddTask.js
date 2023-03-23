import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { getCurrentUserDetail } from "../auth";
import { createTask as doCreateTask } from "../services/task-service";

const AddTask = () => {
  const [user, setUser] = useState(undefined);

  const [task, setTask] = useState({
    title: "",
    description: "",
    userId: "",
  });

  useEffect(() => {
    setUser(getCurrentUserDetail());
    console.log(user);
  }, []);

  //field changed function
  const fieldChanged = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  //reset fields data
  const resetTask = () => {
    setTask({
      title: "",
      description: "",
    });
  };

  //create/submit task function
  const createTask = (event) => {
    event.preventDefault();

    //handling exceptions

    //submit the form to the server

    doCreateTask(task)
      .then((data) => {
        toast.success("Task Created!");
        console.log(task);
        setTask({
          title: "",
          description: "",
        });
      })
      .catch((error) => {
        toast.error("Task couldn't be create due to some error!!");
      });
  };

  return (
    <div className="wrapper">
      <Card className="shadow-sm">
        <CardBody>
          {/* {JSON.stringify(task)} */}
          <h3>Add task</h3>
          <Form onSubmit={createTask}>
            <div className="my-3">
              <Label for="title">Add title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter here"
                name="title"
                value={task.title}
                onChange={fieldChanged}
              />
            </div>
            <div className="my-3">
              <Label for="description">Add description</Label>
              <Input
                type="textarea"
                id="description"
                name="description"
                placeholder="Enter here"
                value={task.description}
                onChange={fieldChanged}
              />
            </div>
            <div className="my-3">
              <Label for="userId">For user</Label>
              <Input
                type="text"
                id="userId"
                name="userId"
                placeholder="Enter here"
                value={task.userId}
                onChange={fieldChanged}
              />
            </div>
            <Container>
              <Button type="submit" color="primary">
                Add Task
              </Button>
              <Button onClick={resetTask} className="ms-2" color="danger">
                Reset
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddTask;
