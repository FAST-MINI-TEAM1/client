import { userClient } from "./client";

export const getPendingOrders = (page: number, size: number) => {
  const res = userClient.get(
    `/api/admin/order/list/status/wait?page=${page}&size=${size}`,
  );
  return res;
};

export const getCompletedOrders = (page: number, size: number) => {
  const res = userClient.get(
    `/api/admin/order/list/status/complete?page=${page}&size=${size}`,
  );
  return res;
};

export const getUserName = (name: string) => {
  const res = userClient.get(`/api/admin/user/search?name=${name}`);
  return res;
};

export const getUserNumber = (empno: string) => {
  const res = userClient.get(`/api/admin/user/search?empno=${empno}`);
  return res;
};

export const getOrders = (user: string, page: number, size: nu) => {
  const res = userClient.get(
    `/api/admin/order/list?user=${user}&page=${page}&size=${size}`,
  );
  return res;
};
