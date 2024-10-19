import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";

export function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" padding={2}>
          
          {/* Pusty Box po lewej stronie */}
          <Box sx={{ flexGrow: 1 }}></Box>
          
          {/* Obrazek mniam wyśrodkowany, przesunięty o 10px w lewo */}
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1, marginLeft: "-700px" }}>
            <img src={mniam} className="App-mniam" alt="mniam" />
          </Box>

          {/* Napis "Moje konto" wyrównany do prawej */}
          <Typography variant="h6" component="div">
          <span>
              <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <b>Moje konto</b>
              </a>
            </span>
          </Typography>
        </Box>
        <AppBar
          position="static"
          sx={{
            background: 'linear-gradient(to right, #90EE90, #006400)',
            textAlign: 'center',
          }}
        >
          <Toolbar>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h4" component="div" sx={{ margin: 'auto' }}>
                Przepisy
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;