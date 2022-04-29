import React from "react";

const ProdTableItem = ({ item }) => {
  const { id, name, description, image, stock, price, brand } = item;

  return (
    <>
      <td className="px-6 py-2">
        <img src="#" alt={name} />
      </td>
      <td className="px-6 py-2">{brand.name}</td>
      <td className="px-6 py-2">{name}</td>
      <td className="px-6 py-2">${price}</td>
      <td className="px-6 py-2">EDIT</td>
      <td className="px-6 py-2">DELETE</td>
    </>
  );
};

export default ProdTableItem;
