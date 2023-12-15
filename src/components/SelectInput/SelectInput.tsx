import { ChangeEvent } from "react";
import * as S from "./SelectInput.styled";

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
      <S.Select name="selectedCategorie" onChange={handleSelectEvent}>
        <option disabled selected>
          Select Filter
        </option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </S.Select>
    </div>
  );
}
