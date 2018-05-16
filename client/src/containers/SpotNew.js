import React from 'react';
import ZoneSearch from '../components/ZoneSearch';
import ZoneList from '../components/ZoneList';

class SpotNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      direction: '',
      street: '',
      zones: []
    };
  }

  handleNumberChange = event => {
    event.preventDefault();

    this.setState({
      number: event.target.value
    })
  }

  handleDirectionChange = event => {
    event.preventDefault();

    this.setState({
      direction: event.target.value
    })
  }

  handleStreetChange = event => {
    event.preventDefault();

    this.setState({
      street: event.target.value
    })
  }


  handleSubmit = event => {
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
      .then(data => {
        this.setState({
          zones: data
        })
        console.log(this.state)
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
            onChange={this.handleNumberChange}
            placeholder="Enter Address Number"
          /></p>
          <p><input
            type="text"
            id="direction"
            name="direction"
            onChange={this.handleDirectionChange}
            placeholder="Enter Street Direction"
          /></p>
          <p><input
            type="text"
            id="street"
            name="street"
            onChange={this.handleStreetChange}
            placeholder="Enter Street Name"
          /></p>
          <p><button class="btn btn-outline-success">Submit</button></p>
          </form>
          <h3>Zones:</h3>
          <ZoneList zones={this.state.zones}/>
          </div>
        )
    }
}

export default SpotNew;
