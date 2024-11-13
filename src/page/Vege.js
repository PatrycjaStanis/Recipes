import React from 'react'; 
import LogHeader from '../components/LogHeader';
import Typography from "@mui/material/Typography";
import { keyframes } from '@emotion/react';

// animacja migania
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

function Vege() {
  return (
    <div style={{ textAlign: 'center' }}>
      <LogHeader />

      {/* Link "Powrót" */}
      <Typography variant="h6" component="span" sx={{ color: '#006400', fontWeight: 'bold', fontSize: '1.5rem' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#006400' }}>
          Powrót
        </a>
      </Typography>
      

      {/* Powiadomienia */}
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ color: '#FF0000', fontWeight: 'bold', fontSize: '3rem', animation: `${blink} 1s infinite` }}
      >
        Uwaga!
      </Typography>
      <Typography 
        variant="h6" 
        component="p" 
        sx={{ color: '#000', fontWeight: 'bold', fontSize: '2rem', animation: `${blink} 1s infinite` }}
      >
        Natychmiast udaj się do psychiatryka na leczenie!
      </Typography>
      <Typography 
        variant="h6" 
        component="p" 
        sx={{ color: '#000', fontWeight: 'bold', fontSize: '2rem', animation: `${blink} 1s infinite` }}
      >
        Lecz się zanim będzie za późno!
        
      </Typography>

      <Typography 
        
        component="p" 
        sx={{ color: 'red', fontSize: '1rem' }}
      >
       
    
      <p>Samodzielny Publiczny Psychiatryczny Zakład Opieki Zdrowotnej</p> 
      <p>im. dr Stanisława Dereszy</p>
      <p>Plac Dr. Zygmunta Brodowicza 1, 16-070 Choroszcz</p>
      <p>Zakład oferuje różnorodne usługi w zakresie zdrowia psychicznego,</p>
      <p>w tym oddziały stacjonarne i dzienne, a także pomoc w sytuacjach kryzysowych.</p>
      <p>Kontakt pod numerem (85) 719 10 91</p>
      </Typography>
    </div>
  );
}

export default Vege;


