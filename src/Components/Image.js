import '../Styles/Image.css';
import {useState, useEffect} from 'react';

export default function Image({imgname, percentage}) {
    const [style,setStyle] = useState({
        objectPosition: percentage
    });
    useEffect(()=>{
        setStyle({objectPosition: `${-percentage}%`})
    },[percentage]);
    return (
        <div className="image" style={style}>
            <img style={style} draggable="false" src={require(`../Images/Landscape/${imgname}`)} alt='cat'/>
        </div>
    )
}