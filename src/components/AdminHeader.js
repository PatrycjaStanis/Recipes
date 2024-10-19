import React from 'react'; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG";

export function AdminHeader() {
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

        {/* Linki w dużych prostokątnych boxach po 3 w jednej linii */}
        <Box
          display="flex"
          justifyContent="center"  // Ustawienie elementów na środku
          flexWrap="wrap"  // Pozwala na zawijanie elementów w przypadku wąskich ekranów
          marginTop={12}  // Zwiększenie odstępu o 100px
          sx={{ gap: '20px', paddingRight: '20px' }}  // Dodanie odstępów
        >

          {/* Link "Nowe przepisy" w dużym boxie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/NewRecipes" style={{ textDecoration: 'none', color: '#006400' }}>
                Nowe przepisy
              </a>
            </Typography>
          </Box>

          {/* Link "Użytkownicy" w dużym boxie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/Users" style={{ textDecoration: 'none', color: '#006400' }}>
                Użytkownicy
              </a>
            </Typography>
          </Box>

          {/* Link "Znajdź przepis" w dużym boxie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/FindRecipies" style={{ textDecoration: 'none', color: '#006400' }}>
                Znajdz przepis
              </a>
            </Typography>
          </Box>

          {/* Link "Dodaj przepis" w dużym boxie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/AaddRecipe" style={{ textDecoration: 'none', color: '#006400' }}>
                Dodaj przepis
              </a>
            </Typography>
          </Box>

          {/* Link "Zmień hasło" w dużym boxie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/AchangePass" style={{ textDecoration: 'none', color: '#006400' }}>
                Zmień hasło
              </a>
            </Typography>
          </Box>

          {/* Link "Wyloguj" w dużym boxie */}
          <Box sx={{ backgroundColor: '#90EE90', padding: '30px', width: '300px', textAlign: 'center', borderRadius: '10px' }}>
            <Typography variant="h6" component="span" sx={{ color: '#006400' }}>
              <a href="/logout" style={{ textDecoration: 'none', color: '#006400' }}>
                Wyloguj
              </a>
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
}

export default AdminHeader;

