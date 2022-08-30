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
        <div class='card' onClick={func}>
          <h3>Mercury</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876827/samples/planet_thumbnails/mercury_thumb_ised0u.jpg'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Venus</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876831/samples/planet_thumbnails/venus_thumb_m87ck9.jpg' id='planet-thumb'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Mars</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876837/samples/planet_thumbnails/mars_thumb_qleleh.jpg' id='planet-thumb'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Earth</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876852/samples/planet_thumbnails/earth_thumb_abbcfg.jpg' id='planet-thumb'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Jupiter</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876862/samples/planet_thumbnails/jupiter_thumb_ded7t1.jpg' id='planet-thumb'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Saturn</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876847/samples/planet_thumbnails/saturn_thumb_jpuhcy.jpg' id='planet-thumb'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Uranus</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876842/samples/planet_thumbnails/uranus_thumb_qfraon.jpg' id='planet-thumb'/>
        </div>
        <div class='card' onClick={func}>
          <h3>Neptune</h3>
          <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876857/samples/planet_thumbnails/neptune_thumb_vpm1fn.jpg' id='planet-thumb'/>
        </div>
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