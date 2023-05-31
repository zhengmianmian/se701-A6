import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function PersonalResult() {
  // Dummy test results data
  const [results] = useState([
    { question: 'What is the area of a square with side 4cm?', correctAnswer: '16cm²', yourAnswer: '16cm²' },
    { question: 'What is the perimeter of a rectangle with length 3cm and width 5cm?', correctAnswer: '16cm', yourAnswer: '15cm' },
    { question: 'What is the volume of a cube with side 2cm?', correctAnswer: '8cm³', yourAnswer: '8cm³' },
    { question: 'What is the area of a circle with radius 3cm (to the nearest whole number)?', correctAnswer: '28cm²', yourAnswer: '27cm²' },
  ]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Personal Test Results
        </Typography>
        
        <Typography variant="h6" component="h1" gutterBottom>
          Time(15 mins), Difficulty level(easy), knowledgePoints(areas)
        </Typography>
        
        {results.map((result, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6">{result.question}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                <strong>Your Answer:</strong> {result.yourAnswer}
              </Typography>
              <Typography variant="body1">
                <strong>Correct Answer:</strong> {result.correctAnswer}
              </Typography>
            </Paper>
          </Box>
        ))}

        <Typography variant="h6" component="h1" gutterBottom>
          Result: The accuary is 50%, you can try it again later.
        </Typography>
      </Box>
    </Container>
  );
}

export default PersonalResult;
