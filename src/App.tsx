import "./App.css";
import Product from "./components/Product/Product";
import SearchBar from "./components/SearchBar/SearchBar";

const Products = {
  id: 1,
  name: "Whispers of Eternity",
  price: 20.0,
  category: "fiction",
  image: "https://source.unsplash.com/random/800x600",
};

function App() {
  async function handleGetInvoiceList(filterParams: any) {
    console.log(filterParams);
  }

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
      <Product product={Products} />
    </>
  );
}

export default App;
