import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
function StartPage(props) {
    const navigate = useNavigate();
    
    const navigateToLevelTest = () => {
        navigate('/level-test');
    };
    return (
        <div>
            <h1 style={{ fontSize: '110px', textAlign: 'left', marginTop: '-25px', marginLeft: "-56px", lineHeight: '1' }}>Math <br></br>Gardener.</h1>
            
            <button
            className="custom-button" // Apply the custom CSS class to the button
            onClick={navigateToLevelTest}>
            Starting quiz
            </button>
            <p style={{ fontSize: '20px'}}>A short quiz to determine your mathematical prowess.</p>
        </div>
    );
}

export default StartPage;