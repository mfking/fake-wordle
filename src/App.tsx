import Box from '@mui/material/Box';
import React from 'react';
import './App.css';
import Game from './Components/Game';

function App() {
  return (
    <Box className="App" sx={{ display: "flex", justifyContent: "center" }}>
      <Game />
    </Box>
  );
}

export default App;
