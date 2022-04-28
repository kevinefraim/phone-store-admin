import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  const getProducts = async () => {
    const { data } = await axios.get(`${url}/phones`);

    setProducts(data.phones);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AdminContext.Provider value={{ products }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
