import styled from '@emotion/styled';
import triangle from '../assets/images/Triangle.png'
import Triangle_inLife from '../assets/images/Triangle_inLife.jpg'
import Wateringcan0 from '../assets/images/Wateringcan0.jpg'
import Wateringcan2 from '../assets/images/Wateringcan2.jpg'
import '../assets/css/QuizPage.css'
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import { TbBulb, TbInputSearch } from "react-icons/tb";
import { LuFlower2 } from "react-icons/lu";
import React, {useState} from 'react';


function Chapter1Quiz() {
    const navigate = useNavigate();
    const navigateToQuiz2 = () => {
        navigate('/learn/geometry/2d-shapes/chapter1/chapter1quiz/chapter1quiz2');
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
            name:'Rectangle',
            answer:'wrong'
        },
        {
            name:'Square',
            answer:'wrong'
        },
        {
            name:'Triangle',
            answer:'correct'
        },
        {
            name:'Circle',
            answer:'wrong'
        },
        {
            name:'Pentagon',
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
            <div className="quizHeader">Q1. Answer the following addition problem:</div>
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
            <div className="quizQuestion">What shape is it?</div>
            <br></br>
            {/*<img style={{width:170, height:170, alignSelf: 'left'}} src={triangle} alt="triangle" />*/}
            <img style={{width:170, height:170, alignSelf: 'center'}} src={Triangle_inLife} alt="Triangle_inLife" />
            {!water && <img style={{width:120, height:120, float: 'right'}} src={Wateringcan0} alt="wateringcan0"/>}
            {water && <img style={{width:120, height:120, float: 'right'}} src={Wateringcan2} alt="wateringcan2"/>}
            <br></br>
            {buttonsItems}
            <br></br>
            {show && isCorrect && <div className="answer_react">Great!<LuFlower2 size="1.5em" color="cornflowerblue"/></div>}
            {show && !isCorrect && <div className="answer_react">Try Again!</div>}

            <br></br>
            <Button onClick={navigateToQuiz2}
                    color='primary'
                    style={{float: 'right'}}
                    size='small'>
                Next Question
            </Button>


        </>
    );
}

export default Chapter1Quiz;