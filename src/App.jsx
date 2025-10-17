import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            Find any <span className="text-gradient">Movie</span> you would like
            to watch
          </h1>
        </header>
        <Search searchValue={searchTerm} setSearchValue={setSearchTerm} />
        <p className="text-green-500 text-3xl">Hello {searchTerm}</p>
      </div>
    </main>
  );
}

export default App;
