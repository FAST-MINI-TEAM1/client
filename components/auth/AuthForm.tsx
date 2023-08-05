import Input from "@components/common/Input";
import { login } from "@lib/api/manageAPI";
import Link from "next/link";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import { MdEmail, MdLock } from "react-icons/md";

// Interface
interface IAuthFormProps {
  type: string;
}

interface ITextMap {
  [key: string]: any;
}

// Constant / Variation
const textMap: ITextMap = {
  login: "로그인",
  register: "회원가입",
};

// Component
function AuthForm({ type }: IAuthFormProps) {
  // 컴포넌트 타입에 따른 이름
  const text = textMap[type];

  // Hooks
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loginMessage, setLoginMessage] = useState("");

  // Function
  // const onLoginChange = (event: FormEvent) => {
  //   const { name, value } = event.target as HTMLInputElement;
  //   if (name === "email") {
  //     setEmail(value);
  //   } else if (name === "password") {
  //     setPassword(value);
  //   }
  // };

  // const onLogin = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (email === "" || password === "") {
  //     setLoginMessage("아이디와 비밀번호를 확인해주세요!");
  //   } else {
  //     login(email, password);
  //     console.log("로그인 성공");
  //   }
  // };

  // Render
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        {type === "login" && (
          <>
            <InputWrapper>
              <EmailIcon />
              <Input
                autoComplete="email"
                name="email"
                placeholder="이메일"
                // onChange={onLoginChange}
                // value={email}
                auth="true"
              />
            </InputWrapper>
            <InputWrapper>
              <PasswordIcon />
              <Input
                type="password"
                autoComplete="password"
                name="password"
                placeholder="패스워드"
                auth="true"
                // onChange={onLoginChange}
                // value={password}
              />
            </InputWrapper>
            {/* <span>{loginMessage}</span> */}
          </>
        )}
        {type === "register" && (
          <>
            <Input
              autoComplete="email"
              name="email"
              placeholder="example"
              auth="true"
            />
            <Input
              autoComplete="name"
              name="name"
              placeholder="이름"
              auth="true"
            />
            <Input
              type="password"
              autoComplete="password"
              name="password"
              placeholder="패스워드"
              auth="true"
            />
            <Input
              type="password"
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="패스워드 확인"
              auth="true"
            />
            <Input
              autoComplete="rank"
              name="rank"
              placeholder="직급"
              auth="true"
            />
          </>
        )}
        <ButtonBlock>
          <StyledButton>{text}</StyledButton>
        </ButtonBlock>
      </form>
      <Footer>
        {type === "login" ? (
          <Link href="/register">회원가입</Link>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

// Style
const AuthFormBlock = styled.div`
  padding: 0 40px;
  h3 {
    margin: 0;
    color: #707070;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    margin-bottom: 40px;
  }
`;

// const StyledInput = styled.input`
//   font-size: 1rem;
//   border: none;
//   border-bottom: 1px solid #666;
//   padding-bottom: 0.5rem;
//   outline: none;
//   width: 100%;
//   &:focus {
//     border-bottom: 2px solid #000;
//   }
//   & + & {
//     margin-top: 2rem;
//   }
// `;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  input {
    flex: 1;
  }
  & + & {
    margin-top: 2rem;
  }
`;

const EmailIcon = styled(MdEmail)`
  font-size: 24px;
`;

const PasswordIcon = styled(MdLock)`
  font-size: 24px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  margin-top: 2rem;
  width: 180px;
  height: 30px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #bbb;
    text-decoration: underline;
    &:hover {
      color: #707070;
    }
  }
`;

export default AuthForm;
