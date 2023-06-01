import { useState } from "react";
import Link from '@mui/material/Link';
function ResourcesPage(props) {
    const initialLinks = [
        {
            linkTitle: '3D Shapes',
            link: 'https://www.cuemath.com/geometry/3d-shapes/'
        },
        {
            linkTitle: '3D Volume',
            link: 'https://schooltutoring.com/help/calculating-volume-for-various-3d-objects/'
        },
        {
            linkTitle: '3D Areas',
            link: 'https://www.vedantu.com/maths/area'
        }
    ]
    const [links, setLinks] = useState(initialLinks);
    const linkItems = links.map((item,index)=>
        <div style={{ margin:"15px", padding:"5px", fontSize:"20px" }} >
            <Link key={index} href={item.link} target="blank" >{item.linkTitle}</Link>
        </div> 
    );
    return (
        <div>
            <h1>Further math-learning</h1>
            <div>
                {linkItems}
            </div>
        </div>
    );
}

export default ResourcesPage;