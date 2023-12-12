type Props = {
  value: string;
  onChange: () => void;
};

export function Input({ value, onChange }: Props) {
  return (
    <>
      <label>
        <input id="input" value={value} onChange={onChange} />
        input
      </label>
    </>
  );
}
