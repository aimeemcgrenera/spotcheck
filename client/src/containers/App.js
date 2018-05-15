import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import ZoneList from '../components/ZoneList';
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

          </div>
        </Router>
    );
  }
}

export default App;
