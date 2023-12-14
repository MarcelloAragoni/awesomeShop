import { render, screen } from "@testing-library/react";
import App from "./App";
import { CartProvider } from "./utilities/CartProvider";
import userEvent from "@testing-library/user-event";

export const products = [
  {
    id: 2,
    name: "Chronicles of the Silver Serpent",
    price: 45.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
    quantity: 1,
  },
  {
    id: 3,
    name: "The Enigma of Nebula's Veil",
    price: 32.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
    quantity: 1,
  },
  {
    id: 4,
    name: "Echoes in the Shadows",
    price: 99.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
    quantity: 1,
  },
];

describe("App", () => {
  it("Add a new product", async () => {
    localStorage.setItem("cart", JSON.stringify(products));

    render(
      <CartProvider>
        <App></App>
      </CartProvider>,
    );

    await userEvent.click(await screen.findByTestId("new product 1"));
    await userEvent.click(await screen.findByTestId("cartButton"));
    expect(await screen.findAllByRole("listitem")).toHaveLength(4);
  });
});
