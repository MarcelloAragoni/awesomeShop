import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Quantity Changer", () => {
  it("renders the pagination component", async () => {
    const mockClickDown = vi.fn();
    const mockClickUp = vi.fn();
    render(
      <Pagination
        onPageUp={mockClickUp}
        onPageDown={mockClickDown}
        value={0}
      />,
    );

    expect(await screen.findByLabelText(/Pagination/i)).toBeVisible();
    expect(await screen.findByText(/0/i)).toBeVisible();
    expect(await screen.findAllByRole("button")).toBeVisible;
  });

  it("Calls back a function on click", async () => {
    const mockClickDown = vi.fn();
    const mockClickUp = vi.fn();
    render(
      <Pagination
        onPageUp={mockClickUp}
        onPageDown={mockClickDown}
        value={0}
      />,
    );

    await userEvent.click(await screen.findByText("-"));
    expect(mockClickDown).toBeCalled();
    await userEvent.click(await screen.findByText("+"));
    expect(mockClickUp).toBeCalled();
  });
});
