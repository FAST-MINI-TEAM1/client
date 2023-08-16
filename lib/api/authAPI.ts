import { client, userClient } from "./client";

// 로그인(POST)
interface ILogin {
  email: string;
  password: string;
}
export const login = async ({ email, password }: ILogin) => {
  await userClient
    .post("/api/login", { email, password }, { withCredentials: true })
    .then((res) => {
      console.log(res.data.response);
      localStorage.setItem("Token", res.data.response.accessToken);
      localStorage.setItem("empName", res.data.response.empName);
    }).catch(e => console.error(e, '로그인 실패'));
};

// 회원가입(POST)
interface IRegister {
  email: string;
  password: string;
  empName: string;
  position?: string;
}
export const register = ({ email, password, empName, position }: IRegister) => {
  const result = client.post("/api/register", {
    email,
    password,
    empName,
    position,
  });
  return result;
};

// 회원가입 / 이메일 중복 검사(POST)
export const validRegister = (username: string) => {
  const result = client.post(`/api/register/${username}/usernameExists`);
  return result;
};

// 로그인 인증(POST)
export const validLogin = () => {
  const result = client.post("/api/auth");
  return result;
};

// 로그아웃(POST)
export const logout = () => {
  const result = userClient.post("/api/logout");
  return result;
};
