import React from 'react';
import Box from '@mui/material/Box';

import { NUMBER_GUESSES } from '../constants';
import Row from './Row';

const Game: React.FC = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", marginTop : "50px" }}>
        {Array.from({ length: NUMBER_GUESSES }, (_, index) => 
          <Row word="guess" guessedLetters={[]} />
        )}
      </Box>
    );
};

export default Game;