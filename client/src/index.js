import React from 'react';
import ReactDOM from 'react-dom';
import Globe from './components/Globe.js';
import Info from './components/Info.js';
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      planetName: '',
    }
    this.alertFunc = this.alertFunc.bind(this);
  }

  alertFunc = (event) => {
    console.log(event.target.innerText);
    this.setState({
      planetName: event.target.innerText
    })

  };

  render (props) {
  return (
    <div id='app'>
      <Info func={this.alertFunc}/>
      <Globe planetName={this.state.planetName}/>
    </div>
  );
}
}

ReactDOM.render(<App/>, document.getElementById('root'));
