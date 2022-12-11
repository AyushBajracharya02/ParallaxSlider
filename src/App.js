import './App.css';
import Image from './Components/Image';
import images from './Data/ImageData';
import {useState, useLayoutEffect, useRef} from 'react';

function App() {
  const [state,setState] = useState({
    drag: false,
    down_position: 0,
    move_length: 0,
    percentage: 0,
    max_position: window.innerWidth / 2,
  });
  const [style,setStyle] = useState({});
  function handleMouseDown(e) {
    setState((prevState) => {
      return {
        ...prevState,
        down_position: e.clientX,
        drag: true
      }
    });
  }
  function handleMouseMove(e) {
    if(state.drag){
      setState((prevState)=>{
        return {
          ...prevState,
          move_length: e.clientX-prevState.down_position,
          percentage: prevState.move_length/prevState.max_position * 100
        }
      })
      setStyle({
        transform: `translate(${state.percentage}%,-50%)`
      })
    }
  }
  function handleMouseUp(e){
    setState((prevState) => {
      return {
        ...prevState,
        drag: false
      }
    });
  }
  return (
    <div className="App" onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} style={style}>
      {images.map((imgname) => <Image percentage={state.percentage} imgname={imgname} key={imgname}/>)}
    </div>
  );
}

export default App;
