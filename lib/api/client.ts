import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://54.79.60.180:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const client = axios.create(axiosConfig);

export default client;
