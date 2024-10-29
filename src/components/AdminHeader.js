import React from 'react';  
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";
import './AdminHeader.css';

export function AdminHeader() {
  return (
    <div className="header-container">
      <Box className="header-flex">
        <Box className="header-left" />
        
        <Box className="header-center">
          <img src={mniam} className="header-image" alt="mniam" />
        </Box>
        
        <Typography variant="h6" component="div" className="header-right">
          <b>Panel Administratora</b>
        </Typography>
      </Box>

      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Box className="app-bar-content">
            <Typography variant="h4">Przepisy</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box className="link-container">
        {["NewRecipes", "Users", "FindRecipies", "AaddRecipe", "AchangePass", "logout"].map((path, index) => (
          <Box className="link-box" key={index}>
            <Typography variant="h6" component="span">
              <a href={`/${path}`} className="link-text">
                {path === "NewRecipes" ? "Nowe przepisy" : 
                 path === "Users" ? "Użytkownicy" : 
                 path === "FindRecipies" ? "Znajdź przepis" : 
                 path === "AaddRecipe" ? "Dodaj przepis" : 
                 path === "AchangePass" ? "Zmień hasło" : 
                 "Wyloguj"}
              </a>
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default AdminHeader;