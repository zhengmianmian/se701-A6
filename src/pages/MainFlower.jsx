
import flower from '../assets/images/flowerTest.png'

function MainFlower() {
    return (
        <div>
            <h3>Your flower</h3>
            <img src={flower} alt="flower" className="flower-image" />
        </div>
    );
}

export default MainFlower;