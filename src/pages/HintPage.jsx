import {useLocation} from "react-router-dom";
import React from "react";
import triangle from '../assets/images/Triangle.png'

function HintPage(props) {
    const location = useLocation()
    const dict = {
        "chapter1quiz": ['A square and rectangle has 4 sides', 'A triangle has 3', 'A circle only has 1 side', 'How many sides are on the shape you see?', 'Triangle','Give me a list of basic shapes and their names','What has x sides?'],
        "geometry2": 'Question2'
    }

    const score = window.$score


    return (
        <div className="container">
            <h1 className="title" style={{textAlign:"left", marginLeft: '5%', fontSize: '49px'}}>Math Gardener  Remaining Hints:{score}</h1>
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
            </div>
        </div>
    );
}

export default HintPage;