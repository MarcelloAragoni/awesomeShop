import { ButtonProps } from "./types";
import * as S from "./Button.styled";

export default function Button({
  children,
  onClick,
  testid,
  disabled,
  className,
}: ButtonProps) {
  return (
    <S.Button
      className={className}
      disabled={disabled}
      data-testid={testid}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}
