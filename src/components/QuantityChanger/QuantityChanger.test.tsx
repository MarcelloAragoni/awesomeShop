import { render, screen } from "@testing-library/react";
import QuantityChanger from "./QuantityChanger";
import userEvent from "@testing-library/user-event";

describe("Quantity Changer", () => {
  it("renders the quantity changer", async () => {
    render(<QuantityChanger />);

    expect(await screen.findByLabelText(/QuantityChanger/i)).toBeVisible();
  });

  it("changes the input value", async () => {
    render(<QuantityChanger />);

    expect(await screen.findByDisplayValue("0")).toBeVisible();
    await userEvent.click(await screen.findByRole("button", { name: "+" }));
    expect(await screen.findByDisplayValue("1")).toBeVisible();
    await userEvent.click(await screen.findByRole("button", { name: "-" }));
    expect(await screen.findByDisplayValue("0")).toBeVisible();
  });
});
