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

    var number = document.getElementById('number').value;
    var direction = document.getElementById('direction').value;
    var street = document.getElementById('street').value;

    let body = JSON.stringify({number: number, direction: direction, street: street})
    debugger
    fetch('/api/spot', {
      method: 'POST',
      body: body,
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
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
