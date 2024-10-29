import * as React from "react";
import { useState } from "react";
import { Header } from "./components/Header.js";
import { SearchBar } from "./components/SearchBar.js";
import { SearchResults } from "./components/SearchResults.js";
import { Filters } from "./components/Filters.js"; 
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Stan do przechowywania przefiltrowanych przepisów

  // Funkcja przekazana do `Filters`, która aktualizuje przefiltrowane przepisy
  const handleFilterChange = (filteredRecipes) => {
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar setRecipes={setRecipes} />
      <Filters recipes={recipes} onFilterChange={handleFilterChange} />
      <SearchResults filteredRecipes={filteredRecipes} />
    </div>
  );
}

export default App;
