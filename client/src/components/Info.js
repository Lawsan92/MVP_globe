import React from 'react';

const Info = ({func}) => {
  console.log('alertFunc:', func);
  return (
    <div id ='info'>
      <h1>Choose a planet</h1>
      <h3 onClick={func}>Mercury</h3>
       <h3 onClick={func}>Mars</h3>
       <h3 onClick={func}>Earth</h3>
       <h3 onClick={func}>Jupiter</h3>
       <h3 onClick={func}>Saturn</h3>
       <h3 onClick={func}>Uranus</h3>
       <h3 onClick={func}>Neptune</h3>
    </div>
  );
}

export default Info;