import React from 'react';

const Info = ({func, data}) => {
  var planet;
  if (data[0]) {
    planet = data[0]
  } else {
    planet = {id: '1', name: 'Earth', diameter: '12,756km', volume: '108.32 X 10^10km^3', gravity: '9.8 m/s^2',
    diameter: "12,756km",
    distance_from_the_sun: "150 million km.",
    gravity: "9.8 m/s^2",
    id: "1",
    mass: "5.97 X 10^24 kg",
    name: "Earth",
    order_from_the_sun: "3rd",
    volume: "108.32 X 10^10km^3"
  };
  }
  console.log('planet:', planet);
  console.log('alertFunc:', func);
  return (
    <div id ='info'>
      <h1>Choose a planet</h1>
      <h3 onClick={func}>Mercury</h3>
      <h3 onClick={func}>Venus</h3>
       <h3 onClick={func}>Mars</h3>
       <h3 onClick={func}>Earth</h3>
       <h3 onClick={func}>Jupiter</h3>
       <h3 onClick={func}>Saturn</h3>
       <h3 onClick={func}>Uranus</h3>
       <h3 onClick={func}>Neptune</h3>

       <h2>Stats</h2>
       <div id='stats'>
        <p><strong>Diameter:</strong> {planet.diameter}</p>
        <p><strong>Mass:</strong> {planet.mass}</p>
        <p><strong>Order from the Sun:</strong> {planet.order_from_the_sun}</p>
        <p><strong>Volume:</strong> {planet.volume}</p>
        <p><strong>Gravity:</strong> {planet.gravity}</p>
        <p><strong>Ditance from the sun:</strong> {planet.distance_from_the_sun}</p>
        </div>
    </div>
  );
}

export default Info;