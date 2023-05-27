import shape from '../assets/images/image-101.png'
import Button from '@mui/material/Button';
function Chapter(props) {

    return (
        <>
            <h1>Chapter1-Identify shapes</h1>
            <img src={shape} alt="shapes" />
            <div>
                <Button>Chapter1 Quiz</Button>
                <Button>Discussion</Button>
            </div>
        </>
    );
}

export default Chapter;