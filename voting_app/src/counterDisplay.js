import React from 'react';
import { Button } from './voteCounter';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.vote = this.vote.bind(this);
  }

  vote() {
    let upvote = this.state.count + 1;
    this.setState({ count: upvote });
  }  

  render() {
    return (
      <div style={{ border: '1px solid black', width: 300}}>
        <p>{this.state.count}</p>
        <p>{this.props.name}</p>
        <Button onClick={this.vote} />
      </div>
    )
  }
}