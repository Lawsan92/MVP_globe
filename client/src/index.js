// Global Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import { Globe, Info, MakeYourOwn, CustomPlanet, CustomInfo, CustomGlobe, NavBar } from './components/Imports.js';
const axios = require('axios');
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      planetName: '',
      data: [],
      makeyourown: false,
      customPlanet: {
        name: '',
        color: '',
        size: [0, 32, 32],
        texture: '',
        rings: '',
        ringColor: '',
      },
      hasRings: false,
      build: false
    }
    this.alertFunc = this.alertFunc.bind(this);
    this.makeyourownClick = this.makeyourownClick.bind(this);
    this.mainMenu = this.mainMenu.bind(this);
    this.buildPlanet= this.buildPlanet.bind(this);
    this.newPlanet = this.newPlanet.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.getName = this.getName.bind(this);
    this.getColor = this.getColor.bind(this);
    this.getSize = this.getSize.bind(this);
    this.getTexture = this.getTexture.bind(this);
    this.hasRings = this.hasRings.bind(this);
    this.ringColor = this.ringColor.bind(this);
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: `/planet/?name=${this.state.planetName}`,
    })
      .then((res) => {
        console.log('response:', res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  alertFunc = (event) => {
    console.log('event:', event);
    // console.log(event.target.innerText);
    this.setState({
      planetName: event
    })

    axios({
      method: 'get',
      url: `/planet/?name=${event}`,
    })
      .then((res) => {
        console.log('response:', res.data);
        this.setState({
          data: res.data
        });
      })
      .catch((err) => {
        throw err;
      });

  };

  // Click Events
  makeyourownClick = () => {
    this.setState({
      makeyourown: true
    })
  }

  mainMenu = () => {
    this.setState({
      makeyourown: false
    })
  }

  buildPlanet = () => {
    this.setState({
      build: true
    })
  }

  returnHome = () => {
    this.setState({
      build: false
    })
  }

  // Planet Criteria

  getName = (e) => {
    this.setState( prevState => {
      let customPlanet = Object.assign({}, prevState.customPlanet);
      customPlanet.name = e;
      return {customPlanet};
    })
  }

  getColor = (e) => {
    this.setState( prevState => {
      let customPlanet = Object.assign({}, prevState.customPlanet);
      customPlanet.color = e;
      return {customPlanet};
    })
  }

  getSize = (e) => {
    this.setState( prevState => {
      let customPlanet = Object.assign({}, prevState.customPlanet);
      customPlanet.size[0] = e/2;
      return {customPlanet};
    })
  }

  getTexture = (e) => {
    this.setState( prevState => {
      let customPlanet = Object.assign({}, prevState.customPlanet);
      customPlanet.texture = e;
      return {customPlanet};
    })
  }

  hasRings = (e) => {
    this.setState({
      hasRings: true
    })
    this.setState( prevState => {
      let customPlanet = Object.assign({}, prevState.customPlanet);
      customPlanet.rings = e;
      return {customPlanet};
    })
  }

  ringColor = (e) => {
    this.setState( prevState => {
      let customPlanet = Object.assign({}, prevState.customPlanet);
      customPlanet.ringColor = e;
      return {customPlanet};
    })
  }

  newPlanet = () => {
    if (this.state.build) {
      return (
        <div id='app'>
          <NavBar/>
          <div id='app-body'>
            <CustomInfo
            returnHome={this.returnHome}
            name={this.state.customPlanet.name}
            size={this.state.customPlanet.size}/>
            <CustomGlobe
            customPlanet={this.state.customPlanet}
            name={this.state.customPlanet.name}
            size={this.state.customPlanet.size}
            color={this.state.customPlanet.color}
            texture={this.state.customPlanet.texture}
            rings={this.state.customPlanet.rings}
            ringColor={this.state.customPlanet.ringColor}
          />
          </div>
        </div>
      )
    } else {
      return this.state.makeyourown === true ?
    ( <div id='app'>
      <NavBar/>
      <div id='app-body'>
        <MakeYourOwn
        mainMenu={this.mainMenu}
        buildPlanet={this.buildPlanet}
        getName={this.getName}
        getColor={this.getColor}
        getSize={this.getSize}
        getTexture={this.getTexture}
        hasRings={this.hasRings}
        ringColor={this.ringColor}
        />
        <Globe planetName={this.state.planetName} />
      </div>
    </div>)
    :
   (
    <div id='app'>
      <NavBar/>
      <div id='app-body'>
        <Info
        func={this.alertFunc}
        data={this.state.data}
        makeyourown={this.makeyourownClick}/>
        <Globe planetName={this.state.planetName} />
      </div>
    </div>);
    }
  }

  render (props) {
    return (
      <div id='app'>
        {this.newPlanet()}
      </div>
    )
}
}

ReactDOM.render(<App/>, document.getElementById('root'));


