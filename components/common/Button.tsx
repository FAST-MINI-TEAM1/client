import styled, { css } from "styled-components";

interface IButtonProps {
  [props: string]: any;
}

function Button({ ...props }: IButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button<{
  employee?: boolean;
  manager?: boolean;
  accept?: boolean;
  deny?: boolean;
}>`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.buttonTextColor};
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.borderColor};
  &:hover {
    background: ${(props) => props.theme.hoverColor};
  }

  ${(props) =>
    props.employee &&
    css`
      background: ${(props) => props.theme.buttonColor.empButton};
    `}
  ${(props) =>
    props.manager &&
    css`
      background: ${(props) => props.theme.buttonColor.managerButton};
    `}
  ${(props) =>
    props.accept &&
    css`
      background: ${(props) => props.theme.buttonColor.acceptButton};
    `}
  ${(props) =>
    props.deny &&
    css`
      background: ${(props) => props.theme.buttonColor.denyButton};
    `}
`;

export default Button;
