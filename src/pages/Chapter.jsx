import shape from '../assets/images/image-101.png'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player";
function Chapter(props) {

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
                <Button>Chapter1 Quiz</Button>
                <Button>Discussion</Button>
            </div>
        </>
    );
}

export default Chapter;