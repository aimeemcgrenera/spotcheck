import React from 'react';

class SpotForm extends React.Component {

  handleClick(){
    var number = this.refs.number.value
    var direction = this.refs.direction.value
    var street = this.refs.street.value
    var type = this.refs.type.value
    $.ajax({
      url: '/api/spot',
      type: "POST",
      data: {spot: {}}
    })
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
(:address_number, :street_direction, :street_name, :street_type)
export default SpotForm;