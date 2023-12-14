// import { useState } from "react";
import { useCartProducts } from "../../utilities/CartProvider";
import Button from "../Button/Button";
import QuantityChanger from "../QuantityChanger/QuantityChanger";

export default function CartProducts() {
  const { cart, removeProduct } = useCartProducts();

  function getProductCardTotal() {
    const total = cart.reduce((total, product) => {
      return product.price * product.quantity + total;
    }, 0);

    return total;
  }

  return (
    <>
      <ul aria-label="Cart List">
        {cart.map((product) => (
          <li key={product.id} aria-label="Cart Product">
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <span>{product.price}</span>
            <QuantityChanger product={product} />
            <Button
              testid={"delete " + product.id}
              type="button"
              onClick={() => removeProduct(product)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      <span>Total: {getProductCardTotal()}</span>
    </>
  );
}
