import { Children, createContext, useEffect, useState } from "react";

import { getAllBrands } from "../Services/Brands-service";

export const BrandsContext = createContext(null);

export default function BrandsProvider({ children }) {
  const [brands, setBrands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function fetchAllBrands() {
    try {
      setIsLoading(true);
      const response = await getAllBrands();

      if (response.success) {


        setBrands(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllBrands();
  }, []);

  return (
    <BrandsContext.Provider value={{ isLoading, brands, isError, error }}>
      {children}
    </BrandsContext.Provider>
  );
}
