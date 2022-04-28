import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../context/adminContext";
import ProdTableItem from "./prod-table-item";

const ProdTable = () => {
  const { products } = useContext(AdminContext);
  console.log(products);
  return (
    <table className="table-auto min-w-full divide-y divide-gray-200 mt-3">
      <thead className="bg-gray-100">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Imagen
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Marca
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nombre
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Precio
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Editar
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => (
          <tr key={item.id}>{<ProdTableItem item={item} />}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProdTable;
