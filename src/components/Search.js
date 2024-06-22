import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function SearchBar({ setRecipes }) {
  const [query, setQuery] = useState("");

  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=91b52f1a&app_key=c27d69ab01451afaa002790887322087`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ marginTop: '-30vh' }} 
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ marginBottom: 2, textAlign: 'center' }}
      >
        Witaj na stronie z wyszukiwaniem potraw!
        <p>Smacznego!</p>
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={fetchRecipes}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={query}
        sx={{
          width: "50%", 
          backgroundColor: "#f0f0f0", 
        }}
      />
    </Box>
  );
}
