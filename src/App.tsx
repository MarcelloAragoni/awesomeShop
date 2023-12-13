import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import { Products } from "./utilities/consts";
import CartModal from "./components/CartModal/CartModal";

function App() {
  const [modal, setModal] = useState(false);

  function handleChange() {
    setModal(!modal);
  }

  async function handleGetInvoiceList(filterParams: any) {
    console.log(filterParams);
  }

  return (
    <>
      <Button onClick={handleChange} type="button">
        Cart
      </Button>
      {modal && <CartModal onClose={handleChange} />}
      <SearchBar onSubmit={handleGetInvoiceList} />
      <ProductGrid products={Products} />
    </>
  );
}

export default App;
