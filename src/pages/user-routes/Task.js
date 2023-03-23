import { Card, CardBody, CardText } from "reactstrap";

const Task = ({ taskObject }) => {
  return (
    <Card>
      <CardBody>
        <h3>{taskObject.title}</h3>
        <CardText>
          <h3>{taskObject.description}</h3>
          <h6>{taskObject.status}</h6>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Task;
