import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button/Button";
import { useCartProducts } from "../../utilities/CartProvider";

export default function CartButton({ onChange }: { onChange: () => void }) {
  const { cart } = useCartProducts();
  return (
    <Button
      className="Cart"
      testid="cartButton"
      onClick={onChange}
      type="button"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>({cart?.length})</span>
    </Button>
  );
}
