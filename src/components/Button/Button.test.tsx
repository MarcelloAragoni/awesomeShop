import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("Renders the component", async () => {
    const onClickMock = vi.fn();
    render(<Button onAdd={onClickMock}>Add</Button>);

    expect(await screen.findByRole("button", { name: /add/i })).toBeVisible();
  });

  it("Calls Back a function", async () => {
    const onClickMock = vi.fn();
    render(<Button onAdd={onClickMock}>Add</Button>);

    await userEvent.click(await screen.findByRole("button", { name: /add/i }));
    expect(onClickMock).toBeCalled();
  });
});
