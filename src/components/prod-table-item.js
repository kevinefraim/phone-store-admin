import React from "react";

const ProdTableItem = ({
  id,
  name,
  description,
  brand,
  image,
  stock,
  price,
}) => {
  console.log(name);
  return (
    <>
      <h1>{name}</h1>
      <td className="px-6">{name}</td>
      <td className="px-6">{name}</td>
    </>
  );
};

export default ProdTableItem;
