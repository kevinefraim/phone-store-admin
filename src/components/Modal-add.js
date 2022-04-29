import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { AdminContext } from "../context/adminContext";

//MODAL SETUP
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "65%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalAdd = ({ isOpen, closeAddModal, activeItem }) => {
  const { brands, url, setProducts, products } = useContext(AdminContext);
  const initialState = {
    name: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    brand: "",
  };
  console.log(activeItem?.name);

  useEffect(() => {
    setNewPhone(initialState);
  }, [activeItem]);
  const [newPhone, setNewPhone] = useState(initialState);
  const { name, price, description, stock, image } = newPhone;

  const handleChange = ({ target }) => {
    setNewPhone({
      ...newPhone,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setNewPhone(initialState);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    newPhone.price = +newPhone.price;
    newPhone.stock = +newPhone.stock;
    newPhone.brand = +newPhone.brand;

    try {
      const res = await axios.post(`${url}/phones/create`, newPhone);

      closeAddModal();
      setProducts([...products, res.data.newPhone]);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeAddModal}
      style={customStyles}
      contentLabel="Add Modal"
    >
      <h5 className="mb-4">{activeItem ? "Edita" : "Agrega un producto"}</h5>

      <form onSubmit={addProduct} className="flex flex-col">
        <div className="mb-2 flex flex-col">
          <label className="mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            className="bg-gray-200 rounded p-1"
            placeholder="Escribe el nombre"
            name="name"
            type={"text"}
            value={activeItem ? activeItem?.name : name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label className="mb-2" htmlFor="brand">
            Elige una marca:
          </label>
          <select
            className="w-fit p-0.5"
            onChange={handleChange}
            name="brand"
            id="brand"
          >
            <option>Elige una marca</option>
            {brands?.map((item) => (
              <option key={item.id} className="w-[200px]" value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex flex-col">
          <label className="mb-2" htmlFor="description">
            Descripción:
          </label>
          <input
            className="bg-gray-200 rounded p-1"
            placeholder="Escribe la descripción"
            name="description"
            type={"text"}
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label className="mb-2" htmlFor="price">
            Precio:
          </label>
          <input
            className="bg-gray-200 rounded p-1"
            placeholder="Escribe la descripción"
            name="price"
            type="number"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label className="mb-2" htmlFor="stock">
            Stock:
          </label>

          <input
            className="bg-gray-200 rounded p-1"
            placeholder="Ingresa el stock"
            name="stock"
            type="number"
            value={stock}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label className="mb-2" htmlFor="image">
            Imagen:
          </label>
          <input
            placeholder="ingresa imagen"
            className="bg-gray-200 rounded p-1"
            name="image"
            type="text"
            value={image}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="rounded  bg-blue-500 p-1.5 text-white"
          >
            Agregar
          </button>
          <button
            className="rounded  bg-red-500 p-1.5 text-white"
            onClick={closeAddModal}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAdd;
