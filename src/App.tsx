import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import CartModal from "./components/CartModal/CartModal";
import { CartProvider } from "./utilities/CartProvider";
import { Data, getProducts } from "./services/products";
import { BASE_URL } from "./utilities/consts";
import Pagination from "./components/Pagination/Pagination";
import "../reset.css";
import * as S from "./App.Styled";

function App() {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState<Data>({
    products: [],
    hasPrev: false,
    hasNext: false,
  });
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getProducts(BASE_URL, "").then((products) => {
      setProducts(products);
    });
  }, []);

  async function handleGetProductList(filterParams: string) {
    const productsList = await getProducts(BASE_URL, filterParams);

    setProducts(productsList);
  }

  async function handlePageUp(value: number) {
    const newUrl = BASE_URL.replace("_page=1", `_page=${value}`);
    const productsList = await getProducts(newUrl, "");

    setProducts(productsList);
    setPageNumber(value);
  }

  async function handlePageDown(value: number) {
    const newUrl = BASE_URL.replace("_page=1", `_page=${value}`);
    const products = await getProducts(newUrl, "");

    setProducts(products);
    setPageNumber(value);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <CartProvider>
      <S.AppContainer>
        <S.NavBar>
          <Button testid="cartButton" onClick={handleChange} type="button">
            Cart
          </Button>
          {modal && <CartModal onClose={handleChange} />}
          <SearchBar onSubmit={handleGetProductList} />
        </S.NavBar>
        <S.ProductsContainer>
          <ProductGrid products={products?.products} />
          <Pagination
            hasNext={products?.hasNext}
            hasPrev={products?.hasPrev}
            onPageUp={handlePageUp}
            onPageDown={handlePageDown}
            value={pageNumber}
          />
        </S.ProductsContainer>
      </S.AppContainer>
    </CartProvider>
  );
}

export default App;
