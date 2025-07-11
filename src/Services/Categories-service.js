import { apiClient } from "../Utils/ApiClient";

export async function getAllCategories() {
  const options = {
    method: "GET",
    url: "/categories",
  };

  const response = await apiClient.request(options);

  return response;
}
