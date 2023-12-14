import "./App.css";
import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import CartModal from "./components/CartModal/CartModal";
import { CartProvider } from "./utilities/CartProvider";
import { getProducts } from "./services/products";
import { BASE_URL } from "./utilities/consts";

function App() {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(BASE_URL).then((products) => {
      setProducts(products);
    });
  }, []);

  async function handleGetProductList(filterParams: string) {
    const products = await getProducts(filterParams);

    setProducts(products);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <CartProvider>
      <div>
        <Button testid="cartButton" onClick={handleChange} type="button">
          Cart
        </Button>
        {modal && <CartModal onClose={handleChange} />}
        <SearchBar onSubmit={handleGetProductList} />
      </div>
      <div>
        <ProductGrid products={products} />
      </div>
    </CartProvider>
  );
}

export default App;
