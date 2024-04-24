import { UserChildren } from "../providers/UsernameProvider";

const UserChildrenProvider = ({ children }) => {
  return (
    <UserChildren.Provider value={{ username1: "jorgito" }}>
      {children}
    </UserChildren.Provider>
  );
};
export default UserChildrenProvider;
