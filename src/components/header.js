import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = ({ openAddModal }) => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <header>
      <div className="container-2xl p-12 flex justify-between">
        <h1 className="text-5xl">Panel de ADMIN</h1>
        <div>
          <button
            onClick={openAddModal}
            className="rounded-full p-3 bg-blue-600 text-white mr-3"
          >
            Agregar producto
          </button>
          <button
            onClick={handleLogout}
            className="rounded-full p-3 bg-red-600 text-white"
          >
            Salir
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
