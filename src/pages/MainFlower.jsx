import seeds from '../assets/images/flowers/seeds.png';
import plantedSeeds from '../assets/images/flowers/plantedSeeds.png';
import quizz_1 from '../assets/images/flowers/1quizz.png';
import quizz_2 from '../assets/images/flowers/2quizz.png';
import quizz_3 from '../assets/images/flowers/3quizz.png';
import quizz_4 from '../assets/images/flowers/4quizz.png';
import evolution_1 from '../assets/images/flowers/evolution1.png';
import evolution_2 from '../assets/images/flowers/evolution2.png';

const allImages = [seeds, plantedSeeds, quizz_1, quizz_2, quizz_3, quizz_4, evolution_1, evolution_2];

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