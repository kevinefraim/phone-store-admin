import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  //seteando item activeuser con LS
  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  //funcion que setea activeuser con el parametro que pasamos
  const handleActiveUser = (user, token) => {
    setActiveUser(user);
    localStorage.setItem("token", token);
  };

  //funcion para revalidar el usuario y setear activeUser nuevamente
  useEffect(() => {
    const revalidateUser = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/relog`,
          { headers: { "x-token": localStorage.getItem("token") } }
        );
        setActiveUser(data.user);
      } catch (error) {
        setActiveUser(null);
      }
    };
    revalidateUser();
  }, []);

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
