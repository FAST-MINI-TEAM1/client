import styled, { css } from "styled-components";

interface IButtonProps {
  [props: string]: any;
}

function Button({ ...props }: IButtonProps) {
  return <StyledButton {...props}>버튼</StyledButton>;
}

const StyledButton = styled.button<{
  empButton?: boolean;
  managerButton?: boolean;
  acceptButton?: boolean;
  denyButton?: boolean;
}>`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.buttonTextColor};
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.bgColor};
  &:hover {
    background: ${(props) => props.theme.hoverColor};
  }

  ${(props) =>
    props.empButton &&
    css`
      background: ${(props) => props.theme.buttonColor.empButton};
      border-radius: 30%;
    `}
  ${(props) =>
    props.managerButton &&
    css`
      background: ${(props) => props.theme.buttonColor.managerButton};
      border-radius: 30%;
    `}
  ${(props) =>
    props.acceptButton &&
    css`
      background: ${(props) => props.theme.buttonColor.acceptButton};
    `}
  ${(props) =>
    props.denyButton &&
    css`
      background: ${(props) => props.theme.buttonColor.denyButton};
    `}
`;

export default Button;
