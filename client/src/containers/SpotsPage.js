import React, from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchSpots } from '../actions/spots';
import SpotsList from '../components/SpotsList';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/spots.js'

class SpotsPage extends React.Component {

  componentDidMount() {
    if (this.props.spots.length === 0){
      this.props.actions.fetchSpots()
    }
  }


  render() {
    return (
      <div className="SpotsContainer">
        <SpotsList spots={this.props.spots} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {spots: state.spots}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
