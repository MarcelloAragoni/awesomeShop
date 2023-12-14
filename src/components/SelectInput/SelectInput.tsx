import { ChangeEvent } from "react";

type FilterOptions = {
  name: string;
};

type Props = {
  label: string;
  options: FilterOptions[];
  onSelect: (event: string) => void;
};

export default function SelectInput({ label, options, onSelect }: Props) {
  function handleSelectEvent(event: ChangeEvent<HTMLSelectElement>) {
    onSelect(event.target.value);
  }

  return (
    <div aria-label={label}>
      <select name="selectedCategorie" onChange={handleSelectEvent}>
        <option disabled selected>
          Select Filter
        </option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
