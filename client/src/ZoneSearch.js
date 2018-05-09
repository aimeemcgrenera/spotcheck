import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      even_odd: '',
      direction: '',
      street: '',
      type: '',
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

    var even_odd = document.getElementById('number').value;
    var direction = document.getElementById('direction').value;
    var street = document.getElementById('street').value;
    var type = document.getElementById('type').value;

    this.setState({
      even_odd: even_odd,
      direction: direction,
      street: street,
      type: type,
    });

    Client.search(even_odd, direction, street, type)
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
