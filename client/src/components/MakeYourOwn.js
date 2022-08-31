import React from 'react'

const MakeYourOwn = ({mainMenu, buildPlanet, getName, getColor, getSize, getTexture}) => {

  return (
    <div id='make-your-own'>
      <h1>Make Your Own Planet!</h1>
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
      <input id ='item' type='text' onChange={ () => {console.log(event.target.value); getSize(event.target.value)}}/>
      </form>
      <div>
        <h4>Textures</h4>
        <div id='textures'>
        <div id='rocky'>
          <p>rocky</p>
          <img id='texture-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661916089/samples/planet_thumbnails/textures/8k_mars_nq2rri.jpg' onClick={() => {console.log('event:', event.target.currentSrc); getTexture(event.target.currentSrc)}}></img>
          </div>
        <div id='gaseous'>
          <p>gaseous</p>
          <img id='texture-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661916056/samples/planet_thumbnails/textures/8k_saturn_l1lhd6.jpg' onClick={() => {console.log('event:', event.target.currentSrc); getTexture(event.target.currentSrc)}}></img>
        </div>
        <div id='neon'>
          <p>neon</p>
          <img id='texture-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661916099/samples/planet_thumbnails/textures/2k_neptune_q24lo3.jpg' onClick={() => {console.log('event:', event.target.currentSrc); getTexture(event.target.currentSrc)}}></img>
        </div>
        <div id='earth-like'>
          <p>earth-like</p>
          <img id='texture-thumb' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1661916035/samples/planet_thumbnails/textures/8k_earth_daymap_fia1el.jpg' onClick={() => {console.log('event:', event.target.currentSrc); getTexture(event.target.currentSrc)}}></img>
        </div>
        </div>
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