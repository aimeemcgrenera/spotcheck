import React from 'react';

class SpotForm extends React.Component {

  handleClick(event){
    event.preventDefault();

    var number = document.getElementById('number').value;
    var direction = document.getElementById('direction').value;
    var street = document.getElementById('street').value;
    var type = document.getElementById('type').value;

    fetch(`api/spot`, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({address_number:number, street_direction:direction, street_name:street, street_type:type})
      }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    }

  render(){

    return(
      <div id='spot-form'>
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

export default SpotForm;
