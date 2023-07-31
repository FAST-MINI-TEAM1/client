import { Card } from "antd";
import styled from "styled-components";

interface IAuthFormProps {
  type: string;
}

interface ITextMap {
  [key: string]: any;
}

const textMap: ITextMap = {
  login: "로그인",
  register: "회원가입",
};

function AuthForm({ type }: IAuthFormProps) {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <StyledForm>
        {type === "login" && (
          <LoginForm>
            <StyledInput
              autoComplete="email"
              name="email"
              placeholder="이메일"
            />
            <StyledInput
              type="password"
              autoComplete="password"
              name="password"
              placeholder="비밀번호"
            />
          </LoginForm>
        )}
        <StyledButton>{text}</StyledButton>
      </StyledForm>
    </AuthFormBlock>
  );
}

const AuthFormBlock = styled.div`
  border-radius: 1rem;
  padding-bottom: 40px;
  border: 1px solid #333;
  h3 {
    padding-top: 30px;
    text-align: center;
    margin: 20px 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 80px;
`;

const StyledInput = styled.input`
  outline: none;
  width: 200px;
  padding: 0.5rem;
  font-size: 0.875rem;
  background: #fff;
  border: none;
  border-bottom: 1px solid #707070;
  &:focus {
    border-bottom: 2px solid #333;
  }
  &::placeholder {
    color: #707070;
  }
`;

const StyledButton = styled.button``;

export default AuthForm;
