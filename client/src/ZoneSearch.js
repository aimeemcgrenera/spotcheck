import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  constructor(props) {
    state = {
      zones: [],
      searchValue: '',
  };

  handleSearchChange(e){
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === ''){
      this.setState({
        zones:[],
      });
    }

    Client.search(value => {
      this.setState({
        zones: value.slice()
      })
    })
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
          <input
            type='text'
            placeholder='Search zones...'
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
          />
          <tbody>
            {zoneRows}
          </tbody>
        </div>
      )
  }
}

export default ZoneSearch;
