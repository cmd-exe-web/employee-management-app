import { Card, CardBody, Container } from "reactstrap";
import AddLeave from "../../components/AddLeave";
import Base from "../../components/Base";

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
      </Container>
    </Base>
  );
};

export default Userdashboard;
