import { Card, CardBody, Container } from "reactstrap";
import AddLeave from "../../components/AddLeave";
import AddTask from "../../components/AddTask";
import Base from "../../components/Base";
import Leaves from "../../components/Leaves";

const Userdashboard = () => {
  return (
    <Base>
      <Container>
        <Card>
          <CardBody>
            <h2>Welcome to Dashboard</h2>
          </CardBody>
        </Card>
        <AddLeave />
        <AddTask />
      </Container>
    </Base>
  );
};

export default Userdashboard;
