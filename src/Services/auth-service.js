import { apiClient } from "../Utils/ApiClient";

export async function sendDataToSignup(values) {
  const options = {
    method: "POST",
    url: "/auth/signup",
    data: {
      name: values.name,
      email: values.email,
      password: values.password,
      rePassword: values.rePassword,
      phone: values.phone,
    },
  };

  const response = await apiClient.request(options);
  return response;
}

export async function sendDataToLogin(values) {
  const options = {
    method: "POST",
    url: "/auth/signin",
    data: values,
  };

  const response = await apiClient.request(options);
  return response;
}
