import React from 'react';

export class CellSelect extends React.Component {


  render() {
    return <div onClick={this.props.onClick} style={{ height: this.props.height, width: '100%', margin: 0, padding: 0 }}></div>
  }
}