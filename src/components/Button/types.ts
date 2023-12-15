import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSubmit = {
  type: "submit" | "reset";
  onClick?: () => void;
};

type DefaultButton = {
  type: "button";
  onClick: () => void;
};

type ButtonPropsVariable = ButtonSubmit | DefaultButton;

type Props = {
  children: ReactNode;
  testid?: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Props & ButtonPropsVariable;
