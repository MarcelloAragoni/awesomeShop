import Button from "../Button/Button";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type Props = {
  products: Product[];
};

export default function CartProducts({ products }: Props) {
  function handleDelete() {
    console.log("delete");
  }

  return (
    <ul aria-label="Cart List">
      {products.map((product) => (
        <li aria-label="Cart Product">
          <img src={product.image} alt="" />
          <p>{product.name}</p>
          <span>{product.price}</span>
          <Button type="button" onClick={handleDelete}>
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}
