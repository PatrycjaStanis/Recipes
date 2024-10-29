import React from 'react';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import mniam from "./mniam.PNG";
import './LogHeader.css';

export function LogHeader() {
  return (
    <div className="logheader-container">
      <Box className="logheader-top">
        <Box className="logheader-left" />

        <Box className="logheader-center">
          <img src={mniam} className="logheader-logo" alt="mniam" />
        </Box>

        <Box className="logheader-right">
      
        </Box>
      </Box>

      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h4" component="div" className="app-bar-title">
            Przepisy
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default LogHeader;
