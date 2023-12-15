import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Quantity Changer", () => {
  it("renders the pagination component", async () => {
    const mockClickDown = vi.fn();
    const mockClickUp = vi.fn();
    render(
      <Pagination
        hasNext={true}
        hasPrev={false}
        onPageUp={mockClickUp}
        onPageDown={mockClickDown}
        value={0}
      />,
    );

    expect(await screen.findByLabelText(/Pagination/i)).toBeVisible();
    expect(await screen.findByText(/0/i)).toBeVisible();
    expect(await screen.findAllByRole("button")).toHaveLength(2);
  });

  it("Calls back a function on click", async () => {
    const mockClickDown = vi.fn();
    const mockClickUp = vi.fn();
    render(
      <Pagination
        hasNext={true}
        hasPrev={true}
        onPageUp={mockClickUp}
        onPageDown={mockClickDown}
        value={1}
      />,
    );

    await userEvent.click(await screen.findByText("+"));
    expect(mockClickUp).toBeCalled();
    await userEvent.click(await screen.findByText("-"));
    expect(mockClickDown).toBeCalled();
  });

  it("has the button - disabled", async () => {
    const mockClickDown = vi.fn();
    const mockClickUp = vi.fn();
    render(
      <Pagination
        hasNext={false}
        hasPrev={false}
        onPageUp={mockClickUp}
        onPageDown={mockClickDown}
        value={1}
      />,
    );

    expect(await screen.findByText("-")).toBeDisabled();
    await userEvent.click(await screen.findByText("-"));
    expect(mockClickDown).not.toBeCalled();

    expect(await screen.findByText("+")).toBeDisabled();
    await userEvent.click(await screen.findByText("+"));
    expect(mockClickUp).not.toBeCalled();
  });
});
