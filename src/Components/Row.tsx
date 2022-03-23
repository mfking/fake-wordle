import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WORD_LENGTH = 5;

interface RowProps {
  word: string;
  guessedLetters: string[];
}

const Row: React.FC<RowProps> = ({ word, guessedLetters }: RowProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      {Array.from({ length: WORD_LENGTH }, (_, index) => {
        const letter = guessedLetters[index];
          return (
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "#FFF",
                borderColor: "#000",
                borderWidth: "1px",
                borderStyle: "solid"
              }}
            >
              {letter != null ? 
                (
                  <Typography>{letter}</Typography>
                ) : void 0
              }
            </Box>
          );
       })}
    </Box>
  );
};

export default Row;
