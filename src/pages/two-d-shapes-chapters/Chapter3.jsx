import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
import areaLearn from '../../assets/images/Geometry/AreaLearn.webp'

function Chapter3(props) {
    const navigate = useNavigate();
    return (
        <div>
      <h1>Chapter 3 - Area of Squares and Rectangles</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{width:'800px' }}>
          <ReactPlayer
            url="https://youtu.be/8cz_IB65pZM"
            controls
            width="100%"
            height="100%"
          />
        </Card>
        <Card style={{ padding: '10px' }}>
          <img
            src={areaLearn}
            alt="shapes"
            style={{ width: '50%', height: 'auto' }}
          />
          <h2>Key Ideas</h2>
            <p>Area is the amount of space inside a shape</p>
            <p>Area of a square: Area = Side x Side</p>
            <p>Area of a rectangle: Area = Length x Width</p>
        </Card>
      </div>
      <div>
        
      </div>
      <div>
        <Button style={{ margin: '10px' }} variant="contained" color="primary">
          Chapter 3 Quiz
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

export default Chapter3;