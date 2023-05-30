import shape from '../assets/images/image-101.png'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
import { useNavigate} from 'react-router-dom';

function Chapter(props) {
    const navigate = useNavigate();
    const navigateToQuiz = () => {
        navigate('/learn/geometry/2d-shapes/chapter1/chapter1quiz');
    };

    return (
        <>
            <h1>Chapter1-Identify shapes</h1>
            <Card style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                <ReactPlayer
                    url="https://youtu.be/Q93bTbCNZpI?t=204"
                    controls
                    width="400px"
                    height="300px"
                />
            </Card>
            <img src={shape} alt="shapes" />
            <div>
                <Button style={{margin:"10px"}} onClick={navigateToQuiz} variant="contained" color="primary">Chapter1 Quiz</Button>
                <Button style={{margin:"10px"}} onClick={()=>{navigate('/discuss');}} variant="contained" color="primary">Discussion</Button>
            </div>
        </>
    );
}

export default Chapter;