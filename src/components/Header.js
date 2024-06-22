import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import mniam from "./mniam.PNG"

export function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <img src={mniam} className="App-mniam" alt="mniam" />
        <AppBar 
        
          position="static" 
          sx={{ 
            background: 'linear-gradient(to right, #90EE90, #006400)',
            textAlign: 'center'
          }}
        >
          <Toolbar>
            <Box sx={{ width: '100%' }}> {}
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



