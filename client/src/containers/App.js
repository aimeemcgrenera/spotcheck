import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import ZoneList from '../components/ZoneList';
import Spots from '../components/Spots';
import Zones from '../components/Zones';
import SpotNew from './SpotNew';
import ZoneSearch from '../components/ZoneSearch';

class App extends Component {

  render() {

    return (
      <Router>
        <div className='App'>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route path="/spotnew" component={SpotNew}/>
        <Route path="/spots" component={Spots}/>
        <Route path="/zones" component={Zones}/>

          </div>
        </Router>
    );
  }
}

export default App;
