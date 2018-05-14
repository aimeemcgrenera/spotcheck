import React from 'react';
import ZoneSearch from './ZoneSearch';

class SpotNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      direction: '',
      street: '',
      zones: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(event){
    event.preventDefault();

    let number = document.getElementById('number').value;
    let direction = document.getElementById('direction').value;
    let street = document.getElementById('street').value;
    let body = JSON.stringify({address_number: number, street_direction: direction, street_name: street});

    fetch('/api/spot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: body,
      }).then((res) => res.json())
      .then((data) => ZoneSearch.search(data.odd_even, data.street_direction, data.street_name))
      .then(function(data) {
        let zones = data
        this.setState({zones: zones})
      })
      .catch((err) => console.log(err))
    }

  render(){
    return(
      <div id='SpotNew'>
      <h2>Enter your Parking Spot Address:</h2>
        <form onSubmit={this.handleSubmit} >
          <p><input
            type="text"
            id="number"
            name="number"
            placeholder="Enter Address Number"
          /></p>
          <p><input
            type="text"
            id="direction"
            name="direction"
            placeholder="Enter Street Direction"
          /></p>
          <p><input
            type="text"
            id="street"
            name="street"
            placeholder="Enter Street Name"
          /></p>
          <p><button>Submit</button></p>

          </form>
          {this.state.zones}
          </div>
        )
    }
}

export default SpotNew;
