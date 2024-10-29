import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";
import './Header.css'; 

export function Header() {
  return (
    <div className="header-container">
      <Box className="header-top">
        <Box className="header-left" />
        
        <Box className="header-center">
          <img src={mniam} className="header-image" alt="mniam" />
        </Box>

        <Typography variant="h6" component="div" className="header-right">
          <span>
            <a href="/login" className="header-account-link">
              <b>Moje konto</b>
            </a>
          </span>
        </Typography>
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
    </div>
  );
}

export default Header;
