import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { doLogin } from "../auth";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";

const Login = () => {
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    //validation
    if (loginDetail.username.trim() == "" || loginDetail.password == "") {
      toast.error("Email and password are required!");
      return;
    }

    //submit the login detail to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localStorage
        doLogin(data, () => {
          console.log("login detail is saved to local storage");
          //redirect to user dashboard page
          navigate("/user/dashboard");
        });

        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 404 || error.response.status == 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on server!!");
        }
      });
  };

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
                <Form onSubmit={handleFormSubmit}>
                  {/* enter email field */}
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Enter email here"
                      value={loginDetail.username}
                      onChange={(e) => {
                        handleChange(e, "username");
                      }}
                    />
                  </FormGroup>

                  {/* enter password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password here"
                      value={loginDetail.password}
                      onChange={(e) => {
                        handleChange(e, "password");
                      }}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="primary">Login</Button>
                    <Button
                      onClick={handleReset}
                      type="reset"
                      className="ms-2"
                      color="danger"
                    >
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
