import React, { useState, useEffect } from "react";
import { Slider, Box, Typography } from "@mui/material";

export function Filters({ recipes, onFilterChange }) {
  const [calories, setCalories] = useState([0, 1000]); // Zakres kalorii
  const [proteins, setProteins] = useState([0, 100]);  // Zakres białek

  const handleCaloriesChange = (event, newValue) => {
    setCalories(newValue);
  };

  const handleProteinsChange = (event, newValue) => {
    setProteins(newValue);
  };

  // Filtrowanie przepisów na podstawie kalorii i białek
  useEffect(() => {
    const filteredRecipes = recipes.filter((recipe) => {
      const caloriesValue = Math.round(recipe.recipe.calories);
      const proteinsValue = recipe.recipe.totalNutrients?.PROCNT?.quantity || 0;

      return (
        caloriesValue >= calories[0] &&
        caloriesValue <= calories[1] &&
        proteinsValue >= proteins[0] &&
        proteinsValue <= proteins[1]
      );
    });

    // Zwracamy przefiltrowane przepisy do komponentu nadrzędnego
    onFilterChange(filteredRecipes);
  }, [calories, proteins, recipes, onFilterChange]); // Zależy od zmian w kaloriach, białkach i przepisach

  return (
    <Box
      sx={{
        display: "flex",               // Flexbox do układu poziomego
        justifyContent: "center",       // Wyrównanie do środka
        gap: 3,                         // Odstęp między filtrami
        marginTop: 2,                   // Margines nad filtrami
      }}
    >
      {/* Filtr dla kalorii */}
      <Box sx={{ width: "30%" }}>  {/* Zmniejszamy szerokość do 30% */}
        <Typography gutterBottom>Zakres kalorii: {calories[0]} - {calories[1]}</Typography>
        <Slider
          value={calories}
          onChange={handleCaloriesChange}
          valueLabelDisplay="auto"
          min={0}
          max={2000}
          step={10}
        />
      </Box>

      {/* Filtr dla białka */}
      <Box sx={{ width: "30%" }}>  {/* Zmniejszamy szerokość do 30% */}
        <Typography gutterBottom>Zakres białka: {proteins[0]} - {proteins[1]}</Typography>
        <Slider
          value={proteins}
          onChange={handleProteinsChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          step={1}
        />
      </Box>
    </Box>
  );
}

export default Filters;
