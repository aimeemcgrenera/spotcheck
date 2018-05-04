import React, { Component } from 'react';
import ZoneSearch from './ZoneSearch';
import ZoneList from './ZoneList';

class App extends Component {
  state = {
    zones: [],
  }

  addStreet = (street) => {
    const newAddress = this.state.zones.concat(street);
    this.setState({ zones: newAddress });
  }

  render() {
    const { address } = this.state;

    return (
      <div className='App'>
        <div className='ui text container'>
          <ZoneSearch
            
          />
          <ZoneList
            zones={address}
          />
        </div>
      </div>
    );
  }
}

export default App;
