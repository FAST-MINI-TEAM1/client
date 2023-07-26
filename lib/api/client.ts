import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

const client = axios.create(axiosConfig);

export default client;
