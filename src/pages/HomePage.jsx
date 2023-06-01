import f1 from '../assets/images/home_flowers/f1.PNG'
import f2 from '../assets/images/home_flowers/f2.PNG'
import f3 from '../assets/images/home_flowers/f3.PNG'
import f4 from '../assets/images/home_flowers/f4.PNG'
import '../assets/css/HomePage.css'
const flowers = [
    f1,
    f2,
    f3,
    f4
]
function HomePage() {
    const flowerItems = flowers.map((item,index)=>
        <div key={index}>
            <h3>level {index+1} </h3>
            <img src={item} alt="flower" />
        </div>
    );
    return (
        <div>
            <div id='flower-container'>
                {flowerItems}
            </div>
        </div>
    );
}

export default HomePage;