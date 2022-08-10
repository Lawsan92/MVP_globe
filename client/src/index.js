import React from 'react';
import ReactDOM from 'react-dom';
import Globe from './components/Globe.js';
const App = () => {
  return (
    <div id='app'>
      <Globe/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
