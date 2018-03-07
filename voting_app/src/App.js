import React, { Component } from 'react';
import { Counter } from './counterDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter name="React"/>
        <Counter name="Vue"/>
        <Counter name="Angular"/>
        <Counter name="Ember"/>
      </div>
    );
  }
}

export default App;
