import { ButtonProps } from "./types";
import * as S from "./Button.styled";

export default function Button({ children, onClick, testid }: ButtonProps) {
  return (
    <S.Button data-testid={testid} onClick={onClick}>
      {children}
    </S.Button>
  );
}
