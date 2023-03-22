import { useEffect } from "react";
import Base from "../../components/Base";
import Leaves from "../../components/Leaves";

const ProfileInfo = () => {
  useEffect(() => {
    //load all the leaves from server
  }, []);

  return (
    <Base>
      <div>
        <h1>Profile Info</h1>
        <Leaves />
      </div>
    </Base>
  );
};

export default ProfileInfo;
