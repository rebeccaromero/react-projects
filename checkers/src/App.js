import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkerboard } from './checkerboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: 0 };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <div className="App">
        Select Size: <input type="number" onChange={this.handleInput} max="35" min="0" />
        <Checkerboard dims={this.state.userInput} />
      </div>
    );
  }
}

export default App;
