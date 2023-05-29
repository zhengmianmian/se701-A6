import seeds from '../assets/images/see.png';
import flower2 from '../assets/images/flower2.png';
import flower3 from '../assets/images/flower3.png';

const allImages = [flower1, flower2, flower3];

function MainFlower() {
  // logic to determine the index of the flower to display
  const indexToDisplay = 1;

  return (
    <div>
      <h3>Your flower</h3>
      <img
        src={allImages[indexToDisplay]}
        alt={`flower ${indexToDisplay + 1}`}
        className="flower-image"
      />
    </div>
  );
}

export default MainFlower;