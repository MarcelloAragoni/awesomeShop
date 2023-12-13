import { render, screen } from "@testing-library/react";
import ProductGrid from "./ProductGrid";

const Products = [
  {
    id: 1,
    name: "Whispers of Eternity",
    price: 20.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 2,
    name: "Chronicles of the Silver Serpent",
    price: 45.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 3,
    name: "The Enigma of Nebula's Veil",
    price: 32.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 4,
    name: "Echoes in the Shadows",
    price: 99.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
];

describe("Product Grid", () => {
  it("renders the product Grid", async () => {
    render(<ProductGrid products={Products} />);

    expect(await screen.findByLabelText(/Product Grid/i)).toBeVisible();
    expect(await screen.findAllByLabelText("Product")).toHaveLength(4);
  });
});
