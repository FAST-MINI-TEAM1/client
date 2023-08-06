import { client, userClient } from "./client";

// 로그인(POST) - 작업 중
export const login = (email: string, password: string) => {
  client.post("api/login", { email, password });
};
