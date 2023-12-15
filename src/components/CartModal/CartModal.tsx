import CartProducts from "../CartProducts/CartProducts";
import * as S from "./CartModal.styled";

type Props = {
  onClose?: () => void;
};

export default function CartModal({ onClose }: Props) {
  return (
    <S.ModalBox role="dialog">
      <S.ModalContent>
        <CartProducts />
      </S.ModalContent>

      <button className="CloseButton" onClick={onClose}>
        Close
      </button>
      <S.ModalLayer tabIndex={-1} aria-hidden="true"></S.ModalLayer>
    </S.ModalBox>
  );
}
