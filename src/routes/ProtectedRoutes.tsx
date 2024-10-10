
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  /*
   * check if the user is logged in or not
   * if yes, render the component
   * else, redirect to /auth/login
   */

  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  
  if(isAuthenticated){
    return (
      <Outlet />
    )
  } else {
    // redirect to /auth/login
    return (
      <Navigate to="/auth/login" />
    )
  } 
};

export default ProtectedRoutes;
