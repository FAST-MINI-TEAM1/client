import { userClient } from "./client";

// 요청 관리 - 결재 처리
interface IRequestBody {
  id: unknown;
  status: string;
}
export const postUpdateOrder = ({ id, status }: IRequestBody) => {
  const res = userClient.post(`/api/admin/order/update`, { id, status });
  return res;
};

// 요청 관리 - 결재 대기 조회
export const getPendingOrders = () => {
  const res = userClient.get(`/api/admin/order/list/status/wait`);
  return res;
};

// 요청관리 - 결재 완료 조회
export const getCompletedOrders = () => {
  const res = userClient.get(`/api/admin/order/list/status/complete`);
  return res;
};

// 월별 사용 대장 - 당직 조회
export const getMonthlyDuty = (year: number) => {
  const res = userClient.get(`/api/admin/order/list/monthly/duty?year=${year}`);
  return res;
};

// 월별 사용 대장 - 연차 조회
export const getMonthlyAnnual = (year: number) => {
  const res = userClient.get(
    `/api/admin/order/list/monthly/annual?year=${year}`,
  );
  return res;
};

// 사원조회 - 사원명 검색
export const getUserName = (name: string) => {
  const res = userClient.get(`/api/admin/user/search?name=${name}`);
  return res;
};

// 사원조회 - 사원번호 검색
export const getUserNumber = (empno: number) => {
  const res = userClient.get(`/api/admin/user/search?empno=${empno}`);
  return res;
};

// 사원조회 - 연차/당직 내역
export const getOrders = (user: number, page: number, size: number) => {
  const res = userClient.get(
    `/api/admin/order/list?user=${user}&page=${page}&size=${size}`,
  );
  return res;
};
