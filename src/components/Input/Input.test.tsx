import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Filter", () => {
  it("Renders the Input", async () => {
    render(<Input value={"test 1"} onChange={() => {}} />);

    expect(await screen.findByLabelText(/Input/i)).toBeVisible();
    expect(await screen.findByDisplayValue("test 1")).toBeVisible();
  });

  //   it("calls back a function on change", async () => {
  //     render(<Input value={"test 1"} onChange={() => {}} />);
  //   });
});
