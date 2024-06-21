import * as React from "react";
import { useState } from "react";
import { Header } from "./components/Header.js";
import { SearchBar } from "./components/Search.js";
import { RecipiesList } from "./components/Recipies.js";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  //console.log(recipes);
  return (
    <div className="App">
      <Header></Header>
      <SearchBar setRecipes={setRecipes} />
      <RecipiesList recipes={recipes} />
    </div>
  );
}

export default App;
