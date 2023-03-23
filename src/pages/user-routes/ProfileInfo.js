import { useEffect } from "react";
import { Card, CardTitle, Container } from "reactstrap";
import Base from "../../components/Base";
import Leaves from "../../components/Leaves";
import Tasks from "./Tasks";

const ProfileInfo = () => {
  return (
    <Base>
      <Container>
        <Card>
          <CardTitle>
            <h1>Profile Info</h1>
          </CardTitle>
          <Leaves />
          <Tasks />
        </Card>
      </Container>
    </Base>
  );
};

export default ProfileInfo;
