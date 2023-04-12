import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
  const { userId } = useParams();
useEffect({
  // call APIS with userId

},[userId])
  return <div>UserEdit</div>;
};

export default UserEdit;
