// Global Modules
import React, { useState, useEffect } from 'react';

// Containers
import { Globe, Info, MakeYourOwn, CustomPlanet, CustomInfo, CustomGlobe, NavBar, Footer, Landing } from './Imports.js';
const axios = require('axios');

const Home = ({ userAuth, getUserAuth, authorized }) => {
  // planet's state
  const [state, updateState] = useState ({
    planetName: '',
    data: [],
    makeyourown: false,
    hasRings: false,
    build: false,
    customPlanet: {
      name: '',
      color: '',
      size: [0, 32, 32],
      texture: '',
      rings: '',
      ringColor: '',
    },
  });

  //  retreives the planet data from the database
  useEffect (() => {
    axios({
      method: 'get',
      url: `/planet/?name=${state.planetName}`,
    })
    .then((res) => {
      console.log('response:', res.data);
    })
    .catch((err) => {
      throw err;
    });
  });

  // changes the planet skins, size and data when clicking on a card
  const alertFunc = (event) => {
    axios({
      method: 'get',
      url: `/planet/?name=${event}`,
    })
    .then((res) => {
      console.log('response:', res.data);
      updateState({ ...state,
        data: res.data,
        planetName: event
      });
    })
    .catch((err) => {
      throw err;
    });
    console.log('event:', event, 'state:', state);
  };

  // Click Events
  const makeyourownClick = () => {
    updateState({ ...state,
      makeyourown: true
    })
  }

  const mainMenu = () => {
    updateState({ ...state,
      makeyourown: false
    })
  }

  const buildPlanet = () => {
    updateState({ ...state,
      build: true
    })
  }

  const returnHome = () => {
    updateState({ ...state,
      build: false
    })
  }

  // retrives planet criteria for CUSTOM planets

  const getName = (e) => {
    updateState({ ...state,
      customPlanet: {...state.customPlanet, name: e }
    })
  }

  const getColor = (e) => {
    updateState({ ...state,
      customPlanet: {...state.customPlanet, color: e }
    })
  }

  const getSize = (e) => {
    updateState({ ...state,
      customPlanet: {...state.customPlanet, size: e }
    })
  }

  const getTexture = (e) => {
    updateState( { ...state,
      customPlanet: {...state.customPlanet, texture: e }
    })
  }

  const hasRings = (e) => {
    updateState({ ...state,
      hasRings: true
    })

    updateState( { ...state,
      customPlanet: {...state.customPlanet, rings: e }
    })
  }

  const ringColor = (e) => {
    updateState( { ...state,
      customPlanet: {...state.customPlanet, ringColor: e }
    })
  }

  // Main function that renders the planet onto the page
  const newPlanet = () => {
    if (state.build) { // if we're done building our custom planet
      return (
        <div id='home'>
          <NavBar userAuth={userAuth} getUserAuth={getUserAuth} authorized={authorized} />
          <div id='home-body'>
            <CustomInfo
            returnHome={returnHome}
            name={state.customPlanet.name}
            size={state.customPlanet.size}/>
            <CustomGlobe
            customPlanet={state.customPlanet}
            name={state.customPlanet.name}
            size={state.customPlanet.size}
            color={state.customPlanet.color}
            texture={state.customPlanet.texture}
            rings={state.customPlanet.rings}
            ringColor={state.customPlanet.ringColor}
          />
          </div>
          <Footer/>
        </div>
      )
    } else {
      return state.makeyourown === true ? // when we click on the 'make your own planet card'
    ( <div id='home'>
      <NavBar userAuth={userAuth} getUserAuth={getUserAuth} authorized={authorized} />
      <div id='home-body'>
        <MakeYourOwn
        mainMenu={mainMenu}
        buildPlanet={buildPlanet}
        getName={getName}
        getColor={getColor}
        getSize={getSize}
        getTexture={getTexture}
        hasRings={hasRings}
        ringColor={ringColor}
        />
        <Globe planetName={state.planetName} />
      </div>
      <Footer/>
    </div>)
    : // main menu
   (
    <div id='home'>
      <NavBar userAuth={userAuth} getUserAuth={getUserAuth} authorized={authorized} />
      <div id='home-body'>
        <Info
        func={alertFunc}
        data={state.data}
        makeyourown={makeyourownClick}/>
        <Globe planetName={state.planetName} />
      </div>
      <Landing/>
      <Footer/>
    </div>);
    }
  }

  return (
    <div id='container'>
      {newPlanet()}
    </div>
  );

}

export default Home;
