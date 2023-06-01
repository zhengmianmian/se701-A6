import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
import perimeterLearn from '../../assets/images/Geometry/PerimeterLearn.jpg'

function Chapter2(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Chapter 2 - Sides and Angles</h1>
            <div>
                <p>A perimeter is the total length around the outside of the shape</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width:'900px'}}>
                <ReactPlayer 
                    url="https://youtu.be/MTSlKifo4js"
                    controls
                    width="100%"
                    height="100%"
                />
                </Card>
                <Card style={{marginLeft: '10px'}}>
                <img
                    src={perimeterLearn}
                    alt="shapes"
                    style={{ width: '50%', height: 'auto' }}/>
                    <h2>Key Ideas</h2>
                    <p>Perimeter is the total length of the outside of a shape. </p>
                    <p>Perimeter of a square: Side + Side + Side + Side</p>
                </Card>
            </div>
      <div>
        <Button style={{ margin: '10px' }} variant="contained" color="primary">
          Chapter 2 Quiz
        </Button>
        <Button
          style={{ margin: '10px' }}
          onClick={() => {
            navigate('/discuss');
          }}
          variant="contained"
          color="primary"
        >
          Discussion
        </Button>
      </div>
    </div>
    );
}

export default Chapter2;