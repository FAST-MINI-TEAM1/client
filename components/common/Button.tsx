import styled, { css } from "styled-components";

interface IButtonProps {
  [props: string]: any;
}

function Button({ ...props }: IButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button<{
  empButton?: boolean;
  managerButton?: boolean;
  acceptButton?: boolean;
  denyButton?: boolean;
  pendingButton?: boolean;
}>`
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.buttonTextColor};
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.bgColor};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease 0s;
  &:hover {
    background: ${(props) => props.theme.hoverColor};
  }

  ${(props) =>
    props.empButton &&
    css`
      background: ${(props) => props.theme.buttonColor.empButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.empButton};
        border-color: ${(props) => props.theme.buttonColor.empButton};
        border: 1px solid ${(props) => props.theme.buttonColor.empButton};
      }
    `}
  ${(props) =>
    props.managerButton &&
    css`
      background: ${(props) => props.theme.buttonColor.managerButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.managerButton};
        border: 1px solid ${(props) => props.theme.buttonColor.managerButton};
      }
    `}
  ${(props) =>
    props.acceptButton &&
    css`
      background: ${(props) => props.theme.buttonColor.acceptButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.acceptButton};
        border: 1px solid ${(props) => props.theme.buttonColor.acceptButton};
      }
    `}
  ${(props) =>
    props.denyButton &&
    css`
      background: ${(props) => props.theme.buttonColor.denyButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.denyButton};
        border: 1px solid ${(props) => props.theme.buttonColor.denyButton};
      }
    `}
    ${(props) =>
    props.pendingButton &&
    css`
      background: ${(props) => props.theme.buttonColor.pendingButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.pendingButton};
        border: 1px solid ${(props) => props.theme.buttonColor.pendingButton};
      }
    `}
`;

export default Button;
