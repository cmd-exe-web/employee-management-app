import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col
            sm={{
              size: 6,
              offset: 3,
            }}
          >
            <Card color="dark" outline>
              <CardHeader>
                <h3>Login Here!</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Enter email here"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password here"
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="primary">Login</Button>
                    <Button type="reset" className="ms-2" color="danger">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
