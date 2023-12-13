import { render, screen } from "@testing-library/react";
import Product from "./Product";

const Products = {
  id: 1,
  name: "Whispers of Eternity",
  price: 20.0,
  category: "fiction",
  image: "https://source.unsplash.com/random/800x600",
};

describe("Product", () => {
  it("renders the product card", async () => {
    render(<Product product={Products}></Product>);

    expect(await screen.findByLabelText(/Product/i)).toBeVisible();
  });
});
