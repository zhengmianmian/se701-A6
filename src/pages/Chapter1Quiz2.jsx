import styled from '@emotion/styled';
import triangle from '../assets/images/Circle.png'
import '../assets/css/QuizPage.css'
import Button from '@mui/material/Button';
import { TbBulb, TbInputSearch } from "react-icons/tb";
//import React, {useState} from 'react';




function Chapter1Quiz() {
  
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
            answer:'wrong'
        },
        {
            name:'Circle',
            answer:'correct'
        },
        {
            name:'Pentagon',
            answer:'wrong'
        },
        
    ]


    function IsCorrect(answer){
        if(answer === 'correct'){
            alert('Great!');
        }else{
            alert('Try Again!')
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
                style={{float: 'right'}}>
                Ask ChatGPT
                <TbInputSearch size="1.5em" color="cornflowerblue"/>
            </ButtonHint>
            <ButtonHint
                style={{float: 'right'}}>
                Hint
                <TbBulb size="1.5em" color="cornflowerblue"/>
            </ButtonHint>
            <br></br>
            <div className="quizQuestion">What shape is it?</div>
            <br></br>
            <img style={{width:170, height:170, alignSelf: 'center'}} src={triangle} alt="triagles" />
            <br></br>

            {buttonsItems}
            <br></br>
            <Button 
                color='primary'
                style={{float: 'right'}}
                size='small'>
                Next Question
            </Button>
        
            
        </>
    );
}

export default Chapter1Quiz;