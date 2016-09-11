import * as React from 'react';
import { Component, EventHandler } from 'react';

type ThumbState = {
  value?: boolean
}

export class Thumb extends Component<void,ThumbState> {

  constructor() {

    super();

    this.state = {
      value: false
    };

  }

  render() {

    return (
      <h1 onClick={this.updateVote.bind(this)}>
        { this.state.value ? '👍' : '👎' }
      </h1>
    );

  }

  updateVote( event:any ) {

    event.preventDefault();

    this.setState({ value: !this.state.value });

  }

};

