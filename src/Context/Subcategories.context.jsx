import { Children, createContext, useEffect, useState } from "react";
import { getAllSubCategories } from "../Services/Categories-service";

export const SubCategoriesContext = createContext(null);

export default function SubCategoriesProvider({ children }) {
  const [subcategories, setSubCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function fetchSubCategories() {
    try {
      setIsLoading(true);
      const response = await getAllSubCategories();

      if (response.success) {
        setSubCategories(response.data.data);
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
    fetchSubCategories();
  }, []);

  return (
    <SubCategoriesContext.Provider
      value={{ isLoading, subcategories, isError, error, fetchSubCategories }}
    >
      {children}
    </SubCategoriesContext.Provider>
  );
}
