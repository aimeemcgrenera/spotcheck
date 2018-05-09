import React from 'react';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      value: value,
    });


  }

render(){
  return(
    <div id='spot-form'>
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          placeholder="Search Zones..."
          value={this.state.value}
          onChange={this.handleChange}
          />
          <input type="submit" value="Search" ></input>
        </form>

        </div>
      )
  }
}

export default SpotForm;
