import Link from "next/link";
import styled from "styled-components";

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

  // render
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        {type === "login" && (
          <>
            <StyledInput
              autoComplete="email"
              name="email"
              placeholder="이메일"
            />
            <StyledInput
              type="password"
              autoComplete="password"
              name="password"
              placeholder="패스워드"
            />
          </>
        )}
        {type === "register" && (
          <>
            <StyledInput
              autoComplete="email"
              name="email"
              placeholder="이메일"
            />
            <StyledInput
              autoComplete="name"
              name="name"
              placeholder="이름"
            />
            <StyledInput
              type="password"
              autoComplete="password"
              name="password"
              placeholder="패스워드"
            />
            <StyledInput autoComplete="name" name="name" placeholder="이름" />
            <StyledInput
              type="password"
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="패스워드 확인"
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

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #666;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    border-bottom: 2px solid #000;
  }
  & + & {
    margin-top: 2rem;
  }
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
