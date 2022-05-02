import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const PrivateRouteAdmin = () => {
  const { activeUser } = useContext(AuthContext);

  return !activeUser?.isAdmin ? <Navigate to="/login" /> : <Outlet />;
};
