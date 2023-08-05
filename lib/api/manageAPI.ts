import { client, userClient } from "./client";

// 로그인(POST) - 작업 중
interface ILogin {
  email: string;
  password: string;
}
export const login = async (email: string, password: string) => {
  await client.post("api/login", { email, password });
};
