import { useCartProducts } from "../../utilities/CartProvider";
import Button from "../Button/Button";
import * as S from "./Product.styled";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const cartContext = useCartProducts();

  function handleAddButton(product: Product) {
    cartContext.addProduct(product);
  }

  return (
    <>
      <S.ProductsContainer aria-label="Product" id={"Product " + product.id}>
        <img src={product.image} alt="" />
        <S.ProductsInfoContainer>
          <S.ProductsInfoCategory>{product.category}</S.ProductsInfoCategory>
          <S.ProductsInfoTitle>{product.name}</S.ProductsInfoTitle>
          <S.ProductsPriceAddContainer>
            <S.ProductsInfoPrice>R$: {product.price}</S.ProductsInfoPrice>
            <Button
              testid={"new product " + product.id}
              type="button"
              onClick={() => handleAddButton(product)}
            >
              Add
            </Button>
          </S.ProductsPriceAddContainer>
        </S.ProductsInfoContainer>
      </S.ProductsContainer>
    </>
  );
}
