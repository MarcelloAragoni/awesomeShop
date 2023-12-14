import { ButtonProps } from "./types";

export default function Button({ children, onClick, testid }: ButtonProps) {
  return (
    <button data-testid={testid} onClick={onClick}>
      {children}
    </button>
  );
}
