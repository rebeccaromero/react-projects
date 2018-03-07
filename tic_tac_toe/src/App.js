import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cell } from './cell';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { turn: 1 };
    this.nextTurn = this.nextTurn.bind(this);
  }

  nextTurn() {
    console.log('Next Turn');
    this.setState({ turn: this.state.turn + 1});
    console.log(this.state.turn);
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <div className="board">
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
          <Cell nextTurn={this.nextTurn} turn={this.state.turn} />
        </div>
      </div>
    );
  }
}

export default App;
