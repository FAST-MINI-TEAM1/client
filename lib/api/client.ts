import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://54.79.60.180:8080";
const accessToken =
  typeof window !== "undefined" && localStorage.getItem("token");
const refreshToken =
  typeof window !== "undefined" && localStorage.getItem("refreshToken");
console.log(accessToken);
const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
};

const tokenConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    "Authorization-refresh": `Bearer ${refreshToken}`,
  },
};

const client = axios.create(axiosConfig);
const userClient = axios.create(tokenConfig);

export { client, userClient };
