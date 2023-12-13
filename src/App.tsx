import "./App.css";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import { Products } from "./utilities/consts";

function App() {
  async function handleGetInvoiceList(filterParams: any) {
    console.log(filterParams);
  }

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
      <ProductGrid products={Products} />
    </>
  );
}

export default App;
