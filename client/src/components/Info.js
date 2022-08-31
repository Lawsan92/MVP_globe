import React, {useState} from 'react';

const Info = ({func, data, makeyourown}) => {
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
  // console.log('planet:', planet);
  // console.log('alertFunc:', func);

  const [card, isClicked] = useState(false);

  if (card) {
    return (
      <div id = 'info'>
        <div id='stats'>
        <h2>Stats</h2>
        <p><strong>Diameter:</strong> {planet.diameter}</p>
        <p><strong>Mass:</strong> {planet.mass}</p>
        <p><strong>Order from the Sun:</strong> {planet.order_from_the_sun}</p>
        <p><strong>Volume:</strong> {planet.volume}</p>
        <p><strong>Gravity:</strong> {planet.gravity}</p>
        <p><strong>Ditance from the sun:</strong> {planet.distance_from_the_sun}</p>
        </div>
        <button style={{border: '1px solid white'}}onClick={() => {isClicked(false)}}>Home</button>
      </div>
    );
  } else {
    return (
      <div id ='info'>
        <h1>Choose a planet</h1>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Mercury</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876827/samples/planet_thumbnails/mercury_thumb_ised0u.jpg'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Venus</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876831/samples/planet_thumbnails/venus_thumb_m87ck9.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Mars</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876837/samples/planet_thumbnails/mars_thumb_qleleh.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Earth</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876852/samples/planet_thumbnails/earth_thumb_abbcfg.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Jupiter</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876862/samples/planet_thumbnails/jupiter_thumb_ded7t1.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Saturn</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876847/samples/planet_thumbnails/saturn_thumb_jpuhcy.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Uranus</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876842/samples/planet_thumbnails/uranus_thumb_qfraon.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>Neptune</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661876857/samples/planet_thumbnails/neptune_thumb_vpm1fn.jpg' id='planet-thumb'/>
          </div>
          <div class='card'>
            <h3 onClick={() => {makeyourown()}}>Make your own!</h3>
            <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661891307/samples/planet_thumbnails/make_your_own_thumb_wh6w9h.jpg' id='planet-thumb'/>
          </div>
      </div>
    );
  }

}

export default Info;