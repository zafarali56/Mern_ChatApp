import { useContext } from "react";
import Register from "./Register";
import { UserContext } from "./UserContext";

export default function Routes() {
  const { email, id } = useContext(UserContext);
  if (email) {
    return "logged in as: " + email;
  }
  return <Register />;
}
