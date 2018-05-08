import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  state = {
    zones: [],
    searchValue: '',
  };

  handleSearchChange(e){
    const value = e.search.value;

    this.setState({
      searchValue: value,
      zones: [],
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
        <td>{zone.street_name}</td>
      ))

      return(
        <div id='zone-search'>
          <input
            className='prompt'
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
