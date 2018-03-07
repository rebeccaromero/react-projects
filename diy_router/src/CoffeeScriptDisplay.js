import React from 'react';

export class CoffeeScriptDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.lowerCount = this.lowerCount.bind(this);
  }

  lowerCount() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    var _this = this;
    console.log('Butter');
    var stateObj = { foo: 'bar' };
    var countDown = setInterval(() => {
      _this.lowerCount();
      console.log(_this.state.count);
      if (_this.state.count === 0 ) {
        console.log('She Cannay hold much longer!');
        clearInterval(countDown);
        // history.pushState(stateObj, "title", 'javascript');
        window.location.href = 'http://localhost:3000/javascript';
        _this.setState({ count: 5 });
      }
    }, 1000);
    
    // setTimeout(() => {window.location.href = 'http://localhost:3000/javascript'}, 2000)
  }

  render() {
    return (
      <p>CoffeeScript is a programming language that transcompiles to JavaScript, so we'll be slapped back to JavaScript in {this.state.count}</p>
    )
  }
}