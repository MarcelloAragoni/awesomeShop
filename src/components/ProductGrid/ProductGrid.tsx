import Product from "../Product/Product";
import * as S from "./ProductGrid.styled";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <S.ProductsGrid aria-label="Product Grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </S.ProductsGrid>
  );
}
