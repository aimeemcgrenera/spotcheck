import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      zones: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSearch(e){
    e.preventDefault()

    const value = e.target.value;
    this.setState({
      value: value,
    });

    if (value === ''){
      this.setState({
        zones:[],
      });
    }

    Client.search(value => {
      this.setState({
        zones: value
      })
    })
    debugger
  }

    render(){
      const zoneRows = this.state.zones.map((zone) => (
        <tr>
          <td>{zone.status}</td>
          <td>{zone.zone}</td>
          <td>{zone.odd_even}</td>
          <td>{zone.address_range_low}</td>
          <td>{zone.address_range_high}</td>
          <td>{zone.street_direction}</td>
          <td>{zone.street_name}</td>
          <td>{zone.street_type}</td>
        </tr>
      ))

      return(
        <div id='zone-search'>
          <form onSubmit={this.handleSearch} >
            <input
            type="text"
            placeholder="Search Zones..."
            value={this.state.value}
            onChange={this.handleChange}
            />
            <input type="submit" value="Search" ></input>
          </form>
          {zoneRows}
        </div>
      )
  }
}

export default ZoneSearch;
