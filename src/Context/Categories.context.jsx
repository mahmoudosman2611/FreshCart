import { Children, createContext, useEffect, useState } from "react";
import { getAllCategories } from "../Services/Categories-service";

export const CategoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  async function fetchCategories() {
    try {
      setIsLoading(true);
      const response = await getAllCategories();

      if (response.success) {
        setCategories(response.data.data);
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
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ isLoading, categories, isError, error }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
