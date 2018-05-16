import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import ZoneList from '../components/ZoneList';
import SpotsPage from './SpotsPage';
import ZonesPage from './ZonesPage';
import SpotNew from './SpotNew';
import ZoneSearch from '../components/ZoneSearch';
import Map from '../components/Map';

class App extends Component {

  render() {

    return (
      <Router>
        <div className='App'>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route path="/spotnew" component={SpotNew}/>
        <Route path="/spots" component={SpotsPage}/>
        <Route path="/zones" component={ZonesPage}/>
        <Route path="/map" component={Map}/>

          </div>
        </Router>
    );
  }
}

export default App;
