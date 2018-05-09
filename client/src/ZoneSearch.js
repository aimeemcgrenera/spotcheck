import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      even_odd = '',
      direction = '',
      street = '',
      type = '',
      zones: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    const value = this.state.value

    this.setState({
      value: value,
    });

    Client.search(value, (zones) => {
      this.setState({
        zones: zones
      })
    });
  }

render(){
  return(
    <div id='zone-search'>
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          id="number"
          placeholder="Enter Address Number"
        />
        <input
          type="text"
          id="direction"
          placeholder="Enter Street Direction"
        />
        <input
          type="text"
          id="street"
          placeholder="Enter Street Name"
        />
        <input
          type="text"
          id="type"
          placeholder="Enter Street Type"
        />
        <button onClick={this.handleClick}>Submit</button>
        </form>

        </div>
      )
  }
}

export default ZoneSearch;
