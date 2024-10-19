import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";

export function LoggedHeader() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
          
          {/* Logo "mniam" wyśrodkowane względem strony */}
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <img src={mniam} className="App-mniam" alt="mniam" />
          </Box>
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

        {/* Napisy "Dodaj przepis", "Zmień hasło" i "Wyloguj" po prawej stronie */}
        <Box
          display="flex"
          justifyContent="flex-end"  // Ustawienie elementów po prawej
          alignItems="center"
          marginTop={2}
          sx={{ gap: '20px', paddingRight: '20px' }}  // Dodanie marginesu z prawej strony
        >

          {/* Link "Wyszyukiwanie przepisów" */}
          <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
            <a href="/LogHome" style={{ textDecoration: 'none', color: '#006400' }}>
              Znajdz przepis
            </a>
          </Typography>


          {/* Link "Dodaj przepis" */}
          <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
            <a href="/AddRecipe" style={{ textDecoration: 'none', color: '#006400' }}>
              Dodaj przepis
            </a>
          </Typography>

          {/* Link "Zmień hasło" */}
          <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
            <a href="/ChangePass" style={{ textDecoration: 'none', color: '#006400' }}>
              Zmień hasło
            </a>
          </Typography>

          {/* Link "Wyloguj" */}
          <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
            <a href="/logout" style={{ textDecoration: 'none', color: '#006400' }}>
              Wyloguj
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default LoggedHeader;


