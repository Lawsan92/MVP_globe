import React from 'react';

const CustomInfo = ({planetInfo, returnHome}) => {
  return (
    <div id = 'info'>
    <div id='stats'>
    <h2>Stats</h2>
    <p><strong>Name:</strong> Name</p>
    <p><strong>Size:</strong> Size</p>
    </div>
    <button style={{border: '1px solid white'}}onClick={() => {returnHome()}}>Home</button>
  </div>
  )
}

export default CustomInfo;