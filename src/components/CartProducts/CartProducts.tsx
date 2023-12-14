// import { useState } from "react";
import { useCartProducts } from "../../utilities/CartProvider";
import Button from "../Button/Button";
import QuantityChanger from "../QuantityChanger/QuantityChanger";

export default function CartProducts() {
  const { cart, removeProduct } = useCartProducts();
  // const [quantity, setQuantity] = useState(1);

  return (
    <ul aria-label="Cart List">
      {cart.map((product) => (
        <li key={product.id} aria-label="Cart Product">
          <img src={product.image} alt="" />
          <p>{product.name}</p>
          <span>{product.price}</span>
          <QuantityChanger product={product} />
          <Button type="button" onClick={() => removeProduct(product)}>
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}
