import f1 from '../assets/images/home_flowers/f1.PNG'
import f2 from '../assets/images/home_flowers/f2.PNG'
import f3 from '../assets/images/home_flowers/f3.PNG'
import f4 from '../assets/images/home_flowers/f4.PNG'
import '../assets/css/HomePage.css'
import { Container, Box, Grid, Typography } from '@mui/material';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

const flowers = [
    f1,
    f2,
    f3,
    f4
]

const data = [
    {
        subject: 'Geometry',
        A: 50,
        fullMark: 150,
    },
    {
        subject: 'Arithmetic',
        A: 90,
        fullMark: 150,
    },
    {
        subject: 'Fractions',
        A: 90,
        fullMark: 150,
    },
    {
        subject: 'Prime Numbers',
        A: 90,
        fullMark: 150,
    },
    {
        subject: 'Basic Algebra',
        A: 90,
        fullMark: 150,
    },
    {
        subject: 'Equations',
        A: 150,
        fullMark: 150,
    },
];

function HomePage() {
    const flowerItems = flowers.map((item, index) =>
        <Grid item xs={3} key={index}>
            <Box component="div" m={1} boxShadow={1} p={1} borderRadius={1}>
                <Typography variant="h6" align="center">level {index + 1}</Typography>
                <Card sx={{ width: '100%', height: 0, paddingBottom: '200%', position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        image={item}
                        alt={`flower ${index + 1}`}
                        sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                </Card>
            </Box>
        </Grid>
    );

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Grid item xs={6}>
                <Grid container spacing={2}>
                    {flowerItems}
                </Grid>
                </Grid>
                <Grid item xs={6}>
                <Box>
                    <RadarChart
                    width={700}
                    height={500}
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
            </Grid>
            </Container>

    );
}

export default HomePage;
