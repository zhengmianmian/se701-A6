import { useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
function GeometryPage() {
    const navigate = useNavigate();
    const units=[
        {
            name:'2D Shapes',
            path:'/learn/geometry/2d-shapes'
        },
        {
            name:'Perimeter',
            path:'/learn/geometry'
        },
        {
            name:'Area of squares & rectangles',
            path:'/learn/geometry'
        },
        {
            name:'Volume of shapes',
            path:'/learn/geometry'
        },
        {
            name:'unit5',
            path:'/learn/geometry'
        },
        {
            name:'Quiz',
            path:'/learn/geometry'
        },
    ]
    
    const unitItems = units.map((item,index)=>
        <Button key={index} onClick={()=>navigate(item.path)} className="topicBtn" variant="contained" color="primary">{item.name}</Button>
    );
    return (
        <>
            <h1>Geometry</h1>
            <p className="topic-intro">Geometry is a branch of mathematics that deals with the study of shapes, sizes, properties, and relationships of objects in space. It explores concepts such as points, lines, angles, shapes, surfaces, and solids.</p>
            <div className="btnContainer">
                {unitItems}
            </div>
        </>
    );
}

export default GeometryPage;