import { useState } from "react";
import { formatQueryParams } from "../../utilities/helper.ts";
import Input from "../Input/Input";
import Button from "../Button/Button.tsx";
import SelectInput from "../SelectInput/SelectInput.tsx";
import {
  CategoriesFilterOptions,
  PriceFilterOptions,
} from "../../utilities/consts.ts";

type Props = {
  onSubmit: (urlParams: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [categoriesValue, setCategoriesValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const filterParams = [
      { name: "name", value: searchValue },
      { name: "categories", value: categoriesValue },
      { name: "price", value: priceValue },
    ];

    const urlParams = formatQueryParams(filterParams);

    onSubmit(urlParams);
  }

  return (
    <label>
      <form onSubmit={handleSubmit}>
        <Input onChange={setSearchValue} value={searchValue} />
        <SelectInput
          onSelect={setCategoriesValue}
          options={CategoriesFilterOptions}
          label="Categories"
        />
        <SelectInput
          onSelect={setPriceValue}
          options={PriceFilterOptions}
          label="Price Range"
        />
        <Button type="submit">Search</Button>
      </form>
      SearchBar
    </label>
  );
}
