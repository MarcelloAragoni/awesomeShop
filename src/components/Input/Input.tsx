type Props = {
  value: string;
  onChange: (value: string) => void;
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
