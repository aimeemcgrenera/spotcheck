import React, { Component } from 'react';
import ZoneSearch from './ZoneSearch';
// import ZoneList from './ZoneList';
import SpotNew from './SpotNew';

class App extends Component {

  render() {

    return (
      <div className='App'>
        <div className='ui text container'>

          <SpotNew
          />

        </div>
      </div>
    );
  }
}

export default App;
