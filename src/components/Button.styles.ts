import styled from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonConteinerProps {
  variant: ButtonVariants;
}

const ButtonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonConteinerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme.primary};
`;
