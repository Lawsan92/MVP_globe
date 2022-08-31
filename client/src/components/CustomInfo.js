import React from 'react';

const CustomInfo = ({planetInfo, returnHome, name, size}) => {
  return (
    <div id = 'info'>
    <div id='stats'>
    <h2>Stats</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Size:</strong> x{size[0] * 2} earths</p>
    </div>
    <button style={{border: '1px solid white'}}onClick={() => {returnHome()}}>Home</button>
  </div>
  )
}

export default CustomInfo;