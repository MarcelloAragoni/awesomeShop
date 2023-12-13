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
    <label>
      <input
        placeholder={placeholder}
        id="input"
        value={value}
        onChange={handleChange}
      />
      input
    </label>
  );
}
