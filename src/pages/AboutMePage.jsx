import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
function AboutMePage(props) {
    const {score, setScore} = useContext(AppContext)
    return (
        <div>
            <h1>Achievements</h1>
            <p>score: {score} </p>
        </div>
    );
}

export default AboutMePage;