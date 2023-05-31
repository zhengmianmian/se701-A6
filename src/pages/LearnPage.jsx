import Button from '@mui/material/Button';
import '../assets/css/LearnPage.css'
import { useNavigate} from 'react-router-dom';
import React from 'react';
import { Card, CardMedia } from '@mui/material';
import roadmap from '../assets/images/topic_roadmap.png'
import { Container, Box, } from '@mui/material';

function LearnPage(props) {
    const navigate = useNavigate();
    const topics=[
        {
            name:'Geometry',
            path:'/learn/geometry'
        },
        {
            name:'Arithmetic',
            path:'/learn'
        },
        {
            name:'Fractions',
            path:'/learn'
        },
        {
            name:'Prime Numbers',
            path:'/learn'
        },
        {
            name:'Basic Algebra',
            path:'/learn'
        },
        {
            name:'Equations',
            path:'/learn'
        },
    ]
    
    const topicItems = topics.map((item,index)=>
        <Button key={index} onClick={()=>navigate(item.path)} className="topicBtn" variant="contained" color="primary">{item.name}</Button>
    );
    return (
        <Container>
            <Box mt={2}>
                <h1>Select a topic to learn</h1>
            </Box>
            <Box my={2} className="btnContainer">
                {topicItems}
            </Box>
            <Box my={2}>
                <Card>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        style={{width: '100%', height: 'auto'}}
                        image={roadmap}
                        title="Contemplative Reptile"
                    />
                </Card>
            </Box>
            <Box my={2}>
                <h4>You can start with Geometry, Arithmetic, Prime Numbers, and Basic Algebra. 
                    After understanding Arithmetic, you can move on to Fractions. Once you have a good grasp of Basic Algebra, you can then proceed to Equations.</h4>
            </Box>
        </Container>
    );
}

export default LearnPage;