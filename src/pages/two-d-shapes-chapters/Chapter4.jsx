import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
import areaLearn from '../../assets/images/Geometry/area-volume.png'

function Chapter4(props) {
    const navigate = useNavigate();
    return (
        <div>
      <h1>Chapter 4 - Volume of Shapes</h1>
      <p>Volume is the amount of space that a substance or object occupies.</p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ padding: '10px' }}>
          <ReactPlayer
            url="https://youtu.be/8cz_IB65pZM" //change
            controls
            width="640px" // Adjust the width here
            height="360px"
          />
        </Card>
        <Card style={{ padding: '10px' }}>
          <img
            src={areaLearn}
            alt="shapes"
            style={{ width: '50%', height: 'auto' }}
          />
          <h2>Key Ideas</h2>
            <p>Volume is the amount of space that an object takes up</p>
            <p>Volume of a Cube: Length x Width x Height</p>
            <p>Volume of a rectangle: Length x Width x Height</p>
        </Card>
      </div>

      <div>
        <Button style={{ margin: '10px' }} variant="contained" color="primary">
          Chapter 4 Quiz
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

export default Chapter4;