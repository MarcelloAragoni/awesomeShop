import * as S from "./Input.styled";

type Props = {
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Input({ value, onChange, placeholder }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <S.InputContainer aria-label="input">
      <input
        placeholder={placeholder}
        data-testid="input"
        value={value}
        onChange={handleChange}
      />
    </S.InputContainer>
  );
}
