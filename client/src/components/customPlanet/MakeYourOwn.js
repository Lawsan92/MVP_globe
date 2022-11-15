import React, {useState} from 'react'
import {planetTextures, ringTextures} from './../../data/texturesData.js';

const MakeYourOwn = ({ mainMenu, buildPlanet, getName, getColor, getSize, getTexture, hasRings, ringColor }) => {

  const [style, setStyle] = useState(false);

  const changeStyle = () => {
    setStyle(prevStyle => !prevStyle);
  }

  return (
    <div id='make-your-own'>
      <h1>Make Your <br/>Own Planet!<br/></h1>
      <form>
        <div>
          <h4>name</h4>
          <input id ='item'type='text' onChange={ () => {console.log(event.target.value); getName(event.target.value)}}/>
        </div>
        <div>
          <h4>color</h4>
      <input id ='item' type='text' onChange={ () => {console.log(event.target.value); getColor(event.target.value)}}/>
        </div>
        <div>
          <h4>size 'X Earths'</h4>
        </div>
      <input id ='item' type='text' onChange={ () => {let arg = [Number(event.target.value/2), 32, 32];
        console.log(arg);
        getSize(arg)}}/>
      </form>
      <div>
        <h4>Textures</h4>
        <div id='textures'>
        {planetTextures.map((texture) => {
          return(
            <div id='texture' key={texture.type}>
              <p>{texture.type}</p>
              <img
              id = {style ? 'texture-thumb-clicked' : 'texture-thumb'}
              src={texture.img}
              onClick={() => {
              console.log('event:', event.target.currentSrc);
              getTexture(event.target.currentSrc);
              changeStyle();
              }}/>
            </div>
            )
        })}
        </div>
      </div>
      <div>
        <h4>Rings</h4>
        {/* <input type='radio'/> */}
        <div id='rings'>
        {ringTextures.map((texture) => {
          return(
            <div id='ring' key={texture.type}>
            <p>{texture.type}</p>
            <img
            id = {style ? 'texture-thumb-clicked' : 'texture-thumb'}
            src={texture.img}
            onClick={() => {
              console.log('event:', event.target.currentSrc); hasRings(event.target.currentSrc);
              changeStyle();
              }}/>
          </div>
            )
        })}
        </div>
      </div>
      <div id='ring-color'>
          <h4>Ring color</h4>
      <input id ='item' type='text' onChange={ () => {console.log(event.target.value); ringColor(event.target.value)}}/>
        </div>
      <div id='buttons'>
        <button onClick={buildPlanet}>Build!</button>
        <button onClick={mainMenu}>Home</button>
      </div>
    </div>
  )
}

export default MakeYourOwn;


// https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react