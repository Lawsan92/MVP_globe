import React from 'react';
import ReactDOM from 'react-dom';
import Globe from './components/Globe.js';
import Info from './components/Info.js';
const axios = require('axios');
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      planetName: '',
      data: []
    }
    this.alertFunc = this.alertFunc.bind(this);
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

  render (props) {
  return (
    <div id='app'>
      <Info func={this.alertFunc} data={this.state.data}/>
      <Globe planetName={this.state.planetName} />
    </div>
  );
}
}

ReactDOM.render(<App/>, document.getElementById('root'));
