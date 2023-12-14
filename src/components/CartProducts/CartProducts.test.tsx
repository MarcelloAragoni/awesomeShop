import { render, screen } from "@testing-library/react";
import CartProducts from "./CartProducts";
import { CartProvider } from "../../utilities/CartProvider";
import userEvent from "@testing-library/user-event";

const products = [
  {
    id: 1,
    name: "Whispers of Eternity",
    price: 20.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
    quantity: 2,
  },
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

describe("Cart Products", () => {
  it("renders the product in the cart", async () => {
    localStorage.setItem("cart", JSON.stringify(products));

    render(
      <CartProvider>
        <CartProducts />
      </CartProvider>,
    );

    expect(await screen.findByLabelText(/Cart List/i)).toBeVisible();
    expect(await screen.findAllByLabelText("Cart Product")).toHaveLength(4);
  });

  it("Changes the quantity", async () => {
    localStorage.setItem("cart", JSON.stringify(products));

    render(
      <CartProvider>
        <CartProducts />
      </CartProvider>,
    );

    await userEvent.click(await screen.findByTestId("Add 1"));
    expect(await screen.findByDisplayValue("3")).toBeVisible();
    await userEvent.click(await screen.findByTestId("remove 1"));
    expect(await screen.findByDisplayValue("2")).toBeVisible();
  });

  it("Deletes the product", async () => {
    localStorage.setItem("cart", JSON.stringify(products));

    render(
      <CartProvider>
        <CartProducts />
      </CartProvider>,
    );

    expect(await screen.findAllByRole("listitem")).toHaveLength(4);
    await userEvent.click(await screen.findByTestId("delete 1"));
    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
  });
});
