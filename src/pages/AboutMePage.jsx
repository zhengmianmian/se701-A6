import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';
import RankingBoard from './RankingBoard';
import { Container, Box, Grid, Typography } from '@mui/material';

const data = [
    {
      subject: 'Geometry',
      A: 120,
      fullMark: 150,
    },
    {
      subject: 'Arithmetic',
      A: 80,
      fullMark: 150,
    },
    {
      subject: 'Fractions',
      A: 88,
      fullMark: 150,
    },
    {
      subject: 'Prime Numbers',
      A: 120,
      fullMark: 150,
    },
    {
      subject: 'Basic Algebra',
      A: 60,
      fullMark: 150,
    },
    {
      subject: 'Equations',
      A: 40,
      fullMark: 150,
    },
  ];

function AboutMePage(props) {
    const {score, setScore} = useContext(AppContext)
    return (
<<<<<<< Updated upstream
        <Container>
=======
      
        <div>
>>>>>>> Stashed changes
            <Box py={2}>
                <Typography variant="h3">Achievements</Typography>
                <Typography variant="body1">Score: {score}</Typography>
            </Box>
<<<<<<< Updated upstream

            <Grid container spacing={40}>
=======
            
            <Grid container spacing={2}>
>>>>>>> Stashed changes
                <Grid item xs={12} md={6}>
                    <Box py={10}>
                        <Typography variant="h3">Skill Matrix</Typography>
                        <RadarChart
                            cx={300}
                            cy={250}
                            outerRadius={200}
                            width={600}
                            height={600}
                            data={data}
                            >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar
                                name="Mike"
                                dataKey="A"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box py={10}>
                        <Typography variant="h3">Ranking Board</Typography>
                        <Box py={3}>
                            <RankingBoard />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
<<<<<<< Updated upstream
        </Container>
=======
           
        </div>
      
>>>>>>> Stashed changes
    );
}

export default AboutMePage;


