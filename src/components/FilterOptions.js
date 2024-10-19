import React from "react";
import { Box, Typography, Slider } from "@mui/material";

export function FilterOptions({ calories, setCalories, proteins, setProteins, nutrition, setNutrition }) {
  // Funkcje pomocnicze do aktualizacji wartości filtrów
  const handleCaloriesChange = (event, newValue) => {
    setCalories(newValue);
  };

  const handleProteinsChange = (event, newValue) => {
    setProteins(newValue);
  };

  const handleNutritionChange = (event, newValue) => {
    setNutrition(newValue);
  };

  return (
    <Box sx={{ width: 300, margin: "auto", paddingTop: 4 }}>
      <Typography variant="h6">Filters</Typography>

      {/* Filtr kalorii */}
      <Typography gutterBottom>Calories (kcal)</Typography>
      <Slider
        value={calories}
        onChange={handleCaloriesChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
      />

      {/* Filtr białka */}
      <Typography gutterBottom>Proteins (g)</Typography>
      <Slider
        value={proteins}
        onChange={handleProteinsChange}
        valueLabelDisplay="auto"
        min={0}
        max={200}
      />

      {/* Filtr wartości odżywczej */}
      <Typography gutterBottom>Nutrition (kcal)</Typography>
      <Slider
        value={nutrition}
        onChange={handleNutritionChange}
        valueLabelDisplay="auto"
        min={0}
        max={3000}
      />
    </Box>
  );
}
