import { Products } from "../../utilities/consts";
import CartProducts from "../CartProducts/CartProducts";

type Props = {
  onClose?: () => void;
};

export default function CartModal({ onClose }: Props) {
  return (
    <div role="dialog">
      <h1>Cart</h1>

      <div>
        <CartProducts products={Products}></CartProducts>
      </div>

      <button onClick={onClose}>Close</button>
    </div>
  );
}
