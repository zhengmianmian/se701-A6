import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function TwoDShapePage(props) {
    const navigate = useNavigate();
    const chapters = [
        {
            name: 'chapter 1',
            path: '/learn/geometry/2d-shapes/chapter1',
            describe: 'Identifying and Classifying',
            color: window.$geometry1
        },
        {
            name: 'chapter 2',
            path: '/learn/geometry/2d-shapes/chapter2',
            describe: 'Sides and Angles',
            color: window.$geometry2

        },
        {
            name: 'chapter 3',
            path: '/learn/geometry/2d-shapes/chapter3',
            describe: 'Area of Shapes',
            color: 'primary'
        },
        {
            name: 'chapter 4',
            path: '/learn/geometry/2d-shapes/chapter4',
            describe: 'Volume of Shapes',
            color: 'primary'
        }
    ]

    const chapterItems = chapters.map((item, index) =>
        <div key={index}>
            <Button onClick={() => navigate(item.path)} className="topicBtn" variant="contained" style={{backgroundColor: item.color}}>{item.name}</Button>
            <p>{item.describe}</p>
        </div>
    );

    return (
        <div>
            <h1>2D shapes</h1>
            <div className='shape-container'>
                <div className="chapter-btn-container">
                    {chapterItems}
                </div>
                <div className='chapter-content'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default TwoDShapePage;