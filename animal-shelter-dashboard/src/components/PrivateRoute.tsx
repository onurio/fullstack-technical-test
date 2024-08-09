import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useToken from "../hooks/useToken";

const PrivateRoute: React.FC = () => {
  const { token } = useToken();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
