import Product from "../Product/Product";

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
    <div aria-label="Product Grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
