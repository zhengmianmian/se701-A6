<<<<<<< Updated upstream
function HintPage(props) {

    return (
        <div className="container">
            <h1 className="title" style={{textAlign:"left", marginLeft: '5%', fontSize: '49px'}}>Flower Math.</h1>
=======
import {useLocation} from "react-router-dom";
import React from "react";

function HintPage(props) {
    const location = useLocation()
    const dict = {
        "geometry1": ['Square and rectangle has 4 sides', 'A triangle has 3', 'A circle only has 1 side', 'How many sides are on the shape you see?', 'Triangles'],
        "geometry2": 'Question2'
    }
    //To get the data sent between web page
    //{dict[location.state.id]}

    //To send the data between web page (Place in <Link /Link>)
    //state={{ id : "geometry2" }}

    return (
        <div className="container">
            <h1 className="title" style={{textAlign:"left", marginLeft: '5%', fontSize: '49px'}}>Math Gardener</h1>
>>>>>>> Stashed changes
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
                        <img style={{width:170, height:170, alignSelf: 'center', marginLeft: '15%'}} src="./assets/images/" alt={dict[location.state.id][4]} />
                    </div>
                    <ul style={{textAlign: 'left', marginTop: '1%'}}>You can ask ChatGPT the following questions and try to answer the question by yourself:<br />
                        <br />
                        <li style={{marginLeft: "5%"}}>What is the base angle of an isosceles right triangle?<br /></li>
                        <li style={{marginLeft: "5%"}}>Given the sides length of an isosceles right triangle, how to find the base length?<br /></li>
                        <li style={{marginLeft: "5%"}}>Given the central angle and radius, how to find the area of a sector?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HintPage;