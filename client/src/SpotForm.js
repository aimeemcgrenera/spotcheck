import React from 'react';

class SpotForm extends React.Component {

  handleClick(event){
    event.preventDefault();

    var number = this.refs.number.value
    var direction = this.refs.direction.value
    var street = this.refs.street.value
    var type = this.refs.type.value

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
            ref="number"
            placeholder="Enter Address Number"
          />
          <input
            type="text"
            ref="direction"
            placeholder="Enter Street Direction"
          />
          <input
            type="text"
            ref="street"
            placeholder="Enter Street Name"
          />
          <input
            type="text"
            ref="type"
            placeholder="Enter Street Type"
          />
          <button onClick={this.handleClick}>Submit</button>
          </form>

          </div>
        )
    }
}

export default SpotForm;
