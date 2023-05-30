import styled from '@emotion/styled';
import Hexagon_inLife from '../assets/images/Hexagon_inLife.jpg'
import Wateringcan3 from '../assets/images/Wateringcan3.jpg'
import Wateringcan4 from '../assets/images/Wateringcan4.jpg'
import '../assets/css/QuizPage.css'
import Button from '@mui/material/Button';
import { TbBulb, TbInputSearch } from "react-icons/tb";
import { LuFlower2 } from "react-icons/lu";
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function Chapter1Quiz3() {

    const navigate = useNavigate();

    const navigateToQuiz4 = () => {
        navigate('/learn/geometry/2d-shapes/chapter1/chapter1quiz/chapter1quiz2/chapter1quiz3/chapter1quiz4');
    };
    const navigateToHint = () => {
        navigate('/hint', {state:{id:"chapter1quiz"}})
    };

    const ButtonGroup = styled.button`
    background: white;
    color: black;
    font-size: 20px;
    padding: 10px 60px;
    border: 2px solid #61dafb;
    border-radius: 15px;
    margin: 10px 10px;
    cursor: pointer;
    variant= outlined;
   
    `;

    const ButtonHint = styled.button`
    background: white;
    border: 2px solid white;
    color: #61dafb;
    font-size: 15px;
    margin: 2px 2px;
    cursor: pointer;
    variant= text;
    font-weight: bold;
    `;

    const buttons=[
        {
            name:'1',
            answer:'wrong'
        },
        {
            name:'6',
            answer:'correct'
        },
        {
            name:'3',
            answer:'wrong'
        },
        {
            name:'2',
            answer:'wrong'
        },
        {
            name:'5',
            answer:'wrong'
        },

    ]

    const [isCorrect, setCorrect] = useState(null);
    const [show, setShow] = useState(false);
    const [water, fillWater] = useState(false);


    function IsCorrect(answer){
        if(answer === 'correct'){
            setCorrect(true);
            setShow(true);
            fillWater(true);
        }else{
            setCorrect(false);
            setShow(true);
            fillWater(false);
        }
    }

    const buttonsItems = buttons.map((item,index)=>
        <ButtonGroup onClick={() => IsCorrect(item.answer)}>{item.name} </ButtonGroup>
    );

    return (
        <>
            <div className="quizHeader">Identify shapes Quiz</div>
            <div className="quizHeader">Q2. Answer the following addition problem:</div>

            <ButtonHint
                onClick={navigateToHint}
                style={{float: 'right'}}>
                Ask ChatGPT
                <TbInputSearch size="1.5em" color="cornflowerblue"/>
            </ButtonHint>
            <ButtonHint
                onClick={navigateToHint}
                style={{float: 'right'}}>
                Hint
                <TbBulb size="1.5em" color="cornflowerblue"/>
            </ButtonHint>
            <br></br>
            <div className="quizQuestion">How many sides does below shapes have?</div>
            <br></br>
            <img style={{width:170, height:170, alignSelf: 'center'}} src={Hexagon_inLife} alt="Hexagon_inLife" />
            {!water && <img style={{width:120, height:120, float: 'right'}} src={Wateringcan3} alt="wateringcan3"/>}
            {water && <img style={{width:120, height:120, float: 'right'}} src={Wateringcan4} alt="wateringcan4"/>}
            <br></br>
            {buttonsItems}
            <br></br>
            {show && isCorrect && <div className="answer_react">Great!<LuFlower2 size="1.5em" color="cornflowerblue"/></div>}
            {show && !isCorrect && <div className="answer_react">Try Again!</div>}
            <br></br>
            <Button
                color='primary'
                style={{float: 'right'}}
                size='small'>
                Finish quiz//Grow flower
            </Button>


        </>
    );
}

export default Chapter1Quiz3;