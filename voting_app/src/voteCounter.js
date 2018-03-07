import React from 'react';

export class Button extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  

  render() {
    return <button onClick={this.props.onClick} style={{ backgroundColor: 'blue', color: 'white'}}>+</button>
  }
}