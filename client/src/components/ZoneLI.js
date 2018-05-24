import React, {Component} from 'react'

class ZoneLI extends Component {
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
    const { zone } = this.props

    return (
      <div key={zone.id}>
      <p class="text-danger">Zone number: {zone.zone}</p>
      <h6>Number Range: {zone.address_range_low}  -  {zone.address_range_high}</h6>
      <h6>Street: {zone.street_direction} {zone.street_name}</h6>
      -----------------------------------------
      <button onClick={this.handleClick}>Like</button>{this.state.counter}
      </div>
    )
  }
}

export default ZoneLI
