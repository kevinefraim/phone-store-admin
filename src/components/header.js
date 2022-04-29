import React from "react";
import ModalAdd from "./Modal-add";

const Header = ({ openAddModal, closeAddModal, isOpen, setIsOpen }) => {
  return (
    <header>
      <div className="container-2xl p-12 flex justify-around">
        <h1 className="text-5xl">Panel de ADMIN</h1>
        <button
          onClick={openAddModal}
          className="rounded-full p-3 bg-blue-600 text-white"
        >
          Agregar producto
        </button>
        <ModalAdd
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeAddModal={closeAddModal}
        />
      </div>
      <hr />
    </header>
  );
};

export default Header;
