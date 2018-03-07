import React from 'react';
import { Row } from './row';

export class Checkerboard extends React.Component {

  render() {
    var rows = [];
    for (let i = 0; i < this.props.dims; i++) {
      rows.push(<Row dims={this.props.dims} rowId={i} />);
    }
    return (
      <div>
        <h1>Checkerboard </h1>
        <p>Rows: {this.props.dims}</p>
        <p>Columns: {this.props.dims}</p>
        <div>
          {rows}
        </div>
      </div>
    )
  }
}