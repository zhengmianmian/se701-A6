import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
import perimeterLearn from '../../assets/images/Geometry/PerimeterLearn.jpg'

function Chapter2(props) {
    const navigate = useNavigate();

    const navigateToQuiz = () => {
        navigate('/learn/geometry/2d-shapes/chapter2/chapter2quiz');
    };


    return (
        <div >
            <h1>Chapter 2 - Sides and Angles</h1>
            <div>
                <p>A perimeter is the total length around the outside of the shape</p>
            </div>
            <Card style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                <ReactPlayer
                    url="https://youtu.be/MTSlKifo4js"
                    controls
                    width="480px"
                    height="360px"
                />
            </Card>
            <Card style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
            <img src={perimeterLearn} alt="shapes" 
                style={{width:"50%", height:"auto"}}
                />
            </Card>
            <div>
                <h2>Key Ideas</h2>
                <p>Perimeter is the total length of the outside of a shape</p>
                <p>Perimeter of a square: Side + Side + Side + Side</p>
                <p></p>
                
            </div>
            <div>
                <Button style={{margin:"10px"}} onClick={navigateToQuiz}  variant="contained" color="primary">Chapter 2 Quiz</Button>
                <Button style={{margin:"10px"}} onClick={()=>{navigate('/discuss');}} variant="contained" color="primary">Discussion</Button>
            </div>
        </div>
    );
}

export default Chapter2;