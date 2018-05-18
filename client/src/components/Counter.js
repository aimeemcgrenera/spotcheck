import React, { Component } from 'react';
import ZoneList from './ZoneList'

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      counter: this.state.counter +=1
    })
  }

  render() {
    const zones = this.props.zones

    return (
      <div>
        <button onClick={this.handleClick}>Like</button> {this.state.counter}
      </div>
    );
  }
}

export default Counter;
