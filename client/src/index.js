import React from 'react';
import ReactDOM from 'react-dom';
import Globe from './components/Globe.js';
import Info from './components/Info.js';
import MakeYourOwn from './components/MakeYourOwn.js';
import CustomPlanet from './components/CustomPlanet.js';
import CustomInfo from './components/CustomInfo.js';
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
        size: [],
      },
      build: false
    }
    this.alertFunc = this.alertFunc.bind(this);
    this.makeyourownClick = this.makeyourownClick.bind(this);
    this.mainMenu = this.mainMenu.bind(this);
    this.buildPlanet= this.buildPlanet.bind(this);
    this.newPlanet = this.newPlanet.bind(this);
    this.returnHome = this.returnHome.bind(this);
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

  newPlanet = () => {
    if (this.state.build) {
      return (
        <div id='app'>
          <CustomInfo returnHome={this.returnHome}/>
          <CustomPlanet customPlanet={this.state.customPlanet}/>
        </div>
      )
    } else {
      return this.state.makeyourown === true ?
    ( <div id='app'>
      <MakeYourOwn mainMenu={this.mainMenu} buildPlanet={this.buildPlanet}/>
      <Globe planetName={this.state.planetName} />
    </div>)
    :
   (
    <div id='app'>
      <Info func={this.alertFunc} data={this.state.data} makeyourown={this.makeyourownClick}/>
      <Globe planetName={this.state.planetName} />
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


// <MakeYourOwn/>