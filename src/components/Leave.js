import { Card, CardBody, CardText } from "reactstrap";

const Leave = ({ leaveObject }) => {
  return (
    <Card>
      <CardBody>
        <h3>Leave Id : {leaveObject.id}</h3>
        <CardText>
          <h3>
            {leaveObject.date[0]}-{leaveObject.date[1]}-{leaveObject.date[2]}
          </h3>
          <h6>{leaveObject.status}</h6>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Leave;
