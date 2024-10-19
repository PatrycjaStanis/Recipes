import React, { useState } from 'react'; 
import AdminHeader1 from '../components/AdminHeader1.js'; 
import SearchBar from '../components/SearchBar.js';
import Filters from '../components/Filters.js';
import { SearchResults } from "../components/SearchResults.js";

function FindRecipies() {
  const [recipes, setRecipes] = useState([]); // Przechowuje wszystkie przepisy
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Przechowuje przefiltrowane przepisy

 // Funkcja przekazana do `Filters`, która aktualizuje przefiltrowane przepisy
 const handleFilterChange = (filteredRecipes) => {
  setFilteredRecipes(filteredRecipes);
};

  return (
    <div>
      <AdminHeader1 />
      <SearchBar setRecipes={setRecipes} />  {/* Otrzymywanie przepisów z SearchBar */}
      <Filters recipes={recipes} onFilterChange={handleFilterChange} />
      <SearchResults filteredRecipes={filteredRecipes} /> {/* Wyświetlenie przefiltrowanych wyników */}
    </div>

);
}

export default FindRecipies;
