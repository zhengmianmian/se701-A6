function HintPage(props) {

    return (
        <div className="container">
            <h1 className="title" style={{textAlign:"left", marginLeft: '5%', fontSize: '49px'}}>Flower Math.</h1>
            <div className="content" >
                <p className="subtitle" style={{ color: '#38b6ff', textAlign: 'left', marginLeft: '7%', fontSize: '25px'}}>Hint:</p>
                <ul style={{ textAlign: 'left', marginLeft: '5%', marginTop: '1%'}}> From the figure, you should be able to see the following information:<br />
                    <br />
                    <li style={{marginLeft: "2%"}}>The radius length of the inner sector equals the side length of the triangle and its central angle is 30°.<br /></li>
                    <li style={{marginLeft: "2%"}}>The radius length of the larger sector equals the base length of the triangle, and its central angle equals the base angle.<br /></li>
                    <br />
                    So, the area of the shaded part is the area of the larger sector minus the area of the smaller sector. </ul>
                <p style={{ color: '#1ea6bc', fontSize: '23px', textAlign: 'left', marginLeft: '17%', marginTop: '10%'}}>Ask ChatGPT</p>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div style={{ marginRight: '10%' }}>
                        <img src="AcuteAngle.jpg" alt="Acute Angle" />
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