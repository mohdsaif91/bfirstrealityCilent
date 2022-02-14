import Axios from "axios";

// export const baseUrl = `http://localhost:5000/api/v1`;
export const baseUrl = "https://futurehomes.herokuapp.com";

// AUTH

export const API = {
  auth: `${baseUrl}/auth`,
};

export const loginAPI = (data) => Axios.post(`${baseUrl}/login`, data);
// export const signUpAPI = (data) => Axios.post(`${baseUrl}/signUp`, data);
