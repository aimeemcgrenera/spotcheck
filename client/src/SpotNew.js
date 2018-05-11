import React from 'react';

class SpotNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      direction: '',
      street: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(event){
    event.preventDefault();

    let number = document.getElementById('number').value;
    let direction = document.getElementById('direction').value;
    let street = document.getElementById('street').value;
    let body = JSON.stringify({number: number, direction: direction, street: street});

    fetch('/api/spot', {
      method: 'POST',
      accept: 'application/json',
      body: body,
    }).then((res) => res.json())
    .then((data) => alert('Data Sent'))
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
          {this.state.spots}
          </div>
        )
    }
}

export default SpotNew;
