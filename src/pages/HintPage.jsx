import {useLocation} from "react-router-dom";
import React from "react";
import triangle from "../assets/images/robot.png"
import { useNavigate} from "react-router-dom";

function HintPage(props) {
    const location = useLocation()
    const dict = {
        "chapter1quiz": ['A square and rectangle has 4 sides', 'A triangle has 3', 'A circle only has 1 side', 'How many sides are on the shape you see?', 'Robot','Give me a list of basic shapes and their names','What has x sides?'],
        "chapter2quiz": ['The perimeter is found by adding all sides', 'On a rectangle opposite sides are equal', 'You can also multiply the length of a side by how many times that side appears', 'Try now, what do you think the perimeter is?', 'Robot','What is a perimeter?','How can you find the unknown side of a rectangle?']
    }

    const score = window.$score
    let navigate = useNavigate();


    return (
        <div className="container">
            <h1 className="title" style={{textAlign:"left", marginLeft: '5%', fontSize: '49px'}}>Math Gardener</h1>
            <h3 style={{textAlign:"left", marginLeft: '5%'}}>Remaining Hints: {score}</h3>
            <div className="content" >
                <p className="subtitle" style={{ color: '#38b6ff', textAlign: 'left', marginLeft: '7%', fontSize: '25px'}}>Hint:</p>
                <ul style={{ textAlign: 'left', marginLeft: '5%', marginTop: '1%'}}> Here's a hint to your question:<br />
                    <br />
                    <li style={{marginLeft: "2%"}}>{dict[location.state.id][0]}<br /></li>
                    <li style={{marginLeft: "2%"}}>{dict[location.state.id][1]}<br /></li>
                    <li style={{marginLeft: "2%"}}>{dict[location.state.id][2]}<br /></li>
                    <br />
                    {dict[location.state.id][3]} </ul>
                <p style={{ color: '#1ea6bc', fontSize: '23px', textAlign: 'left', marginLeft: '17%', marginTop: '10%'}}>Ask ChatGPT</p>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div style={{ marginRight: '10%' }}>
                        <img style={{width:170, height:170, alignSelf: 'center', marginLeft: '15%'}} src={triangle} alt={dict[location.state.id][4]} />
                    </div>
                    <ul style={{textAlign: 'left', marginTop: '1%'}}>You can ask ChatGPT the following questions and try to answer the question by yourself:<br />
                        <br />
                        <li style={{marginLeft: "5%"}}>{dict[location.state.id][5]}<br /></li>
                        <li style={{marginLeft: "5%"}}>{dict[location.state.id][6]}<br /></li>
                    </ul>
                </div>
                <a
                    href="https://chat.openai.com/chat"
                    target="_blank"
                    rel="noreferrer"
                >
                    Click to open ChatGPT (new tab)
                </a>
                <br/>
                <br/>
                <button style={{ width: 120, height: 40, Opacity: 0.1 }} onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default HintPage;