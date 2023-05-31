import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
function StartPage(props) {
    const navigate = useNavigate();
    
    const navigateToLevelTest = () => {
        navigate('/level-test');
    };
    return (
        <div>
            <h1>Math gardener</h1>
            
            <Button onClick={navigateToLevelTest} variant="contained" color="primary">Starting quiz</Button>
            <p>A short quiz to determine your mathematical process.</p>
        </div>
    );
}

export default StartPage;