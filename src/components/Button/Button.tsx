import { ButtonProps } from "./types";
import * as S from "./Button.styled";

export default function Button({
  children,
  onClick,
  testid,
  disabled,
}: ButtonProps) {
  return (
    <S.Button disabled={disabled} data-testid={testid} onClick={onClick}>
      {children}
    </S.Button>
  );
}
