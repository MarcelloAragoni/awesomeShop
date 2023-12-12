import { useState } from "react";
import { formatQueryParams } from "../../utilities/helper.ts";
import Input from "../Input/Input";
import Button from "../Button/Button.tsx";

type Props = {
  onSubmit: (urlParams: URLSearchParams) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const [searchValue, setSearchValue] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const filterParams = [{ name: "name", value: searchValue }];

    const urlParams = formatQueryParams(filterParams);

    onSubmit(urlParams);
  }

  return (
    <label>
      <form onSubmit={handleSubmit}>
        <Input onChange={setSearchValue} value={searchValue} />
        <Button type="submit">Search</Button>
      </form>
      SearchBar
    </label>
  );
}
