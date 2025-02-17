import styled from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonConteinerProps {
  variant: ButtonVariants;
}

const ButtonVariants = {
  primary: "pink",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonConteinerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
