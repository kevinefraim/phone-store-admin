import React from "react";

const ProdTableItem = ({ item, deleteItem, onEditModal }) => {
  return (
    <>
      <td className="px-6 py-2">
        <img src="#" alt={item?.name} />
      </td>
      <td className="px-6 py-2">{item?.brand.name}</td>
      <td className="px-6 py-2">{item?.name}</td>
      <td className="px-6 py-2">${item?.price}</td>
      <td className="px-6 py-2">
        <button
          onClick={() => onEditModal(item)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Editar
        </button>
      </td>
      <td className="px-6 py-2">
        <button
          onClick={() => deleteItem(item?.id)}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          X
        </button>
      </td>
    </>
  );
};

export default ProdTableItem;
