import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

// Component
function AdminAuthForm() {
  // Render
  return (
    <AuthFormBlock>
      <h3>관리자 로그인</h3>
      <form>
        <StyledInput autoComplete="email" name="email" placeholder="이메일" />
        <StyledInput
          type="password"
          autoComplete="password"
          name="password"
          placeholder="패스워드"
        />
        <ButtonBlock>
          <StyledButton>로그인</StyledButton>
        </ButtonBlock>
      </form>
    </AuthFormBlock>
  );
}

// Style
const AuthFormBlock = styled.div`
  padding: 0 40px;
  h3 {
    margin: 0;
    color: #fff;
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
  border-bottom: 2px solid #aaa;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  background: transparent;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    border-bottom: 2px solid #fff;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
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
  background: #707070;
  color: #fff;
`;

export default AdminAuthForm;
