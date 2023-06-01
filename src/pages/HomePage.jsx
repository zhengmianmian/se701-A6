import f1 from '../assets/images/home_flowers/f1.png'
import f2 from '../assets/images/home_flowers/f2.png'
import f3 from '../assets/images/home_flowers/f3.png'
import f4 from '../assets/images/home_flowers/f4.png'
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
            <Box component="div" m={1} boxShadow={0} p={1} borderRadius={1} sx={{ width: '100%', height: '400px' }}>
                <Typography variant="h6" align="center"style={{ lineHeight: '8' }}>level {index + 1}</Typography>
                <Card sx={{ width: '100%', height: 0, paddingBottom: '200%', position: 'relative', overflow: 'hidden', boxShadow: 'none' }}>
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
        
        <Container maxWidth="lg"style={{ marginLeft: '50px' }}>
            <h1 style={{ fontSize: '110px', textAlign: 'left', marginTop: '-25px', marginLeft: "-130px", lineHeight: '1' }}>Math <br></br>Gardener.</h1>
            <Grid container spacing={2} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-180px',
                height: '1vh',
            }}>
                <Grid item xs={6} style={{ marginTop: '190px', marginLeft: "-130px" }}>
                <Grid container spacing={2}>
                    {flowerItems}
                </Grid>
                </Grid>
                <Grid item xs={6} style={{ marginTop: '-100px' , marginLeft: "130px"}}>
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
