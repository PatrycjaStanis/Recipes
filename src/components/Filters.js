import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import {
  Slider,
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./Filters.css"; 

export function Filters({ recipes, onFilterChange }) {
  const [calories, setCalories] = useState([0, 1000]);
  const [proteins, setProteins] = useState([0, 100]);
  const [vegetarian, setVegetarian] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCaloriesChange = (event, newValue) => setCalories(newValue);
  const handleProteinsChange = (event, newValue) => setProteins(newValue);

  const handleVegetarianChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setDialogOpen(true);
    } else {
      setVegetarian(false);
    }
  };

  const handleCancel = () => {
    setVegetarian(false);
    setDialogOpen(false);
  };

  useEffect(() => {
    const filteredRecipes = recipes.filter((recipe) => {
      const caloriesValue = Math.round(recipe.recipe.calories);
      const proteinsValue = recipe.recipe.totalNutrients?.PROCNT?.quantity || 0;
      const matchesVegetarian = !vegetarian || recipe.recipe.healthLabels?.includes("Vegetarian");

      return (
        caloriesValue >= calories[0] &&
        caloriesValue <= calories[1] &&
        proteinsValue >= proteins[0] &&
        proteinsValue <= proteins[1] &&
        matchesVegetarian
      );
    });

    onFilterChange(filteredRecipes);
  }, [calories, proteins, vegetarian, recipes, onFilterChange]);

  return (
    <Box className="filters-container">
      {/* Sekcja filtrów kalorii i białka */}
      <Box className="filters-sliders">
        <Box className="filter-calories">
          <Typography gutterBottom>
            Zakres kalorii: {calories[0]} - {calories[1]}
          </Typography>
          <Slider
            value={calories}
            onChange={handleCaloriesChange}
            valueLabelDisplay="auto"
            min={0}
            max={2000}
            step={10}
          />
        </Box>

        <Box className="filter-proteins">
          <Typography gutterBottom>
            Zakres białka: {proteins[0]} - {proteins[1]}
          </Typography>
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

      {/* Filtr wegetariański */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Typ diety</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={vegetarian} onChange={handleVegetarianChange} />}
            label="Wegetariańskie"
          />
        </FormGroup>
      </FormControl>

      {/* Dialog potwierdzający */}
      <Dialog open={dialogOpen} onClose={handleCancel}>
        <DialogTitle>Filtr wegetariański</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Czy jesteś tego pewien?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Anuluj
          </Button>
          <Button component={Link} to="/Vege" color="primary" onClick={() => setVegetarian(true)}>
            Tak
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Filters;
