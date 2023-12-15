import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { formatQueryParams } from "../../utilities/helper.ts";
import Input from "../Input/Input";
import Button from "../Button/Button.tsx";
import SelectInput from "../SelectInput/SelectInput.tsx";
import {
  CategoriesFilterOptions,
  PriceFilterOptions,
} from "../../utilities/consts.ts";
import * as S from "./SearchBar.styled.ts";

type Props = {
  onSubmit: (urlParams: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const filterParams = [
      { name: "name_like", value: searchValue },
      { name: "category", value: categoryValue },
      { name: "price", value: priceValue },
    ];

    const urlParams = formatQueryParams(filterParams);

    onSubmit(urlParams);
  }

  function handleCategorySelect(category: string) {
    setCategoryValue(category);

    const filterParams = [
      { name: "name_like", value: searchValue },
      { name: "category", value: category },
      { name: "price", value: priceValue },
    ];

    const urlParams = formatQueryParams(filterParams);
    onSubmit(urlParams);
  }

  function handlePriceSelect(price: string) {
    setPriceValue(price);

    const filterParams = [
      { name: "name_like", value: searchValue },
      { name: "category", value: categoryValue },
      { name: "price", value: price },
    ];

    const urlParams = formatQueryParams(filterParams);
    onSubmit(urlParams);
  }

  return (
    <S.SearchBarContainer aria-label="SearchBar">
      <S.SearchBar onSubmit={handleSubmit}>
        <Input
          placeholder="Search"
          onChange={setSearchValue}
          value={searchValue}
        />
        <SelectInput
          onSelect={handleCategorySelect}
          options={CategoriesFilterOptions}
          label="Category"
        />
        <SelectInput
          onSelect={handlePriceSelect}
          options={PriceFilterOptions}
          label="Price Range"
        />
        <Button className="searchButton" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </S.SearchBar>
    </S.SearchBarContainer>
  );
}
