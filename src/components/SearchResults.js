import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const SearchResults = ({ filteredRecipes }) => {
  return (
    <Grid container spacing={2} padding={{ xs: 1, md: 3, lg: 5 }}>
      {filteredRecipes.length > 0 ? (
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
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ margin: "20px auto" }}>
          Brak przepisów spełniających wybrane filtry
        </Typography>
      )}
    </Grid>
  );
};
