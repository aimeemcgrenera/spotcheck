import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      zones: [],
    };

  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSearch = (e) => {
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

    fetch(`api/zone?street_name=${value}`)
    .then(results => {
      return results.json();
    }).then(data => {
      let zones = data.results.map((zone) => {
        return(
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
        )
      })
      this.setState({zones: zones});
      console.log("state, this.state.pictures")
    })
  }

    render(){
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
          {this.state.zones}
        </div>
      )
  }
}

export default ZoneSearch;
