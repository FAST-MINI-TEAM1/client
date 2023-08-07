import { client, userClient } from "./client";
import {
  IEmployeeOrder,
  IEmployeeListRequest,
} from "@lib/interface/EmployeeInterface";

// 연차,당직 등록(POST)
export const employeeOrderApi = ({
  orderType,
  startAt,
  endAt,
  reason,
  category,
  etc,
}: IEmployeeOrder) => {
  try {
    const result = userClient.post("/api/user/order/add", {
      orderType,
      startAt,
      endAt,
      reason,
      category,
      etc,
    });
    return result;
  } catch (e) {
    console.error(e);
  }
};

// 연차,당직 삭제(POST)
export const employeeDeleteApi = ({ id }: IEmployeeOrder) => {
  try {
    const result = userClient.post("/api/user/order/add", {
      id,
    });
    return result;
  } catch (e) {
    console.error(e);
  }
};

// 전자결제 내역(GET)
export function employeeListApi() {
  try {
    const { data }: any = userClient.get("/api/user/myorder?page=0&size=5", {});
    return data.content || [];
  } catch (e) {
    console.error(e);
  }
  console.log("안나옴");
}
