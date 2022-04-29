import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();
//branch fix

const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const [brands, setBrands] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(`${url}/phones`);

    setProducts(data.phones);
  };

  const getBrands = async () => {
    const { data } = await axios.get(`${url}/brands`);

    setBrands(data.brands);
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
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
