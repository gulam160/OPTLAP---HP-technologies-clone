import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { authState } = useContext(AuthContext);

  if (authState.isAuth === false) {
    alert("Please, Authenticate Yourself");
    return <Navigate to="/signin" />;
  }
  return children;
}

export default PrivateRoute;
