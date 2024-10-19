import React, { useState } from 'react'; 
import LoggedHeader from '../components/LoggedHeader'; 
import SearchBar from '../components/SearchBar.js';
import Filters from '../components/Filters.js';
import { SearchResults } from "../components/SearchResults.js";

function LogHome() {
  const [recipes, setRecipes] = useState([]); // Przechowuje wszystkie przepisy
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Przechowuje przefiltrowane przepisy

 // Funkcja przekazana do `Filters`, która aktualizuje przefiltrowane przepisy
 const handleFilterChange = (filteredRecipes) => {
  setFilteredRecipes(filteredRecipes);
};

  return (
    <div>
      <LoggedHeader />
      <SearchBar setRecipes={setRecipes} />  {/* Otrzymywanie przepisów z SearchBar */}
      <Filters recipes={recipes} onFilterChange={handleFilterChange} />
      <SearchResults filteredRecipes={filteredRecipes} /> {/* Wyświetlenie przefiltrowanych wyników */}
    </div>

);
}

export default LogHome;
