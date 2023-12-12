import { ButtonHTMLAttributes } from "react";

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
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Props & ButtonPropsVariable;
