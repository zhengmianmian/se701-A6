import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
import learn from '../../assets/images/Geometry/PerimeterLearn.jpg'

function Chapter2(props) {
    const navigate = useNavigate();
    return (
        <div>
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
            <img src={learn} alt="shapes" 
                style={{width:"50%", height:"auto"}}
                />
            </Card>
            <div>
                <Button style={{margin:"10px"}}  variant="contained" color="primary">Chapter2 Quiz</Button>
                <Button style={{margin:"10px"}} onClick={()=>{navigate('/discuss');}} variant="contained" color="primary">Discussion</Button>
            </div>
        </div>
    );
}

export default Chapter2;