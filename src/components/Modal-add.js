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
    name: activeItem?.name ?? "",
    price: activeItem?.price ?? "",
    description: activeItem?.description ?? "",
    stock: activeItem?.stock ?? "",
    image: activeItem?.image ?? "",
    brand: activeItem?.brand.id.toString() ?? "",
  };
  const [newPhone, setNewPhone] = useState(initialState);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setNewPhone(initialState);
  }, [activeItem]);
  const { name, price, description, stock } = newPhone;

  const handleChange = ({ target }) => {
    setNewPhone({
      ...newPhone,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setNewPhone(initialState);
  };
  const persona = {
    edad: 10,
    nombre: "kevin",
  };

  const addProduct = async () => {
    const formData = new FormData();
    Object.keys(newPhone).map((phone) => {
      formData.append(phone, newPhone[phone]);
    });
    formData.append("image", image);
    try {
      const res = await axios.post(`${url}/phones/create`, formData, {
        headers: {
          "x-token": localStorage.getItem("token"),
          "content-type": "multipart/form-data",
        },
      });

      setProducts([...products, res.data.newPhone]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async () => {
    try {
      const res = await axios.put(
        `${url}/phones/update/${activeItem?.id}`,
        newPhone,
        {
          headers: { "x-token": localStorage.getItem("token") },
        }
      );
      setProducts(
        products.map((product) =>
          product.id === activeItem?.id
            ? { ...product, ...res.data.newUpdatedPhone }
            : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  //submit form validating if it is updating or creating
  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeItem) {
      updateProduct();
    } else {
      addProduct();
    }
    closeAddModal();
    resetForm();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeAddModal}
      style={customStyles}
      contentLabel="Add Modal"
    >
      <h5 className="mb-4">{activeItem ? "Edita" : "Agrega un producto"}</h5>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-2 flex flex-col">
          <label className="mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            className="bg-gray-200 rounded p-1"
            placeholder="Escribe el nombre"
            name="name"
            type={"text"}
            value={name}
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
            type="file"
            onChange={({ target }) => setImage(target.files[0])}
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
