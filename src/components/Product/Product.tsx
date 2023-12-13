import Button from "../Button/Button";

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
  function handleAddButton(product: Product) {
    const addCartProduct = product;

    console.log(addCartProduct);
  }

  return (
    <>
      <div aria-label="Product" id={"Product " + product.id}>
        <p>{product.category}</p>
        <img src={product.image} alt="" />
        <div>
          <p>{product.name}</p>
          <span>{product.price}</span>
          <Button type="button" onClick={() => handleAddButton(product)}>
            Add
          </Button>
        </div>
      </div>
    </>
  );
}
