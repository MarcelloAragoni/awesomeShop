import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartModal from "./CartModal";
import { CartProvider } from "../../utilities/CartProvider";

export const products = [
  {
    id: 1,
    name: "Whispers of Eternity",
    price: 20.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
    quantity: 1,
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

describe("Cart Modal", () => {
  it("renders the modal", () => {
    localStorage.setItem("cart", JSON.stringify(products));
    render(
      <CartProvider>
        <CartModal />
      </CartProvider>,
    );

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByRole("heading")).toBeVisible();
    expect(screen.getByRole("button", { name: "Close" })).toBeVisible();
  });

  it("calls a function on Click", async () => {
    localStorage.setItem("cart", JSON.stringify(products));
    const onClickMock = vi.fn();
    render(
      <CartProvider>
        <CartModal onClose={onClickMock} />
      </CartProvider>,
    );

    await userEvent.click(await screen.findByRole("button", { name: "Close" }));

    expect(onClickMock).toBeCalled();
  });
});
