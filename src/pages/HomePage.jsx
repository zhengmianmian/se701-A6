import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
function HomePage() {
    const navigate = useNavigate();
    const {hello, setHello} = useContext(AppContext)
    const navigateToLevelTest = () => {
        // navigate to /contacts
        navigate('/level-test');
    };
    return (
        <div>
            <h1>Math gardener</h1>
            <p>{hello}</p>
            <Button onClick={navigateToLevelTest} variant="contained" color="primary">Starting quiz</Button>
            <p>A short quiz to determine your mathematical process.</p>
        </div>
    );
}

export default HomePage;