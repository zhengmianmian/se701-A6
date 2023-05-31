import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Container from '@mui/material/Container';
import { useNavigate} from 'react-router-dom';

function PersonalUnitTest() {
  const [questions, setQuestions] = useState('');
  const [time, setTime] = useState('');
  const [knowledgePoints, setKnowledgePoints] = useState([]);
  const [difficulty, setDifficulty] = useState(10);
  const navigate = useNavigate();

  
  const difficulties = [
    { value: 10, label: 'Easy' },
    { value: 50, label: 'Moderate' },
    { value: 100, label: 'Difficult' },
  ];

  const topics = [
    "2D Shapes",
    "Perimeter",
    "Area of squares & rectangles",
    "Volume of shapes"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      questions,
      time,
      knowledgePoints,
      difficulty,
    });
    
    navigate('/learn/geometry/personaltest/result');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
        <h1>Setting of Exam</h1>
        <form onSubmit={handleSubmit} sx={{ width: '100%', mt: 3 }}>
          <Box sx={{ mb: 2 }}>
            <h2>Number of Questions</h2>
            <TextField
              type="number"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <h2>Time Limit (mins)</h2>
            <TextField
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <h2>Knowledge Points</h2>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Topics</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={knowledgePoints}
                onChange={(e) => setKnowledgePoints(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                {topics.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemIcon>
                      <Checkbox checked={knowledgePoints.indexOf(name) > -1} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <h2>Difficulty Level</h2>
            <Slider
              value={difficulty}
              onChange={(e, val) => setDifficulty(val)}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={difficulties}
            />
          </Box>
          <Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default PersonalUnitTest;
