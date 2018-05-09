import React, { Component } from 'react';
import ZoneSearch from './ZoneSearch';
// import ZoneList from './ZoneList';
import SpotForm from './SpotForm';

class App extends Component {

  render() {

    return (
      <div className='App'>
        <div className='ui text container'>
          <SpotForm />
          <ZoneSearch
          />

        </div>
      </div>
    );
  }
}

export default App;
