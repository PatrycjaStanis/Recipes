import React from 'react';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG"; // Ścieżka do obrazka mniam


export function LogHeader() {
  return (
    <>
      {/* Wyśrodkowany obrazek */}
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <img src={mniam} className="App-mniam" alt="mniam" style={{ marginLeft: "-10px" }} />
      </div>

      {/* Pasek AppBar z napisem "Przepisy" */}
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(to right, #90EE90, #006400)',
          textAlign: 'center',
        }}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ margin: 'auto' }}>
            Przepisy
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default LogHeader;
