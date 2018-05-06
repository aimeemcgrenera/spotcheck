import React from 'react';
import Client from './Client';

class ZoneSearch extends React.Component {
  state = {
    zones: [],
    searchValue: '',
  };

  handleSearchChange(e){
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    Client.search(value, (zones) => {
      this.setState({
        zones: zones
      })
    })

    }

  render(){
    const zoneRows = zones.map((zone, id) => (
      
    ))
  }

}

export default ZoneSearch;
