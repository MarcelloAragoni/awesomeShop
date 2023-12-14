import { CartProduct, useCartProducts } from "../../utilities/CartProvider";
import Button from "../Button/Button";
import Input from "../Input/Input";

type Props = {
  product: CartProduct;
};

export default function QuantityChanger({ product }: Props) {
  const { addQuantity, removeQuantity } = useCartProducts();

  return (
    <div aria-label="QuantityChanger">
      <Button
        testid={"remove " + product.id}
        aria-label="minus"
        type="button"
        onClick={() => removeQuantity(product)}
      >
        -
      </Button>
      <Input placeholder="1" value={product.quantity} onChange={() => {}} />
      <Button
        testid={"Add " + product.id}
        aria-label="plus"
        type="button"
        onClick={() => addQuantity(product)}
      >
        +
      </Button>
    </div>
  );
}
