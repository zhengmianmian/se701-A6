import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function TwoDShapePage(props) {
    const navigate = useNavigate();
    const chapters = [
        {
            name: 'chapter1',
            path: '/learn/geometry/2d-shapes/chapter1',
            describe: 'Identifying and Classifying'
        },
        {
            name: 'chapter2',
            path: '/learn/geometry/2d-shapes',
            describe: 'Sides and Angles'
        },
        {
            name: 'chapter3',
            path: '/learn/geometry/2d-shapes',
            describe: 'Some stuff about Geometry'
        },
        {
            name: 'chapter4',
            path: '/learn/geometry/2d-shapes',
            describe: 'Some stuff about Geometry'
        }
    ]

    const chapterItems = chapters.map((item, index) =>
        <div key={index}>
            <Button onClick={() => navigate(item.path)} className="topicBtn" variant="contained" color="primary">{item.name}</Button>
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