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
            <img src={item} alt="flower" style={{ width: '175px', height: 'auto' }} />
        </div>
    );
    return (
        <div>
            <h1 style={{ fontSize: '100px', color: 'black', 
                        textAlign: 'left', marginTop: '-25px', 
                        lineHeight: '1'}}>Math <br />Gardener.</h1>
            <div id="flower-container" style={{ marginTop: '-20px' }}>
                {flowerItems}
            </div>
        </div>
    );
}

export default HomePage;