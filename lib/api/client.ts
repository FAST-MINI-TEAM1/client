import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://3.34.110.127";

// const BASE_URL = "https://alsl1wpqkf1.shop";

export const accessToken =
  typeof window !== "undefined" && localStorage.getItem("Token");
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
    Authorization: accessToken,
  },
};

const adminConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    Authorization: accessToken,
  },
};

const client = axios.create(axiosConfig);
const userClient = axios.create(tokenConfig);
const adminClient = axios.create(adminConfig);

export { client, userClient, adminClient };
