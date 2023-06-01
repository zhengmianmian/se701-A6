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
        <Container style={{ position: 'relative', top: '-20px'}}>

            <Box py={2} >
                <Typography variant="h3">Achievements</Typography>
                <Typography variant="body1">Score: {score}</Typography>
            </Box>

            <Grid container spacing={2} style={{ position: 'relative', top: '-50px', left: '-30px'}}>
                <Grid item xs={12} md={6}>
                    <Box py={10}>
                        <Typography variant="h3" style={{ marginLeft: '-150px'}}>Skill Matrix</Typography>
                        <RadarChart
                            cx={200}
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

        </Container>

    );
}

export default AboutMePage;


