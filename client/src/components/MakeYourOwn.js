import React from 'react'

const MakeYourOwn = ({mainMenu, buildPlanet}) => {

  const getText = () => {
    event.preventDefault();
  }
  return (
    <div id='make-your-own'>
      <h1>Make Your Own Planet!</h1>
      <form>
      <input type='text' onChange={ () => {console.log(event.target.value)}}/>name
      <input type='text' onChange={ () => {console.log(event.target.value)}}/>color
      <input type='text' onChange={ () => {console.log(event.target.value)}}/>size
      <input type='text' onChange={ () => {console.log(event.target.value)}}/>Rings
      </form>
      <button onClick={buildPlanet}>Build!</button>
      <button onClick={mainMenu}>Home</button>
    </div>
  )
}

export default MakeYourOwn;