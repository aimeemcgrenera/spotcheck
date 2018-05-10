import React from 'react';

class SpotForm extends React.Component {

  handleClick(event){
    event.preventDefault();

    var number = document.getElementById('number').value;
    var direction = document.getElementById('direction').value;
    var street = document.getElementById('street').value;

    fetch(`api/spot`, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({address_number:number, street_direction:direction, street_name:street})
      }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

  render(){

    return(
      <div id='spot-form'>
      <h2>Enter your Parking Spot Address:</h2>
        <form onSubmit={this.handleSubmit} >
          <p><input
            type="text"
            id="number"
            placeholder="Enter Address Number"
          /></p>
          <p><input
            type="text"
            id="direction"
            placeholder="Enter Street Direction"
          /></p>
          <p><input
            type="text"
            id="street"
            placeholder="Enter Street Name"
          /></p>
          <p><button onClick={this.handleClick}>Submit</button></p>

          </form>

          </div>
        )
    }
}

export default SpotForm;
