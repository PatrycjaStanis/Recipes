import React from "react"; 
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function Favorites({ favoriteRecipes }) {
  return (
    <Grid container spacing={2} padding={{ xs: 1, md: 3, lg: 5 }}>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image={recipe.image}
                title={recipe.label}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {recipe.label}
                </Typography>
                <ul>
                  <li>Calories: {Math.round(recipe.calories)}</li>
                  <li>Proteins: {Math.round(recipe.totalNutrients?.PROCNT?.quantity || 0)} g</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ margin: "20px auto" }}>
          Brak ulubionych przepisów
        </Typography>
      )}
    </Grid>
  );
}

export default Favorites;


