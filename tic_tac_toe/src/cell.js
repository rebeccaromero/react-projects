import React from 'react';
import { CellSelect } from './cellSelect';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mark: '', height: '100%' };
    this.selectCell = this.selectCell.bind(this);
  }

  selectCell() {
    if (this.state.mark === '') {
      console.log('Cell chosen');
      console.log(this.props.turn);
      var newMark = this.props.turn%2 === 0 ? 'O' : 'X';
      this.setState({ mark: newMark, height: '0%' });
      this.props.nextTurn();
    }
  }

  render() {
    return (
      <div onClick={this.selectCell} style={{ height: "32%", width: "32%", border: '1px solid black' }}>
        { this.state.mark }
        <CellSelect height={this.state.height}/>
      </div>
    )
  }
}