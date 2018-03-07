import React from 'react';
import { Cell } from './cell';

export class Row extends React.Component {
  render() {
    var cells = [];
    for (let i = 0; i < this.props.dims; i++) {
      cells.push(<Cell cellId={i} rowId={this.props.rowId} style={{ display: 'inlineBlock'}}/>)
    }
    return (

        <div style={{ height: 20 }}>
          {cells}
        </div>

    )
  }
}