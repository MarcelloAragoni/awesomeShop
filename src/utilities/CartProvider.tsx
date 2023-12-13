import { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../components/ProductGrid/ProductGrid";

type CartProduct = Product & {
  quantity: number;
};

type CartProductsType = {
  cart: CartProduct[];
  addProduct: (product: Product) => void;
};

const CartContext = createContext({} as CartProductsType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  function addProduct(product: Product) {
    const updatedCart = cart;
    const itemIndex = updatedCart.findIndex(({ id }) => product.id === id);

    if (itemIndex === -1) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      updatedCart[itemIndex].quantity++;
    }
    updatedCart.splice(itemIndex, 1);
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartProducts(): CartProductsType {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartProducts deve ser usado dentro de um CartProvider");
  }
  return context;
}
