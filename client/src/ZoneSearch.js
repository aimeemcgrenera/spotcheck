import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
    const value = this.state.value

    this.setState({
      value: value,
    });

    Client.search(value, (zones) => {
      this.setState({
        zones: zones
      })
    });
  }

render(){
  return(
    <div id='zone-search'>
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

export default ZoneSearch;
