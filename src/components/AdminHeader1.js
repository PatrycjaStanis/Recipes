import React from 'react';  
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";

export function AdminHeader1() {
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

          {/* Napis "Panel Administratora" wyrównany do prawej */}
          <Typography variant="h6" component="div">
            <span>
              <b>Panel Administratora</b>
            </span>
          </Typography>
        </Box>

        {/* Pasek "Przepisy" */}
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

        {/* Box "Powrót" po prawej stronie, 20px pod napisem "Przepisy" */}
        <Box
          display="flex"
          justifyContent="flex-end"  // Umieszcza box "Powrót" po prawej stronie
          marginTop={2}  // 20px odstępu od paska z napisem "Przepisy"
          sx={{ gap: '20px', paddingRight: '20px' }}  // Dodanie odstępów po prawej
        >

          {/* Link "Powrót" w dużym boxie po prawej stronie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/AdminHome" style={{ textDecoration: 'none', color: '#006400' }}>
                Powrót
              </a>
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
}

export default AdminHeader1;



