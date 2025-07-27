import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../Services/Product-service";

export const productsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts();
      if (response.success) {
        setIsLoading(false);
        setProducts(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <productsContext.Provider value={{ isLoading, products, isError, error }}>
      {children}
    </productsContext.Provider>
  );
}
