import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";

function AdminHeader() {
  const router = useRouter();
  const onClick = useCallback(() => {
    localStorage.removeItem("Token");
    router.push("/admin/login");
  }, [router]);
  return (
    <HeaderBlock>
      <HeaderContent>
        <LogoContainer>
          <Link href="/">
            <Logo>LOGO</Logo>
          </Link>
          <UserWelcome>
            <span>관리자</span>
            <span>님, 반갑습니다!</span>
          </UserWelcome>
          <button onClick={onClick}>로그아웃</button>
        </LogoContainer>
        <Nav>
          <ul>
            <li>
              <Link href="/admin">
                <a className={router.pathname === "/admin" ? "active" : ""}>
                  요청관리
                </a>
              </Link>
            </li>
            <li>
              <span>사용대장</span>
              <SubMenu>
                <Link href="/admin/daily">
                  <a>일별사용대장</a>
                </Link>
                <Link href="/admin/monthly">
                  <a>월별사용대장</a>
                </Link>
              </SubMenu>
            </li>
            <li>
              <Link href="/admin/search">
                <a
                  className={
                    router.pathname === "/admin/search" ? "active" : ""
                  }
                >
                  사원조회
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
      background: coral;
      position: relative;
      span {
        cursor: pointer;
        color: ${(props) => props.theme.inactiveColor};
        &.active {
          font-weight: 700;
          color: ${(props) => props.theme.activeColor};
        }
      }
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

const SubMenu = styled.div`
  &.hoverActive {
    opacity: 1;
  }
  width: 250px;
  background: #ccc;
  position: absolute;
  left: -100px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 8px;
  /* opacity: 0; */
  z-index: 99999;
  a {
    text-align: center;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #000;
    }
  }
`;

export default AdminHeader;
