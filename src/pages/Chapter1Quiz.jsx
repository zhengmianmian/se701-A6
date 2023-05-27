import triangle from '../assets/images/Triangle.png'
import Button from '@mui/material/Button';
import React, {useState} from 'react';


function Chapter1Quiz() {
    const[active,setActive] = useState(false);
    const correct = () => {
        setActive(!active);
    };

    function wrong(){
        alert('Try again!');
    }

    return (
        <>
            <h1>Identify shapes Quiz</h1>
            <h2>Q1. Answer the following addition problem:</h2>
            <h3>What shape is it?</h3>
            <img style={{width:100, height:100}} src={triangle} alt="triagles" />
            <Button onClick={wrong} color="primary" variant="contained">Square</Button>
            <Button onClick={wrong} color="primary" variant="contained">Rectangle</Button>
            <Button 
                onClick={correct} 
                variant="contained"
                style={{backgroundColor: active ? "black" : "primary"}}>
                Triagnle</Button>
            <Button onClick={wrong} color="primary" variant="contained">Circle</Button>
        
            
        </>
    );
}

export default Chapter1Quiz;