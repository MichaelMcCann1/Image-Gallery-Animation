import React, { useState } from 'react';
import './App.css';
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

function App() {

  const [top, setTop] = useState(50)
  const imageArray = [{src:'house1.jpg', alt:""}, {src:'house2.jpg', alt:""},{src:'house3.jpg', alt:""},{src:'house4.jpg', alt:""},{src:'house5.jpg', alt:""}]

  const moveUp = () => {
    if (top === 50) return
    setTop(t => t + 100)
  }

  const moveDown = () => {
    if (top === -100*(imageArray.length - 1)+50) return
    setTop(t => t - 100)
  }

  return (
    <div className="gallery">
      <a className="githubLink" href="https://github.com/MichaelMcCann1/Image-Gallery-Animation"><img src="Images/GitHub.svg"></img></a>
      <div className="left">
        {imageArray.map((item, index) => (
          <img key={index} style={{top: `${index*100+top}%`}} src={`Images/${item.src}`} alt={item.alt}></img>
        ))}
      </div>
      <div className="right">
        {imageArray.map((item, index) => (
          <img key={index} style={{top: `${-index*100-top+100}%`}} src={`Images/${item.src}`} alt={item.alt}></img>
        ))}
      </div>
      <div className="upArrow" onClick={moveUp}>
        <IoMdArrowDropupCircle/>
      </div>
      <div className="downArrow" onClick={moveDown}>
        <IoMdArrowDropdownCircle/>
      </div>
    </div>
  );
}

export default App;