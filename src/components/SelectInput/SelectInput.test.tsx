import { render, screen } from "@testing-library/react";
import SelectInput from "./SelectInput";

const FilterOptions = [
  {
    name: "books",
  },
  {
    name: "food",
  },
  {
    name: "games",
  },
];

describe("Select Input", () => {
  it("renders the select input component", async () => {
    render(
      <SelectInput
        onSelect={() => {}}
        options={FilterOptions}
        label="Categories"
      />,
    );

    expect(await screen.findByLabelText("Categories")).toBeVisible();
    expect(await screen.findAllByRole("option")).toHaveLength(4);
  });

  it("renders all the options", async () => {
    render(
      <SelectInput
        onSelect={() => {}}
        options={FilterOptions}
        label="Categories"
      />,
    );

    expect(await screen.findByRole("option", { name: /Books/i })).toBeVisible();
    expect(await screen.findByRole("option", { name: /Food/i })).toBeVisible();
    expect(await screen.findByRole("option", { name: /Games/i })).toBeVisible();
  });
});
