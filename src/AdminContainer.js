import React, { useState } from "react";
import Header from "./components/header";
import ModalAdd from "./components/Modal-add";
import ProdTable from "./components/prod-table";

const AdminContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openAddModal = () => {
    setIsOpen(true);
  };

  const closeAddModal = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  const onEditModal = (item) => {
    setIsOpen(true);
    setActiveItem(item);
  };
  return (
    <>
      <Header openAddModal={openAddModal} />
      <ProdTable
        onEditModal={onEditModal}
        activeItem={activeItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeAddModal={closeAddModal}
      />
      <ModalAdd
        activeItem={activeItem}
        isOpen={isOpen}
        closeAddModal={closeAddModal}
      />
    </>
  );
};

export default AdminContainer;
