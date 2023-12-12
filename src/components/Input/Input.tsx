import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export default function Input({ value, onChange }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <label>
      <input id="input" value={value} onChange={handleChange} />
      input
    </label>
  );
}
