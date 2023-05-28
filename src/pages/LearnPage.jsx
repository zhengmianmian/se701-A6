import Button from '@mui/material/Button';
import '../assets/css/LearnPage.css'
import { useNavigate} from 'react-router-dom';
function LearnPage(props) {
    const navigate = useNavigate();
    const topics=[
        {
            name:'Geometry',
            path:'/learn/geometry'
        },
        {
            name:'Arithmetic',
            path:'/learn'
        },
        {
            name:'Fractions',
            path:'/learn'
        },
        {
            name:'Prime Numbers',
            path:'/learn'
        },
        {
            name:'Basic Algebra',
            path:'/learn'
        },
        {
            name:'Equations',
            path:'/learn'
        },
    ]
    
    const topicItems = topics.map((item,index)=>
        <Button key={index} onClick={()=>navigate(item.path)} className="topicBtn" variant="contained" color="primary">{item.name}</Button>
    );
    return (
        <div>
            <h1>Select a topic to learn</h1>
            <div className="btnContainer">
                {topicItems}
            </div>
            
        </div>
    );
}

export default LearnPage;