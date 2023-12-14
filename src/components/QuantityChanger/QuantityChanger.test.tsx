import { render, screen } from "@testing-library/react";
import QuantityChanger from "./QuantityChanger";

export const product = {
  id: 1,
  name: "Whispers of Eternity",
  price: 20.0,
  category: "fiction",
  image: "https://source.unsplash.com/random/800x600",
  quantity: 1,
};

describe("Quantity Changer", () => {
  it("renders the quantity changer", async () => {
    render(<QuantityChanger product={product} />);

    expect(await screen.findByLabelText(/QuantityChanger/i)).toBeVisible();
  });

  it("has a value on the input", async () => {
    render(<QuantityChanger product={product} />);

    expect(await screen.findByDisplayValue("1")).toBeVisible();
  });
});
