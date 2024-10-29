import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const SearchResults = ({ filteredRecipes = [], onFavoriteChange }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const handleFavoriteToggle = (recipe) => {
    const isFavorite = favorites.some(fav => fav.uri === recipe.uri);
    const updatedFavorites = isFavorite
      ? favorites.filter(fav => fav.uri !== recipe.uri)
      : [...favorites, recipe];
      
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    if (typeof onFavoriteChange === 'function') {
      onFavoriteChange(updatedFavorites);
    }
  };

  return (
    <Grid container spacing={2} padding={{ xs: 1, md: 3, lg: 5 }}>
      {Array.isArray(filteredRecipes) && filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image={recipe.recipe.image}
                title={recipe.recipe.label}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {recipe.recipe.label}
                </Typography>
                <ul>
                  <li>Calories: {Math.round(recipe.recipe.calories)}</li>
                  <li>Proteins: {Math.round(recipe.recipe.totalNutrients?.PROCNT?.quantity || 0)} g</li>
                </ul>
                
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton
                    onClick={() => handleFavoriteToggle(recipe.recipe)}
                    color={favorites.some(fav => fav.uri === recipe.recipe.uri) ? "primary" : "default"}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <Typography variant="body2">
                    Zapisz do ulubionych
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ margin: "20px auto" }}>
         
        </Typography>
      )}
    </Grid>
  );
};

export default SearchResults;


