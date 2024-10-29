import React from 'react'; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";
import './LoggedHeader.css'; 

export function LoggedHeader() {
  return (
    <div className="logged-header-container">
      <Box className="logged-header-top">
        <Box className="logged-header-left" />
        
        <Box className="logged-header-center">
          <img src={mniam} className="header-logo" alt="mniam" />
        </Box>

        <Box className="logged-header-right" />
      </Box>

      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Box className="app-bar-content">
            <Typography variant="h4" component="div">
              Przepisy
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box className="header-links">
        <Typography variant="h6" component="span" className="link-text">
          <a href="/LogHome" className="link">Znajdź przepis</a>
        </Typography>

        <Typography variant="h6" component="span" className="link-text">
          <a href="/FavoritesU" className="link">Ulubione przepisy</a>
        </Typography>

        <Typography variant="h6" component="span" className="link-text">
          <a href="/AddRecipe" className="link">Dodaj przepis</a>
        </Typography>

        <Typography variant="h6" component="span" className="link-text">
          <a href="/ChangePass" className="link">Zmień hasło</a>
        </Typography>

        <Typography variant="h6" component="span" className="link-text">
          <a href="/logout" className="link">Wyloguj</a>
        </Typography>
      </Box>
    </div>
  );
}

export default LoggedHeader;
