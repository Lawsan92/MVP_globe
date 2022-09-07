import React, {useState} from 'react';
import planetCardsData from './../data/planetCardsData.js';
import {FaArrowAltCircleUp, FaArrowAltCircleDown} from 'react-icons/fa';

console.log('planetCardsData:', planetCardsData);

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


  // card carousel

  const [currentCard, setCurrentCard] = useState(0);
  console.log('currentCard:', currentCard);
  const nextCard = () => {
    setCurrentCard(currentCard === planetCardsData.length - 1 ? 0 : currentCard + 1);
  };

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? planetCardsData.length - 1 : currentCard - 1);
  }

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
          <section className='carousel'>
            <FaArrowAltCircleUp className='left-arrow' onClick={prevCard}/>
            {planetCardsData.map((planet, index) => {
              return (
                <div className={index === currentCard ? 'card active' : 'card'} key={index}>
                 {index === currentCard && (<h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>{planet.name}</h3>)}
                {index === currentCard && (   <img id='planet-thumb' src={planet.img}/>)}
                {/* <h3 onClick={() => {func(event.target.innerText); isClicked(true);}}>{planet.name}</h3> */}

              </div>
              )
            })}
            <FaArrowAltCircleDown className='right-arrow' onClick={nextCard}/>
          </section>
          <div class='card'>
              <h3 onClick={() => {makeyourown()}}>Make your own!</h3>
              <img id='planet-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661891307/samples/planet_thumbnails/make_your_own_thumb_wh6w9h.jpg' id='planet-thumb'/>
            </div>
      </div>
    );
  }

}

export default Info;