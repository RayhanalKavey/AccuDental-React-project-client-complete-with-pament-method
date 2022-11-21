import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Loading from "../../shared/component/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //before check the user first catch the user's current location
  const location = useLocation();
  if (loading) {
    // Use spinner here
    return (
      <Loading></Loading>
      // <div className=" mt-5 text-center">
      //   Loading...
      //   <progress className="progress w-56"></progress>
      // </div>
    );
  }
  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
