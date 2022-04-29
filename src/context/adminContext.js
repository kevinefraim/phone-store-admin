import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const getProducts = async () => {
    const { data } = await axios.get(`${url}/phones`);

    setProducts(data.phones);
  };

  const getBrands = async () => {
    const { data } = await axios.get(`${url}/brands`);

    setBrands(data.brands);
  };

  const onAddModal = () => {
    setIsOpen(true);
  };
  const onEditModal = (item) => {
    setIsOpen(true);
    setActiveItem(item);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  useEffect(() => {
    getProducts();
    getBrands();
  }, []);
  return (
    <AdminContext.Provider
      value={{
        products,
        setProducts,
        brands,
        url,
        isOpen,
        setIsOpen,
        closeModal,
        onAddModal,
        onEditModal,
        activeItem,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
