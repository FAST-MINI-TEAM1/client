import styled, { css } from "styled-components";

// Interface
interface IInputProps {
  [props: string]: any;
}

function Input({ ...props }: IInputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input<{ auth?: boolean }>`
  width: 100%;
  font-size: 1rem;
  border: none;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.inputColor.authColor};
  outline: none;
  ${(props) =>
    props.auth &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.inputColor.authColor};
    `}
`;

export default Input;
