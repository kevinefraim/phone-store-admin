import React, { useState } from "react";
import Header from "./components/header";
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
      <Header
        openAddModal={openAddModal}
        isOpen={isOpen}
        closeAddModal={closeAddModal}
        setIsOpen={setIsOpen}
      />
      <ProdTable onEditModal={onEditModal} activeItem={activeItem} />
    </>
  );
};

export default AdminContainer;
