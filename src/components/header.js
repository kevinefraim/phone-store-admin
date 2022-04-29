import React, { useContext, useState } from "react";
import { AdminContext } from "../context/adminContext";
import ModalForm from "./Modal";

const Header = () => {
  const { onAddModal } = useContext(AdminContext);
  return (
    <header>
      <div className="container-2xl p-12 flex justify-around">
        <h1 className="text-5xl">Panel de ADMIN</h1>
        <button
          onClick={onAddModal}
          className="rounded-full p-3 bg-blue-600 text-white"
        >
          Agregar producto
        </button>
        <ModalForm />
      </div>
      <hr />
    </header>
  );
};

export default Header;
