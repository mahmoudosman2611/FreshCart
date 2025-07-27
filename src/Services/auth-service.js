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
export async function sendDataToForgetPassword(email) {
  const options = {
    method: "POST",
    url: "/auth/forgotPasswords",
    data: {
      email,
    },
  };

  const response = await apiClient.request(options);
  return response;
}
export async function sendDataToVerfiyCode(code) {
  const options = {
    method: "POST",
    url: "/auth/verifyResetCode",
    data: {
      resetCode: code, 
    },
  };

  const response = await apiClient.request(options);
  return response;
}



export async function sendDataToResetPassword(values) {
  const options = {
    method: "PUT",
    url: "/auth/resetPassword",
    data: {

      email: values.email,
      newPassword: values.password,
    },
  };

  const response = await apiClient.request(options);
  return response;
}



export async function resendResetCode(email) {
  const options = {
    method: "POST",
    url: "/auth/forgotPasswords",
    data: { email },
  };

  const response = await apiClient.request(options);
  return response;
}



