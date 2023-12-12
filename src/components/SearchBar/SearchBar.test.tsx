import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

describe("Search Bar", () => {
  it("renders the searchBar", async () => {
    const mockFormSubmit = vi.fn();
    render(<SearchBar onSubmit={mockFormSubmit}></SearchBar>);

    expect(await screen.findByLabelText(/SearchBar/i)).toBeVisible();
  });

  it("changes the URLParams", async () => {
    const mockFormSubmit = vi.fn();
    render(<SearchBar onSubmit={mockFormSubmit}></SearchBar>);

    await userEvent.click(
      await screen.findByRole("button", { name: /Search/i }),
    );

    expect(mockFormSubmit).toBeCalled();
  });
});
