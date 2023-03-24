import { Button, Card, CardBody, CardText } from "reactstrap";

const Leave = ({ leaveObject, deleteLeave, updateLeave }) => {
  return (
    <Card>
      <CardBody>
        <h3>Leave Id : {leaveObject.id}</h3>
        <CardText>
          <h3>
            {leaveObject.date[0]}-{leaveObject.date[1]}-{leaveObject.date[2]}
          </h3>
          <h6>{leaveObject.status}</h6>
          <Button onClick={() => deleteLeave(leaveObject)} color="danger">
            Delete
          </Button>
          <Button
            onClick={() => updateLeave(leaveObject)}
            color="warning"
            className="ms-1"
          >
            Edit
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Leave;
