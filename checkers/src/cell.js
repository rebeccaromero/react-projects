import React from 'react';

export class Cell extends React.Component {
  render() {
    var color = (this.props.cellId + this.props.rowId)%2 === 0 ? 'black' : 'red';
    return <div style={{backgroundColor: color, height: 20, width: 20, display: 'inline-block'}} id={this.props.cellId}></div>
  }
}