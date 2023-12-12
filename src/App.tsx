import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  async function handleGetInvoiceList(filterParams: any) {
    console.log(filterParams);
  }

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
    </>
  );
}

export default App;
