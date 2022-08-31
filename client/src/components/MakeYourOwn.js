import React from 'react'

const MakeYourOwn = ({mainMenu, buildPlanet, getName, getColor, getSize}) => {

  return (
    <div id='make-your-own'>
      <h1>Make Your Own Planet!</h1>
      <form>
      <input type='text' onChange={ () => {console.log(event.target.value); getName(event.target.value)}}/>name
      <input type='text' onChange={ () => {console.log(event.target.value); getColor(event.target.value)}}/>color
      <input type='text' onChange={ () => {console.log(event.target.value); getSize(event.target.value)}}/>size 'X Earths'
      </form>
      <button onClick={buildPlanet}>Build!</button>
      <button onClick={mainMenu}>Home</button>
    </div>
  )
}

export default MakeYourOwn;