import { useEffect, useState } from "react";
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
import { createLeave as doCreateLeave } from "../services/leave-service";

const AddLeave = () => {
  const [user, setUser] = useState(undefined);

  const [leave, setLeave] = useState({
    date: "",
  });

  useEffect(() => {
    setUser(getCurrentUserDetail());
  }, []);

  //field changed function
  const fieldChanged = (event) => {
    setLeave({ ...leave, [event.target.name]: event.target.value });
  };

  //reset field data
  const resetLeave = () => {
    setLeave({
      date: "",
    });
  };

  //create/submit post function
  const createLeave = (event) => {
    event.preventDefault();

    //handling exceptions
    console.log(leave);
    if (leave.date == "") {
      alert("Date is required");
      return;
    }

    //submit the form to the server
    leave["userId"] = user.id;
    doCreateLeave(leave)
      .then((data) => {
        alert("Leave applied!");
        console.log(leave);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  return (
    <div className="wrapper">
      <Card className="shadow-sm">
        <CardBody>
          {JSON.stringify(leave)}
          <h3>Apply leaves</h3>
          <Form onSubmit={createLeave}>
            <div className="my-3">
              <Label for="date">For date</Label>
              <Input
                id="date"
                type="date"
                name="date"
                value={leave.date}
                onChange={fieldChanged}
              />
            </div>
            <Container>
              <Button type="submit" color="primary">
                Apply Leave
              </Button>
              <Button onClick={resetLeave} className="ms-2" color="danger">
                Reset
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddLeave;
