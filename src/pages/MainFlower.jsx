import seeds from '../assets/images/flowers/seeds.png';
import plantedSeeds from '../assets/images/flowers/plantedSeeds.png';
import quizz_1 from '../assets/images/flowers/1quizz.png';
import quizz_2 from '../assets/images/flowers/2quizz.png';
import quizz_3 from '../assets/images/flowers/3quizz.png';
import quizz_4 from '../assets/images/flowers/4quizz.png';
import evolution_1 from '../assets/images/flowers/evolution1.png';
import evolution_2 from '../assets/images/flowers/evolution2.png';
import Wateringcan0 from '../assets/images/Wateringcan0.jpg'
import Wateringcan1 from '../assets/images/Wateringcan1.jpg'
import Wateringcan2 from '../assets/images/Wateringcan2.jpg'
import Wateringcan3 from '../assets/images/Wateringcan3.jpg'
import Wateringcan4 from '../assets/images/Wateringcan4.jpg'

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import { useEffect } from 'react';

const allImages = [
  seeds,
  plantedSeeds,
  quizz_1,
  quizz_2,
  quizz_3,
  quizz_4,
  evolution_1,
  evolution_2
];

// accidently spelt quiz wrong whoops - Thomas

/*
0 - Seeds
1 - pot w/ planted seeds
2 till 5 quiz levels
6 - yellow flower
7 - purple flower
*/
function MainFlower() {

  const { score, setScore } = useContext(AppContext)
  const [indexToDisplay, setIndexToDisplay] = useState(0);
  const [wateringCan, setWateringCan] = useState(Wateringcan0)
  const [canDisable, setCanDisable] = useState(true)
  const [canScore, SetCanScore] = useState(score)


  useEffect(() => {
    if (score > 0 && indexToDisplay === 0) {
      setIndexToDisplay(1)
    }
    const canList = [Wateringcan0, Wateringcan1, Wateringcan2, Wateringcan3, Wateringcan4]

    let dif = score - canScore
    let drop = Math.floor(dif / 2)
    if (canList[drop] !== wateringCan && drop <= 4) {
      setWateringCan(canList[drop])
    }
  }, [score, canScore, indexToDisplay, wateringCan])

  useEffect(() => {
    wateringCan === Wateringcan4 ? setCanDisable(false) : setCanDisable(true)
  }, [wateringCan])

  const flowerGrow = () => {
    setIndexToDisplay(Math.min(indexToDisplay + 1, 7))
    if ((score - canScore) === 8) {
      setWateringCan(Wateringcan0)
      SetCanScore(score)
    } else {
      SetCanScore(canScore + 8)
    }
  };

  return (
    <div>
      
      <Button onClick={flowerGrow} disabled={canDisable} style={{marginTop:'-90px'}}>
        <img style={{ width: 150, height: 150, Opacity: 0.1 }} src={wateringCan} alt="wateringcan0" />
      </Button>

      <Button onClick={() => { setScore(score + 1) }} style={{marginTop:'10px'}}>
        <img src={allImages[indexToDisplay]}
          alt={`flower ${indexToDisplay + 1}`}
          className="flower-image"/>
      </Button>
    </div>
  );
}

export default MainFlower;