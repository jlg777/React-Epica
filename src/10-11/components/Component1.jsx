import { useContext } from "react";
import { UserChildren, UsernameContext } from "../providers/UsernameProvider";

const Component1 = () => {
  const { username } = useContext(UsernameContext);
  const { username1 } = useContext(UserChildren);

  return (
    <>
      <p>contex</p>
      <p>{username}</p>
      <p>{username1}</p>
    </>
  );
};
export default Component1;
