import React from 'react';
import './navigation.css';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    console.log('CLICK CLICK, SUCKA');
    
  }

  render() {
    return (
      <div>
        <a href="/javascript">Javascript</a>
        <a href="haskell">Haskell</a>
        <a onClick={this.handleClick} href="coffeescript">CoffeeScript</a>
      </div>
    )
  }
}