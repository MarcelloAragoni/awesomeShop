// import { useState } from "react";
import { useCartProducts } from "../../utilities/CartProvider";
import Button from "../Button/Button";
import QuantityChanger from "../QuantityChanger/QuantityChanger";
import * as S from "./CartProducts.styled";

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
      <S.CartList aria-label="Cart List">
        {cart.length === 0 && (
          <p className="emptyCart">Your Cart is Empty =(</p>
        )}
        {cart.map((product) => (
          <S.CartProducts key={product.id} aria-label="Cart Product">
            <img src={product.image} alt="" />
            <S.CartProductsDetails>
              <p>{product.name}</p>
              <span>R$: {product.price}</span>
              <S.QuantityControl>
                <QuantityChanger product={product} />
                <Button
                  testid={"delete " + product.id}
                  type="button"
                  onClick={() => removeProduct(product)}
                >
                  Remove
                </Button>
              </S.QuantityControl>
            </S.CartProductsDetails>
          </S.CartProducts>
        ))}
      </S.CartList>

      <S.TotalSpan>Total: R$: {getProductCardTotal()}</S.TotalSpan>
    </>
  );
}
