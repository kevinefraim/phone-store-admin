import React, { useContext } from "react";
import { AdminContext } from "../context/adminContext";
import ModalForm from "./Modal";

const ProdTableItem = ({ item, deleteItem }) => {
  const { id, name, description, image, stock, price, brand } = item;
  const { onEditModal } = useContext(AdminContext);

  return (
    <>
      <td className="px-6 py-2">
        <img src="#" alt={name} />
      </td>
      <td className="px-6 py-2">{brand.name}</td>
      <td className="px-6 py-2">{name}</td>
      <td className="px-6 py-2">${price}</td>
      <td className="px-6 py-2">
        <button
          onClick={() => onEditModal(item)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Editar
        </button>
        <ModalForm />
      </td>
      <td className="px-6 py-2">
        <button
          onClick={() => deleteItem(id)}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          X
        </button>
      </td>
    </>
  );
};

export default ProdTableItem;
