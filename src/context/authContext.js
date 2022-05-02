import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) ?? null
  );
  const navigate = useNavigate();

  //funcion que setea activeuser con el parametro que pasamos
  const handleActiveUser = (user, token) => {
    setActiveUser(user);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  //funcion que cierra sesion y setea activeuser como null
  const handleLogout = () => {
    setActiveUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        activeUser,
        setActiveUser,
        handleActiveUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
