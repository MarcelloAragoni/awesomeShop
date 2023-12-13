import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartModal from "./CartModal";

describe("Modal", () => {
  it("renders the modal", () => {
    render(<CartModal />);

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByRole("heading")).toBeVisible();
    expect(screen.getByRole("button", { name: "Close" })).toBeVisible();
  });

  it("calls a function on Click", async () => {
    const onClickMock = vi.fn();
    render(<CartModal onClose={onClickMock} />);

    await userEvent.click(await screen.findByRole("button", { name: "Close" }));

    expect(onClickMock).toBeCalled();
  });
});
