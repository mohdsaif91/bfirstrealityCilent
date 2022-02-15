import Axios from "axios";

// export const baseUrl = `http://localhost:5000/api/v1`;
export const baseUrl = "https://futurehomes.herokuapp.com";

export const API = {
  auth: `${baseUrl}/api/v1/auth`,
};

export const loginAPI = (data) => Axios.post(`${baseUrl}/login`, data);
