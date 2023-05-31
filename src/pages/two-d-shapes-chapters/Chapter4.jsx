import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
function Chapter4(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Chapter4 - Sides and Angles</h1>
            <div>
                <p>learning stuff</p>
            </div>
            <div>
                <Button style={{margin:"10px"}}  variant="contained" color="primary">Chapter4 Quiz</Button>
                <Button style={{margin:"10px"}} onClick={()=>{navigate('/discuss');}} variant="contained" color="primary">Discussion</Button>
            </div>
        </div>
    );
}

export default Chapter4;