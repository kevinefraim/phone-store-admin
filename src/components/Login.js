import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import LoginForm from "./LoginForm";

// import "./Login.css";

const LogIn = () => {
  const { handleActiveUser, activeUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //funcion de login
  const handleLog = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          email,
          password: pass,
        }
      );
      if (data.ok) navigate("/");

      handleActiveUser(data.loginUser, data.token);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <main
      className="flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <LoginForm
        error={error}
        email={email}
        pass={pass}
        handleLog={handleLog}
        setEmail={setEmail}
        setPass={setPass}
      ></LoginForm>
    </main>
  );
};

export default LogIn;
