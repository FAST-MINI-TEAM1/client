import styled from "styled-components";

function Header() {
  return (
    <HeaderBlock>
      <HeaderContent></HeaderContent>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.headerColor};
`;

const HeaderContent = styled.div``;

export default Header;
