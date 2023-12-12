import { render, screen } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input Filter", () => {
  it("Renders the Input", async () => {
    render(<Input value={"test 1"} onChange={() => {}} />);

    expect(await screen.findByLabelText(/Input/i)).toBeVisible();
    expect(await screen.findByDisplayValue("test 1")).toBeVisible();
  });

  it("calls back a function on change", async () => {
    const onChangeMock = vi.fn();
    render(<Input value={"test 1"} onChange={onChangeMock} />);

    await userEvent.type(await screen.findByLabelText(/Input/i), "test 2");

    expect(onChangeMock).toHaveBeenCalledTimes(6);
  });
});
