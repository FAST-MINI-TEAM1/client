import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

function Header() {
  const router = useRouter();
  return (
    <HeaderBlock>
      <HeaderContent>
        <LogoContainer>
          <Link href="/">
            <Logo>LOGO</Logo>
          </Link>
          <UserWelcome>
            <span>홍길동</span>
            <span>님, 반갑습니다!</span>
          </UserWelcome>
        </LogoContainer>
        <Nav>
          <ul>
            <li>
              <Link href="/employee">
                <a className={router.pathname === "/employee" ? "active" : ""}>
                  전자결재
                </a>
              </Link>
            </li>
            <li>
              <Link href="/employee/history">
                <a
                  className={
                    router.pathname === "/employee/history" ? "active" : ""
                  }
                >
                  전자결재내역
                </a>
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.headerColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  width: 1320px;
  height: inherit;
  /* background: coral; */
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const UserWelcome = styled.div`
  span {
    &:first-child {
      color: #00f;
      font-weight: 600;
    }
  }
`;

const Logo = styled.a`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    li {
      a {
        color: ${(props) => props.theme.inactiveColor};
        &.active {
          font-weight: 700;
          color: ${(props) => props.theme.activeColor};
        }
      }
    }
  }
`;

export default Header;
