import { client, userClient } from "./client";

// 로그인(POST)
export const login = (email: string, password: string) => {
  const result = client.post("api/login", { email, password });
  return result;
};

// 회원가입(POST)
export const register = (
  email: string,
  password: string,
  empName: string,
  position?: string,
) => {
  const result = client.post("api/register", {
    email,
    password,
    empName,
    position,
  });
  return result;
};

// 회원가입 / 이메일 중복 검사(POST)
export const validRegister = (username: string) => {
  const result = client.post(`api/register/${username}/usernameExists`);
  return result;
};

// 로그인 인증(POST)
export const validLogin = () => {
  const result = client.post("api/auth");
  return result;
};

// 로그아웃(POST)
export const logout = () => {
  const result = userClient.post("api/logout");
  return result;
};
