import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //change handler
  const handleChange = (event, property) => {
    //dynamically setting the field values
    setData({ ...data, [property]: event.target.value });
  };

  //resetting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      role: "",
    });
  };

  //Submitting the form
  const submitForm = (event) => {
    event.preventDefault();

    // if (error.isError) {
    //   toast.error(
    //     "Form data is invalid, correct all details then submit again!"
    //   );
    //   return;
    // }

    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((response) => {
        console.log(response);
        console.log("success log");
        toast.success(
          "User is registered successfully! User id: " + response.email
        );
        setData({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log!");
        if (error.response.status == 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on server!!");
        }
        //handling errors
        setError({
          errors: error,
          isError: true,
        });
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
                <h3>Fill Information to Register!</h3>
              </CardHeader>
              <CardBody>
                {/* Creating registration form */}
                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter name here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* Email field */}
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="email"
                      placeholder="Enter email here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* Password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>
                  {/* Roles field */}
                  <FormGroup>
                    <Label for="role">Select role</Label>
                    <Input
                      id="role"
                      type="select"
                      onChange={(e) => handleChange(e, "role")}
                    >
                      <option value="ROLE_ADMIN">Admin</option>
                      <option value="ROLE_MANAGER">Manager</option>
                      <option value="ROLE_EMPLOYEE">Employee</option>
                    </Input>
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="primary">Register</Button>
                    <Button
                      onClick={resetData}
                      color="danger"
                      type="reset"
                      className="ms-2"
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

export default Signup;
